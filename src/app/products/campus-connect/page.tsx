import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import {
  CheckCircle,
  School,
  User,
  Book,
  Calendar,
  BarChart2,
  MessageSquare,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const features = [
  { name: 'Student Information System', icon: User },
  { name: 'Admissions Management', icon: School },
  { name: 'Academic Management', icon: Book },
  { name: 'Timetable Scheduling', icon: Calendar },
  { name: 'Fee Collection & Finance', icon: BarChart2 },
  { name: 'Communication Portal', icon: MessageSquare },
];

export default function CampusConnectPage() {
  return (
    <div className="bg-white text-foreground">
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <School className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-headline">
                CampusConnect ERP
              </h1>
            </div>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
              The all-in-one solution for schools and colleges. Streamline
              operations, enhance communication, and foster a better learning
              environment.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Link href="/contact?subject=CampusConnect Demo Request">
                Request a Demo
              </Link>
            </Button>
          </div>
        </div>

        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 -mr-32 -mt-20">
          <div className="w-96 h-96 bg-white/10 rounded-full blur-2xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-40">
          <div className="w-80 h-80 bg-white/10 rounded-full blur-2xl"></div>
        </div>
      </section>

      {/* Image Showcase */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Image
            src="/aboutus.jpg"
            alt="CampusConnect Dashboard"
            width={600}
            height={600}
            className="rounded-xl shadow-2xl mx-auto"
            data-ai-hint="dashboard analytics"
          />
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">
              Powerful Features, Simplified
            </h2>
            <p className="text-muted-foreground mt-2">
              Everything you need to manage your institution efficiently.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card
                key={feature.name}
                className="transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <CardHeader className="flex flex-row items-center gap-4">
                  <feature.icon className="h-8 w-8 text-primary shrink-0" />
                  <CardTitle className="font-headline text-lg">
                    {feature.name}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">
              Benefits for Your Institution
            </h2>
            <p className="text-muted-foreground mt-2">
              Unlock efficiency and growth with CampusConnect.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Image
                src="/upper-main-image-2.webp"
                alt="Happy students and staff"
                width={600}
                height={450}
                className="rounded-lg shadow-xl"
                data-ai-hint="students learning"
              />
            </div>
            <div className="space-y-6">
              {[
                {
                  title: 'Centralized Data',
                  desc: 'Access all student, staff, and administrative data from a single, secure platform.',
                },
                {
                  title: 'Improved Communication',
                  desc: 'Seamlessly connect with students, parents, and teachers through integrated messaging and portals.',
                },
                {
                  title: 'Automated Workflows',
                  desc: 'Reduce administrative overhead by automating tasks like fee collection, admissions, and report generation.',
                },
              ].map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold font-headline">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
