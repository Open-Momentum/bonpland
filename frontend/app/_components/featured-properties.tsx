import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ArrowUpRight,
  Bath,
  BedDouble,
  MoveRight,
  RulerDimensionLine,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const LargeFeaturedCard = ({
  name = 'The Glass Pavilion',
  beds = 4,
  baths = 5,
  sqft = '4,500',
  price = '$4,250,000',
  srcImg = '/images/glass-pavilion.webp',
}) => {
  return (
    <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl shadow-sm bg-accent">
      <div className="h-full min-h-100 transition-transform duration-700 group-hover:scale-105">
        <Image src={srcImg} alt={name} fill className="object-cover" />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 p-8 text-white w-full">
        <Badge
          variant="secondary"
          className="mb-4 px-3 py-1 h-auto text-xs font-bold uppercase tracking-wider"
        >{`Editor's Choice`}</Badge>
        <h3 className="text-3xl font-bold mb-2">{name}</h3>
        <div className="flex items-center gap-4 text-white/80 text-sm">
          <span className="flex items-center gap-1">
            <BedDouble className="size-4" />
            {beds} Beds
          </span>
          <span className="flex items-center gap-1">
            <Bath className="size-4" />
            {baths} Baths
          </span>
          <span className="flex items-center gap-1">
            <RulerDimensionLine className="size-4" />
            {sqft} sqft
          </span>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-2xl font-black text-primary">{price}</span>
          <Button
            size="icon-lg"
            variant="secondary"
            className="rounded-full size-12"
          >
            <ArrowUpRight className="size-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const SmallFeaturedCard = ({
  location = 'Miami, FL',
  name = 'Azure Heights',
  description = 'Panoramic ocean views with floor-to-ceiling windows and private terrace.',
  price = '$1,850,000',
  url = '#',
  srcImg = '/images/building-image.webp',
}) => {
  return (
    <div className="md:col-span-2 group bg-card shadow-sm rounded-3xl overflow-hidden flex flex-col sm:flex-row">
      <div className="sm:w-1/2 h-64 sm:h-auto overflow-hidden">
        <Image
          src={srcImg}
          width={400}
          height={400}
          alt={name}
          className="aspect-square transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover"
        />
      </div>
      <div className="sm:w-1/2 p-6 flex flex-col justify-between">
        <div>
          <p className="text-primary font-bold text-sm mb-1">{location}</p>
          <h3 className="text-xl font-bold mb-3">{name}</h3>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            {description}
          </p>
        </div>
        <div className="mt-4">
          <p className="text-xl font-black">{price}</p>
          <Button
            variant="link"
            className="mt-4 text-sm font-bold text-primary group-hover:gap-4 transition-all px-0"
            asChild
          >
            <Link href={url} className="flex items-center gap-2 ">
              View Property <MoveRight className="size-6" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export const FeaturedProperties = () => {
  return (
    <section className="py-20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
        <div>
          <span className="text-primary font-bold tracking-widest text-xs uppercase">
            Curated Collection
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
            Featured Properties
          </h2>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2 rounded-full bg-primary text-white text-sm font-bold">
            All
          </button>
          <button className="px-5 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-bold">
            Villas
          </button>
          <button className="px-5 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-bold">
            Penthouses
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <LargeFeaturedCard />
        <SmallFeaturedCard />
        <SmallFeaturedCard
          name="Oakwood Manor"
          location="Aspen, CO"
          description="Exclusive mountain retreat featuring sustainable cedar wood and open design."
          price="$3,100,000"
          srcImg="/images/rural-house.webp"
          url="#"
        />
      </div>
    </section>
  );
};
