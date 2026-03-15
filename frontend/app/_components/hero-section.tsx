import { FloatingSearchBar } from './floating-search-bar';

export const HeroSection = () => {
  return (
    <section className="relative py-10">
      <div
        className="relative overflow-hidden rounded-3xl min-h-160 flex flex-col items-center justify-center p-8 text-center bg-cover bg-center bg-[url('/images/hero-section-background.webp')]"
        data-alt="Modern architectural villa in sunset"
      >
        <div className="max-w-3xl space-y-6 text-white">
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter">
            Find Your <span className="text-primary italic">Sanctuary.</span>
          </h1>
          <p className="text-lg md:text-xl font-medium max-w-xl mx-auto">
            {`Curated architectural masterpieces in the world's most breathtaking
            locations.`}
          </p>
          <FloatingSearchBar />
        </div>
      </div>
    </section>
  );
};
