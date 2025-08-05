import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Code, School, Plane, ArrowRight, Zap, Combine } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#f0f4ff] to-[#ffffff] text-center overflow-hidden">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold font-headline text-primary mb-6 leading-tight animate-fade-in-down">
            Innovative Software Solutions for Business Growth
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            At webYatra Solutions, we craft customized websites, powerful apps, and AI-driven tools to propel your business into the future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md">
              <Link href="/services">Our Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline mb-2">Our Core Offerings</h2>
            <p className="text-muted-foreground">Solutions tailored to meet your unique business needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Custom Web & App Development',
                icon: Code,
                description: 'Bespoke digital solutions designed to deliver results and elevate your brand.',
                href: '/services',
              },
              {
                title: 'CampusConnect School ERP',
                icon: School,
                description: 'A comprehensive management solution for schools and colleges, all in one place.',
                href: '/products/campus-connect',
              },
              {
                title: 'AI Travel Planner',
                icon: Plane,
                description: 'An intelligent, ready-to-sell application that revolutionizes travel planning.',
                href: '/products/travel-planner',
              },
            ].map((feature) => (
              <Card key={feature.title} className="transform hover:scale-105 transition-transform duration-300 shadow-md">
                <CardHeader>
                  <div className="bg-primary/10 text-primary rounded-full p-3 w-fit mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-headline text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="link" className="p-0 h-auto">
                    <Link href={feature.href}>Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Mockup Generator CTA */}
      <section className="py-20 bg-gradient-to-r from-accent to-accent/70 text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-xl">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-3xl font-bold font-headline mb-2">Visualize Your Website Instantly</h2>
              <p className="text-muted-foreground">
                Use our AI-powered tool to generate a mockup for your website. Just describe your business, and let our AI do the magic.
              </p>
            </div>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/mockup-generator">Start Your Design <Zap className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <Image 
                src="/Digital-transformation-for-organisations-1080x609.jpg"
                alt="Team collaborating"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold font-headline mb-4">Your Partner in Digital Transformation</h2>
              <p className="text-muted-foreground mb-6">We don't just build software; we build relationships. Our team is dedicated to understanding your vision and turning it into a digital reality that drives success.</p>
              <div className="space-y-6">
                {[{
                  icon: Combine,
                  title: 'Tailored Solutions',
                  desc: 'Every project is unique. We provide solutions that are perfectly aligned with your business goals.',
                }, {
                  icon: Zap,
                  title: 'Cutting-Edge Technology',
                  desc: 'We leverage the latest technologies and AI to give you a competitive edge.',
                }].map((item) => (
                  <div key={item.title} className="flex items-start">
                    <div className="bg-primary/10 text-primary rounded-full p-2 mr-4">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold font-headline">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}