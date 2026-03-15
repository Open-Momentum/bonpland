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
              {`Servicios inmobiliarios premium para quienes buscan excelencia.
              Nos especializamos en propiedades exclusivas en los mercados con 
              mayor potencial de crecimiento.`}
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
            <h5 className="font-bold mb-6">Explora</h5>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              {[
                'Propiedades destacadas',
                'Ventas recientes',
                'Gestión de activos',
                'Inversiones',
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
            <h5 className="font-bold mb-6">Empresa</h5>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              {[
                'Nuestra historia',
                'Equipo de asesores',
                'Oportunidades',
                'Prensa y medios',
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
            <h5 className="font-bold mb-6">Contacto</h5>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="size-4" />
                Calle Principal #123,
                <br />
                Centro Empresarial
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4" />
                +58 (212) 555-0100
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4" />
                contacto@bonpland.com
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t gap-4">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Bonpland. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-8 text-xs text-gray-400">
            <a className="hover:text-primary" href="#">
              Política de privacidad
            </a>
            <a className="hover:text-primary" href="#">
              Términos de servicio
            </a>
            <a className="hover:text-primary" href="#">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
