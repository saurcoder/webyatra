
"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Smartphone, BrainCircuit, Eye, Rocket } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const services = [
  {
    title: 'Custom Website Development',
    description: 'We build responsive, high-performing websites tailored to your brand identity and business objectives. From corporate sites to complex e-commerce platforms, we deliver excellence.',
    icon: Code,
  },
  {
    title: 'Mobile App Development',
    description: 'Engage your customers on the go with intuitive and powerful native or cross-platform mobile applications for iOS and Android.',
    icon: Smartphone,
  },
  {
    title: 'AI-Powered Solutions',
    description: 'Leverage the power of Artificial Intelligence to automate processes, gain insights, and create innovative products for your business.',
    icon: BrainCircuit,
  },
];

const processSteps = [
  { name: 'Discovery & Strategy', description: 'We start by understanding your vision, goals, and target audience to create a solid strategic foundation.' },
  { name: 'UI/UX Design', description: 'Our designers craft beautiful, intuitive, and user-centric interfaces that provide a delightful user experience.' },
  { name: 'Development', description: 'Our expert developers bring the designs to life with clean, scalable, and robust code.' },
  { name: 'Testing & QA', description: 'Rigorous testing ensures your product is bug-free, secure, and performs flawlessly across all devices.' },
  { name: 'Deployment & Support', description: 'We handle the launch and provide ongoing support to ensure your application runs smoothly.' },
];

const backgroundImages = [
  '/2024-12-03T01-48-07.813Z-fO0nFBF8NI2PZACWp0c03YpQ6AnKJqt5N.webp',
  '/ERP-Automation-Software-Edecofy-1024x555.png',
  '/642e5f92f6147ed845692f97_How-Mobile-App-Testing-Makes-or-Breaks-Mobile-User-Experience.webp',
];

export default function ServicesPage() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 text-white overflow-hidden bg-black">
        <div className="absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out">
          {backgroundImages.map((src, index) => (
            <Image
              key={src + index}
              src={src}
              alt="Service background"
              fill
              className={cn(
                'object-cover object-center absolute inset-0 transition-opacity duration-1000 ease-in-out scale-105',
                index === currentBgIndex ? 'opacity-100 z-0' : 'opacity-0'
              )}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 z-0" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline mb-4 tracking-tight drop-shadow-lg">
            🚀 Tailored Digital Solutions
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            From concept to launch, we deliver beautiful and high-impact digital experiences built for performance and growth.
          </p>
        </div>
      </section>


      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.title}
                className="text-center transition-all duration-300 hover:shadow-xl hover:scale-[1.03] border border-muted bg-gradient-to-br from-white to-muted/10 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary rounded-full p-4 w-fit mb-4">
                    <service.icon className="h-10 w-10" />
                  </div>
                  <CardTitle className="font-headline text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>

            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">Our Development Process</h2>
            <p className="text-muted-foreground mt-2">A proven path to building successful digital products.</p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 z-0" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              {processSteps.map((step, index) => (
                <div key={step.name} className="relative flex flex-col items-center text-center group">
                  <div className="relative z-10 bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-4 shadow-md transition-transform duration-300 group-hover:scale-110">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold font-headline mb-2 text-base">{step.name}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative bg-gradient-to-br from-primary to-accent/70 text-white overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Ready to Build Your Vision?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-white/90">
            Let’s discuss your goals — or instantly generate an AI-powered mockup to visualize your dream product.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-background text-foreground hover:bg-white transition duration-200"
            >
              <Link href="/mockup-generator">
                Generate a Mockup <Eye className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="hover:scale-105 transition-transform duration-200"
            >
              <Link href="/contact">
                Contact Us <Rocket className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
