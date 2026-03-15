import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Banknote, MapPin, School, Search } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

export const FloatingSearchBar = () => {
  return (
    <div className="mt-12 w-full max-w-4xl bg-background p-3 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-2 text-primary">
      <div className="flex-1 flex items-center gap-3 px-4 py-3  w-full">
        <MapPin className="size-6" />
        <Input
          type="text"
          placeholder="Where would you like to live?"
          className="bg-transparent border-none focus:ring-0 text-sm w-full"
        />
      </div>

      <Separator orientation="vertical" className="h-14 hidden md:block" />
      <Separator className="w-full md:hidden" />

      <div className="flex-1 flex items-center gap-3 px-4 py-3 w-full">
        <School className="size-6" />
        <Select>
          <SelectTrigger className="bg-transparent border-none focus:ring-0 text-sm w-full max-w-30"> 
            <SelectValue placeholder="Property Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Property Type</SelectLabel>
              <SelectItem value="modern-villa">Modern Villa</SelectItem>
              <SelectItem value="luxury-apartment">Luxury Apartment</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <Separator orientation="vertical" className="h-14 hidden md:block" />
      <Separator className="w-full md:hidden" />

      <div className="flex-1 flex items-center gap-3 px-4 py-3 w-full">
        <Banknote className="size-6"/>
        <Input
          type="text"
          placeholder="Price range"
          className="bg-transparent border-none focus:ring-0 text-sm w-full"
        />
      </div>
      <Button
        size={'lg'}
        className="w-full md:w-auto hover:scale-[1.02] transition-transform px-10! py-4! rounded-full! h-auto"
      >
        <Search /> Search
      </Button>
    </div>
  );
};
