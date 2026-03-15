import Image from 'next/image';
import { FloatingSearchBar } from './floating-search-bar';

export const HeroSection = () => {
  return (
    <section className="relative py-10">
      <div className="relative overflow-hidden rounded-3xl min-h-160 flex flex-col items-center justify-center p-8 text-center bg-accent">
        <Image
          src="/images/hero-section-background.webp"
          alt="Modern architectural villa in sunset"
          fill
          className="object-cover absolute inset-0 z-0"
          loading="eager"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-xs" />
        <div className="max-w-3xl space-y-6 text-white z-1">
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter">
            Encuentra tu <span className="text-primary italic">Hogar.</span>
          </h1>
          <p className="text-lg md:text-xl font-medium max-w-xl mx-auto">
            {`Propiedades seleccionadas para alquilar o comprar, en las mejores
            ubicaciones de la ciudad.`}
          </p>
          <FloatingSearchBar />
        </div>
      </div>
    </section>
  );
};
