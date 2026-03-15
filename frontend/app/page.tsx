import {
  FeaturedProperties,
  HeroSection,
  OurEvolution,
  WhoWeAre,
} from './_components';

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-10">
      <HeroSection />
      <FeaturedProperties />
      <WhoWeAre />
      <OurEvolution />
    </main>
  );
}
