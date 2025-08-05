import { ContactForm } from '@/components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-background">
      {/* Intro Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-4 animate-fade-in-down">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you want to start a new project, have a question, or just want to say hi — we’d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Details + Form */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-xl shadow-xl items-start">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold font-headline mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary rounded-xl p-3 shadow-sm">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base">Email</h3>
                    <a href="mailto:webyatrasolutions@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      webyatrasolutions@gmail.com

                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary rounded-xl p-3 shadow-sm">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base">Phone</h3>
                    <a href="tel:9818286717" className="text-muted-foreground hover:text-primary transition-colors">
                      9818286717
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary rounded-xl p-3 shadow-sm">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base">Office</h3>
                    <p className="text-muted-foreground mb-1">
                      47Q6+3C2, Lambhua Dhopap Rd, Naugawan, Balahi, Uttar Pradesh 222302
                    </p>
                    <a
                      href="https://maps.app.goo.gl/frCNB9EzQytBZPZw8"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Map
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold font-headline mb-6">Send us a Message</h2>
              <div className="bg-background p-6 rounded-lg shadow-inner">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-headline text-center mb-10">Find Us</h2>
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.8132557418567!2d82.2584616756651!3d26.13763119296887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39907f0074a04c8f%3A0x6b33ea2c1c2b8ec0!2sWeb%20yatra%20solutions!5e0!3m2!1sen!2sin!4v1754150888455!5m2!1sen!2sin"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
