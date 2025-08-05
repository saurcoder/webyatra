import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPosts } from '@/lib/blog';
import Head from 'next/head';

export const revalidate = 3600; // Revalidate every hour

// Pre-render blog slugs at build time
export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const posts = await getBlogPosts();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Head>
        <title>{post.title} | webYatra Blog</title>
        <meta name="description" content={post.description || 'Read our latest insights and updates.'} />
        <link rel="canonical" href={`https://webyatra.com/blog/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description || 'Read our latest insights and updates.'} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://webyatra.com/blog/${post.slug}`} />
      </Head>

      <div className="bg-background">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-primary hover:text-accent mb-8 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>

            <article>
              {/* Title and Meta */}
              <header className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-4 leading-tight">
                  {post.title}
                </h1>
                <p className="text-muted-foreground text-lg">
                  Posted on {post.date} by {post.author}
                </p>
              </header>

              {/* Featured Image */}
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover rounded-lg shadow-lg mb-8"
                  priority
                />
              )}

              {/* Content Body */}
              <div
                className="prose prose-xl max-w-none text-foreground/90 prose-h2:text-3xl prose-h3:text-2xl prose-p:leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
