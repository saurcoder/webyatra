import React from 'react';
import Link from 'next/link';
import {
  Mountain,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-background text-muted-foreground">
      <div className="container px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Mountain className="h-6 w-6 text-primary" />
              <span className="font-headline font-bold text-lg text-foreground">
                webYatra Solutions
              </span>
            </Link>
            <p className="text-sm">
              Innovative Software Solutions for Your Business Growth.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-[#1877F2] transition-colors" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-[#1DA1F2] transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-[#0A66C2] transition-colors" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-[#E1306C] transition-colors" />
              </a>
            </div>

          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-semibold font-headline mb-4 text-foreground">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm hover:text-primary">
                  Custom Websites
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-primary">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/mockup-generator" className="text-sm hover:text-primary">
                  AI Mockup Generator
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-base font-semibold font-headline mb-4 text-foreground">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products/campus-connect" className="text-sm hover:text-primary">
                  CampusConnect ERP
                </Link>
              </li>
              <li>
                <Link href="/products/travel-planner" className="text-sm hover:text-primary">
                  AI Travel Planner
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-base font-semibold font-headline mb-4 text-foreground">Company</h4>
            <ul className="space-y-2">
              {/* <li>
                <Link href="/blog" className="text-sm hover:text-primary">
                  Blog
                </Link>
              </li> */}
              <li>
                <Link href="/contact" className="text-sm hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} webYatra Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
