import Link from 'next/link';
import { Isotipo } from '@/components/icons/isotipo';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const NAV_OPTIONS = [
  { label: 'Buy', href: '#' },
  { label: 'Rent', href: '#' },
  { label: 'Sell', href: '#' },
  { label: 'About Us', href: '#' },
];

export const Header = () => {
  // if(isLanding) return X
  // if(isAuth) return Y

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b ">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="size-10 bg-primary rounded-lg grid place-items-center">
            <Isotipo className="size-6 text-primary-foreground" />
          </div>
          <h2 className="text-xl font-bold tracking-tight">Bonpland</h2>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {NAV_OPTIONS.map((option) => (
            <Link
              key={option.label}
              href={option.href}
              className="text-sm font-semibold hover:text-primary transition-colors"
            >
              {option.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button size="lg">List Your Property</Button>
          <Avatar size="lg">
            <AvatarImage src="https://github.com/MrRedu.png" />
            <AvatarFallback>RD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};
