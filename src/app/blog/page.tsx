'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { getBlogPosts } from '@/lib/blog';
import { BlogPost } from '@/ai/flows/generate-blog-posts';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Loader2 } from 'lucide-react';

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const [allPosts, setAllPosts] = useState<BlogPost[]>([]);
  const [displayedPosts, setDisplayedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const posts = await getBlogPosts();
        setAllPosts(posts);
        setDisplayedPosts(posts.slice(0, POSTS_PER_PAGE));
      } catch (error) {
        console.error('Failed to fetch blog posts:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const loadMorePosts = () => {
    const nextPage = page + 1;
    const newPosts = allPosts.slice(0, nextPage * POSTS_PER_PAGE);
    setDisplayedPosts(newPosts);
    setPage(nextPage);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen px-4 text-center">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
        <p className="ml-4 text-muted-foreground">Generating fresh content and images... this may take a moment.</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Blog - webYatra Solutions</title>
        <meta name="description" content="Read the latest tech blogs, success stories, and updates from webYatra Solutions. Fresh content daily!" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webyatra.com/blog" />
      </Head>

      <div className="bg-background">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-4">Insights and Updates</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay informed with the latest industry insights, company news, and success stories from webYatra Solutions.
              Our blog is updated daily with fresh, AI-generated content on technology.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            {displayedPosts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {displayedPosts.map((post, index) => (
                    <Card key={`${post.slug}-${index}`} className="flex flex-col overflow-hidden group">
                      {post.image && (
                        <div className="overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title || 'Blog Post Image'}
                            width={600}
                            height={400}
                            loading="lazy"
                            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="font-headline line-clamp-2">{post.title}</CardTitle>
                        <CardDescription className="text-sm text-muted-foreground pt-2">
                          {post.date} by {post.author}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground text-sm line-clamp-3">{post.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-primary font-semibold flex items-center group-hover:text-accent transition-colors"
                        >
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                {displayedPosts.length < allPosts.length && (
                  <div className="text-center mt-12">
                    <Button onClick={loadMorePosts} size="lg">
                      Load More
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <h2 className="text-2xl font-bold font-headline">No blog posts yet!</h2>
                <p className="text-muted-foreground mt-2">New posts are generated daily. Please check back later.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
