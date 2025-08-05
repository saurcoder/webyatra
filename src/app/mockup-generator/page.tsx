import { MockupGeneratorForm } from '@/components/MockupGeneratorForm';
import { Lightbulb, PencilRuler, Zap } from 'lucide-react';

export default function MockupGeneratorPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-tr from-orange-100 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center bg-primary/10 text-primary p-4 rounded-full mb-4">
            <Zap className="h-10 w-10 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-4">
            AI Website Mockup Generator
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Describe your business in a few words — our AI will generate a clean, modern website mockup for you in seconds.
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Form Section */}
            <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-xl border border-muted">
              <MockupGeneratorForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* How It Works */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-muted">
                <div className="flex items-center gap-4 mb-3">
                  <Lightbulb className="h-8 w-8 text-accent" />
                  <h3 className="text-xl font-bold font-headline text-foreground">
                    How it Works
                  </h3>
                </div>
                <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground leading-relaxed">
                  <li>Describe your business, goals, and target users.</li>
                  <li>Be specific — AI loves context!</li>
                  <li>Click “Generate Mockup” and let us build a layout instantly.</li>
                  <li>Preview, download, or use it to kick off development.</li>
                </ol>
              </div>

              {/* Next Steps */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-muted">
                <div className="flex items-center gap-4 mb-3">
                  <PencilRuler className="h-8 w-8 text-accent" />
                  <h3 className="text-xl font-bold font-headline text-foreground">
                    What Happens Next?
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Love the mockup? Our team can bring it to life with scalable, responsive code and seamless animations — ready for production or MVP.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
