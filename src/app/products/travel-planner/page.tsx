import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Plane,
  MapPin,
  Sparkles,
  CalendarDays,
  Wallet,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
// import { NextSeo } from 'next-seo';

const features = [
  {
    title: 'Personalized Itineraries',
    description:
      'Our AI analyzes your preferences to create unique travel plans just for you.',
    icon: Sparkles,
  },
  {
    title: 'Smart Recommendations',
    description:
      'Discover hidden gems and top attractions based on real-time data and user reviews.',
    icon: MapPin,
  },
  {
    title: 'Budget Tracking',
    description:
      'Plan your trip without breaking the bank. Our app helps you manage expenses easily.',
    icon: Wallet,
  },
  {
    title: 'Seamless Booking',
    description:
      'Book flights, hotels, and activities directly within the app.',
    icon: CalendarDays,
  },
];

export default function TravelPlannerPage() {
  return (
    <div className="bg-white">
      {/* <NextSeo
        title="AI Travel Planner - Intelligent Trip Planning App | webYatra Solutions"
        description="Experience next-gen travel with our AI-powered travel planner. Create personalized itineraries, track your budget, and explore like never before."
        canonical="https://webyatra.com/products/travel-planner"
        openGraph={{
          url: 'https://webyatra.com/products/travel-planner',
          title: 'AI Travel Planner - Intelligent Trip Planning App | webYatra Solutions',
          description:
            'Experience next-gen travel with our AI-powered travel planner. Create personalized itineraries, track your budget, and explore like never before.',
          images: [
            {
              url: '/2024-12-03T01-48-07.813Z-fO0nFBF8NI2PZACWp0c03YpQ6AnKJqt5N.webp',
              width: 800,
              height: 600,
              alt: 'AI Travel Planner App Interface',
            },
          ],
          site_name: 'webYatra Solutions',
        }}
      /> */}

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-orange-400 to-amber-500 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Plane className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold font-headline">
                  AI Travel Planner
                </h1>
              </div>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Plan your next adventure intelligently. Our AI-powered app
                creates personalized itineraries, making travel planning
                effortless and fun.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-orange-500 hover:bg-gray-100"
              >
                <Link href="/contact?subject=AI Travel Planner Inquiry">
                  Learn More
                </Link>
              </Button>
            </div>
            <div className="hidden md:block">
              <Image
                src="/2024-12-03T01-48-07.813Z-fO0nFBF8NI2PZACWp0c03YpQ6AnKJqt5N.webp"
                alt="AI Travel Planner App"
                width={500}
                height={500}
                className="rounded-full shadow-2xl"
                data-ai-hint="phone travel"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">
              Your Smart Travel Companion
            </h2>
            <p className="text-muted-foreground mt-2">
              Features designed to make your journey unforgettable.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardHeader>
                  <div className="mx-auto bg-accent/10 text-accent rounded-full p-3 w-fit mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-headline text-lg">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold font-headline mb-6">
                Planning Your Trip is as Easy as 1-2-3
              </h2>
              <div className="space-y-6">
                {[
                  {
                    step: '1',
                    title: 'Tell Us Your Dream',
                    desc: 'Input your destination, travel dates, interests, and budget.',
                  },
                  {
                    step: '2',
                    title: 'AI Crafts Your Plan',
                    desc: 'Our intelligent engine generates a customized day-by-day itinerary in seconds.',
                  },
                  {
                    step: '3',
                    title: 'Explore with Confidence',
                    desc: 'Enjoy your trip with all the details, bookings, and recommendations in your pocket.',
                  },
                ].map(({ step, title, desc }) => (
                  <div className="flex items-start gap-4" key={step}>
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold font-headline text-xl">
                      {step}
                    </div>
                    <div>
                      <h3 className="font-semibold font-headline">{title}</h3>
                      <p className="text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="/1724189174850.png"
                alt="App interface"
                width={600}
                height={600}
                className="rounded-xl shadow-2xl"
                data-ai-hint="phone app"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-headline mb-4">
            Ready to Revolutionize Travel?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            This powerful, ready-to-sell app can be your next big product.
            Contact us for licensing or partnership opportunities.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Link href="/contact?subject=AI Travel Planner Partnership">
              Inquire Now
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}