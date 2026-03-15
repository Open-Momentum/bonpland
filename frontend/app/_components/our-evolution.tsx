import {
  BadgeCheck,
  HandshakeIcon,
  Home,
  KeyRound,
  MapPinned,
  TrendingUp,
} from 'lucide-react';

const VENTAJAS = [
  {
    icon: Home,
    title: 'Variedad de propiedades',
    description:
      'Contamos con un amplio catálogo de casas, apartamentos, oficinas, locales y terrenos para alquilar o comprar.',
  },
  {
    icon: BadgeCheck,
    title: 'Operaciones transparentes',
    description:
      'Trabajamos con total claridad en cada etapa del proceso: sin sorpresas ni condiciones ocultas.',
  },
  {
    icon: HandshakeIcon,
    title: 'Asesoramiento personalizado',
    description:
      'Nuestros asesores te acompañan desde la búsqueda hasta la firma, brindando toda la información necesaria.',
  },
  {
    icon: MapPinned,
    title: 'Presencia en zonas estratégicas',
    description:
      'Operamos en las ubicaciones más demandadas y con mayor potencial de crecimiento de la ciudad.',
  },
  {
    icon: TrendingUp,
    title: 'Tasación precisa',
    description:
      'Valuamos tu propiedad al precio justo del mercado para que vendas o alquiles rápido y sin perder dinero.',
  },
  {
    icon: KeyRound,
    title: 'Entrega sin complicaciones',
    description:
      'Gestionamos toda la documentación, contratos y transferencias para que tu operación sea segura y simple.',
  },
];

export const OurEvolution = () => {
  return (
    <div className="w-full max-w-7xl py-20">
      <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="lg:sticky lg:top-48 lg:self-start">
          <div className="max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              Por qué elegir
              <br />
              Bonpland
              <br />
              <span className="text-muted-foreground">Propiedades</span>
            </h2>
          </div>
        </div>
        <div className="-mt-8 sm:-mt-12">
          {VENTAJAS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="relative flex flex-col justify-center overflow-hidden border-b py-8 shadow-none sm:py-12"
            >
              <div className="flex gap-4 sm:gap-6">
                <div className="shrink-0 text-primary">
                  <Icon className="size-8" />
                </div>
                <div>
                  <h4 className="mb-2 text-2xl font-semibold text-primary sm:text-3xl">
                    {title}
                  </h4>
                  <p className="mt-6 text-sm text-muted-foreground sm:text-base">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
