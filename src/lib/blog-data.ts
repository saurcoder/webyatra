'use server';

import fs from 'fs/promises';
import path from 'path';
import { BlogPost } from '@/ai/flows/generate-blog-posts';

const BLOG_DATA_PATH = path.join(process.cwd(), 'src', 'data', 'blog.json');

export interface BlogData {
  lastGenerated: string;
  posts: BlogPost[];
}

export async function readBlogData(): Promise<BlogData> {
  try {
    const data = await fs.readFile(BLOG_DATA_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // If file doesn't exist, return default structure
    return { lastGenerated: new Date(0).toISOString(), posts: [] };
  }
}

export async function writeBlogData(data: BlogData): Promise<void> {
  await fs.writeFile(BLOG_DATA_PATH, JSON.stringify(data, null, 2), 'utf-8');
}
