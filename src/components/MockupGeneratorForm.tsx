"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { generateWebsiteMockup } from '@/ai/flows/generate-website-mockup';
import { Loader2, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';

const formSchema = z.object({
  businessDetails: z.string().min(50, {
    message: "Please provide at least 50 characters to generate a meaningful mockup.",
  }),
});

export function MockupGeneratorForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [mockupImage, setMockupImage] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessDetails: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setMockupImage(null);
    try {
      const result = await generateWebsiteMockup({ businessDetails: values.businessDetails });
      if (result.mockupImage) {
        setMockupImage(result.mockupImage);
        toast({
          title: "Mockup Generated!",
          description: "Your website mockup is ready below.",
        });
      } else {
        throw new Error("The AI did not return an image.");
      }
    } catch (error) {
      console.error("Error generating mockup:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem generating your mockup. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="businessDetails"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-semibold font-headline">Describe Your Business</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g., We are a boutique coffee shop in downtown that specializes in artisanal, single-origin coffee beans. We want a modern, minimalist website that appeals to young professionals. Key features should include an online store for beans, a blog about coffee culture, and our cafe locations..."
                    className="min-h-[200px] text-base"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  The more detail you provide, the better the AI can tailor the design to your needs.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading} size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-5 w-5" />
                Generate Mockup
              </>
            )}
          </Button>
        </form>
      </Form>
      <div className="mt-12">
        {isLoading && (
            <div>
                <h3 className="text-xl font-bold font-headline mb-4 text-center">Your mockup is being generated...</h3>
                <Skeleton className="w-full aspect-video rounded-lg" />
            </div>
        )}
        {mockupImage && (
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold font-headline mb-4 text-center">Here's Your AI-Generated Mockup!</h3>
            <Image
              src={mockupImage}
              alt="AI-generated website mockup"
              width={1200}
              height={900}
              className="rounded-lg border shadow-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
}
