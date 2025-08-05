'use server';

/**
 * @fileOverview Generates a website mockup based on business details provided by the client.
 *
 * - generateWebsiteMockup - A function that generates the website mockup.
 * - GenerateWebsiteMockupInput - The input type for the generateWebsiteMockup function.
 * - GenerateWebsiteMockupOutput - The return type for the generateWebsiteMockup function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateWebsiteMockupInputSchema = z.object({
  businessDetails: z
    .string()
    .describe('Detailed description of the business, including its purpose, target audience, and desired website features.'),
});
export type GenerateWebsiteMockupInput = z.infer<
  typeof GenerateWebsiteMockupInputSchema
>;

const GenerateWebsiteMockupOutputSchema = z.object({
  mockupImage: z
    .string()
    .describe(
      "A generated image of a website mockup, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type GenerateWebsiteMockupOutput = z.infer<
  typeof GenerateWebsiteMockupOutputSchema
>;

export async function generateWebsiteMockup(
  input: GenerateWebsiteMockupInput
): Promise<GenerateWebsiteMockupOutput> {
  return generateWebsiteMockupFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateWebsiteMockupPrompt',
  input: {schema: GenerateWebsiteMockupInputSchema},
  output: {schema: GenerateWebsiteMockupOutputSchema},
  prompt: `You are an AI website designer. Please generate a website mockup image based on the following business details:

Business Details: {{{businessDetails}}}

Instructions:
1.  Incorporate the business details into a visually appealing website design.
2.  Pay attention to layout, color scheme, and overall aesthetic to create a professional mockup.
3.  The mockup should represent the essence of the business and its offerings.

Output:
Return a single website mockup image as a data URI.

{{media url=mockupImage}}
`,
});

const generateWebsiteMockupFlow = ai.defineFlow(
  {
    name: 'generateWebsiteMockupFlow',
    inputSchema: GenerateWebsiteMockupInputSchema,
    outputSchema: GenerateWebsiteMockupOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      // IMPORTANT: ONLY the googleai/gemini-2.0-flash-preview-image-generation model is able to generate images. You MUST use exactly this model to generate images.
      model: 'googleai/gemini-2.0-flash-preview-image-generation',
      prompt: `Generate a website mockup based on these business details: ${input.businessDetails}`,
      config: {
        responseModalities: ['TEXT', 'IMAGE'], // MUST provide both TEXT and IMAGE, IMAGE only won't work
      },
    });

    return {mockupImage: media!.url!};
  }
);
