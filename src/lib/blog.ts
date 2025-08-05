'use server';

import { generateBlogPosts, BlogPost } from '@/ai/flows/generate-blog-posts';
import { readBlogData, writeBlogData } from '@/lib/blog-data';

const MAX_POSTS = 50;
const COOLDOWN_HOURS = 24;

export async function getBlogPosts(): Promise<BlogPost[]> {
  const blogData = await readBlogData();
  const now = new Date();
  const lastGenerated = new Date(blogData.lastGenerated);
  const hoursSinceLastGeneration = (now.getTime() - lastGenerated.getTime()) / (1000 * 60 * 60);

  // Generate new posts if it's been long enough OR if there are no posts at all.
  if (hoursSinceLastGeneration >= COOLDOWN_HOURS || blogData.posts.length === 0) {
    console.log('Generating new blog posts...');
    try {
      const newPosts = await generateBlogPosts();
      
      // Prepend new posts to the existing ones
      let updatedPosts = [...newPosts, ...blogData.posts];
      
      // If we have more than MAX_POSTS, trim the oldest ones
      if (updatedPosts.length > MAX_POSTS) {
        updatedPosts = updatedPosts.slice(0, MAX_POSTS);
      }
      
      const updatedBlogData = {
        lastGenerated: now.toISOString(),
        posts: updatedPosts,
      };

      await writeBlogData(updatedBlogData);
      // Return the newly updated and sorted posts
      return updatedBlogData.posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    } catch (error) {
      console.error("Failed to generate new blog posts:", error);
      // Return existing posts on failure, sorted by date
      return blogData.posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
  }

  // Return existing posts, sorted by date
  return blogData.posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
