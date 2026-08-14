import { Hero } from '@/components/home/Hero';
import { Introduction } from '@/components/home/Introduction';
import { Location } from '@/components/home/Location';
import { Concept } from '@/components/home/Concept';
import { BuiltToStay } from '@/components/home/BuiltToStay';
import { Residences } from '@/components/home/Residences';
import { Lifestyle } from '@/components/home/Lifestyle';
import { Amenities } from '@/components/home/Amenities';
import { Space } from '@/components/home/Space';
import { Materials } from '@/components/home/Materials';
import { SmartLiving } from '@/components/home/SmartLiving';
import { Architecture } from '@/components/home/Architecture';
import { Gallery } from '@/components/home/Gallery';
import { LocationMap } from '@/components/home/LocationMap';
import { Developer } from '@/components/home/Developer';
import { Contact } from '@/components/home/Contact';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Introduction />
      <Location />
      <Concept />
      <BuiltToStay />
      <Residences />
      <Lifestyle />
      <Amenities />
      <Space />
      <Materials />
      <SmartLiving />
      <Architecture />
      <Gallery />
      <LocationMap />
      <Developer />
      <Contact />
    </div>
  );
}
