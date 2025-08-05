'use server';

/**
 * @fileOverview Generates multiple tech-related blog posts.
 * - generateBlogPosts - A function that generates the blog posts.
 * - BlogPost - The output type for a single blog post.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { format } from 'date-fns';

const BlogPostSchema = z.object({
  title: z.string().describe('The catchy title of the blog post.'),
  slug: z.string().describe('The URL-friendly slug for the blog post, consisting of lowercase letters, numbers, and hyphens.'),
  description: z.string().describe('A brief, one-sentence summary of the blog post.'),
  content: z.string().describe('The full content of the blog post in HTML format. It should be well-structured with paragraphs, headings, and lists where appropriate. At least 500 words.'),
  author: z.string().describe('The name of the author, should be a common tech personality name.'),
  image: z.string().describe("A generated image for the blog post, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."),
}).transform(post => ({
  ...post,
  date: format(new Date(), 'MMMM dd, yyyy')
}));

export type BlogPost = z.infer<typeof BlogPostSchema>;

const GenerateBlogPostsOutputSchema = z.object({
  posts: z.array(z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    content: z.string(),
    author: z.string(),
  })).length(6).describe('An array of 6 unique, high-quality tech blog posts, without the image.'),
});

export async function generateBlogPosts(): Promise<BlogPost[]> {
    const result = await generateBlogPostsFlow();
    return result;
}

const textContentPrompt = ai.definePrompt({
  name: 'generateBlogTextContentPrompt',
  output: { schema: GenerateBlogPostsOutputSchema },
  prompt: `You are an expert tech blogger for a company called "webYatra Solutions". Your task is to generate 6 fresh, insightful, and engaging blog posts about the latest trends in technology.

Guidelines:
- Each post must be unique and provide real value to readers.
- Topics should be current and relevant to web development, AI, software solutions, and business technology.
- The tone should be professional yet accessible.
- Each post must have a globally unique slug.
- The content must be at least 500 words and formatted as clean HTML.
- Use a variety of credible-sounding author names.
`,
});

const generateBlogPostsFlow = ai.defineFlow(
  {
    name: 'generateBlogPostsFlow',
    outputSchema: z.array(BlogPostSchema),
  },
  async () => {
    const { output } = await textContentPrompt();
    if (!output) {
      throw new Error('Failed to generate blog post content.');
    }

    const imageGenerationPromises = output.posts.map(async (post) => {
      try {
        const { media } = await ai.generate({
          model: 'googleai/gemini-2.0-flash-preview-image-generation',
          prompt: `Generate a high-quality, visually appealing blog cover image for a tech article titled "${post.title}". The article is about: ${post.description}. The image should be abstract or conceptual and suitable for a professional tech blog.`,
          config: {
            responseModalities: ['TEXT', 'IMAGE'],
          },
        });
        return {
          ...post,
          image: media?.url || 'https://placehold.co/1200x600.png',
        };
      } catch (e) {
         console.error(`Failed to generate image for post: ${post.title}`, e);
         // Return post with a placeholder image in case of failure
         return {
            ...post,
            image: 'https://placehold.co/1200x600.png',
         }
      }
    });

    const postsWithImages = await Promise.all(imageGenerationPromises);
    
    // Transform to add the date and validate
    return postsWithImages.map(post => BlogPostSchema.parse(post));
  }
);
