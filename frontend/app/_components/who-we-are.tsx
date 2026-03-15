import Image from 'next/image';

export const WhoWeAre = () => {
  return (
    <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center py-20">
      <div className="space-y-8">
        <div>
          <span className="text-primary font-bold tracking-widest text-xs uppercase">
            Desde 1995
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 leading-tight">
            Más de 30 años construyendo confianza en el mercado inmobiliario
          </h2>
        </div>
        <p className="text-muted-foreground text-lg leading-relaxed">
          {`Bonpland Propiedades nació como un emprendimiento familiar enfocado en 
          la excelencia. Hoy somos referentes en el mercado, con operaciones
          exitosas en alquiler, venta y asesoría inmobiliaria. Cada paso que damos
          es un compromiso con la transparencia y la satisfacción de nuestros clientes.`}
        </p>
        <div className="grid grid-cols-2 gap-6">
          <div className="p-6 bg-card rounded-2xl shadow-sm">
            <h4 className="text-3xl font-black text-primary">2.000+</h4>
            <p className="text-sm font-semibold mt-1">Propiedades operadas</p>
          </div>
          <div className="p-6 bg-card rounded-2xl shadow-sm">
            <h4 className="text-3xl font-black text-primary">30+</h4>
            <p className="text-sm font-semibold mt-1">Años de experiencia</p>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image
          src="/images/who-we-are-section.webp"
          alt="Equipo de asesores inmobiliarios de Bonpland Propiedades"
          width={600}
          height={600}
          className="object-cover aspect-square rounded-[3rem] shadow-2xl relative z-10"
        />
      </div>
    </div>
  );
};
