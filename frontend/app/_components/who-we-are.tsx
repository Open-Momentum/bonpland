import Image from 'next/image';

export const WhoWeAre = () => {
  return (
    <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center py-20">
      <div className="space-y-8">
        <div>
          <span className="text-primary font-bold tracking-widest text-xs uppercase">
            Since 1984
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 leading-tight">
            Defining Modern Living Through Legacy
          </h2>
        </div>
        <p className="text-muted-foreground text-lg leading-relaxed">
          {`EstateHaven began as a family-run boutique in the heart of London.
          Today, we stand as a global beacon of architectural excellence and
          trustworthy transactions. We don't just sell houses; we curate
          environments where memories are forged.`}
        </p>
        <div className="grid grid-cols-2 gap-6">
          <div className="p-6 bg-card rounded-2xl shadow-sm">
            <h4 className="text-3xl font-black text-primary">3,500+</h4>
            <p className="text-sm font-semibold mt-1">Properties Sold</p>
          </div>
          <div className="p-6 bg-card rounded-2xl shadow-sm">
            <h4 className="text-3xl font-black text-primary">40+</h4>
            <p className="text-sm font-semibold mt-1">Global Cities</p>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image
          src="/images/who-we-are-section.webp"
          alt="Team of professional architects and agents"
          width={600}
          height={600}
          className="object-cover aspect-square rounded-[3rem] shadow-2xl relative z-10"
        />
      </div>
    </div>
  );
};
