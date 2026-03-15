import { AtSign, Globe, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Isotipo } from '../icons/isotipo';

export const Footer = () => {
  return (
    <footer className="bg-background border-t pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="size-8 bg-primary rounded-lg grid place-items-center">
                <Isotipo className="size-4 text-primary-foreground" />
              </div>
              <h2 className="text-xl font-bold tracking-tight">Bonpland</h2>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              {`Premier real estate services for the modern connoisseur. We
              specialize in luxury properties across the globe's most exclusive
              markets.`}
            </p>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon-lg"
                className="rounded-full"
                asChild
              >
                <Link href="#">
                  <Globe className="size-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon-lg"
                className="rounded-full"
                asChild
              >
                <Link href="#">
                  <AtSign className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div>
            <h5 className="font-bold mb-6">Explore</h5>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              {[
                'Featured Listings',
                'Recent Sales',
                'Property Management',
                'Investment Portfolios',
              ].map((item) => (
                <li key={item}>
                  <Link
                    className="hover:text-primary transition-colors"
                    href="#"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6">Company</h5>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              {[
                'About Our Story',
                'Meet the Team',
                'Career Opportunities',
                'Press & Media',
              ].map((item) => (
                <li key={item}>
                  <Link
                    className="hover:text-primary transition-colors"
                    href="#"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6">Contact</h5>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="size-4" />
                1200 Avenue of the Americas
                <br />
                New York, NY 10036
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4" />
                +1 (123) 456-7890
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4" />
                email@contact.com
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t gap-4">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Bonpland. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-gray-400">
            <a className="hover:text-primary" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-primary" href="#">
              Terms of Service
            </a>
            <a className="hover:text-primary" href="#">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
