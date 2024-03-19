import { NavBar } from '@/app/ui/navbar';
import { Hero } from '@/app/ui/hero';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <Hero />
    </main>
  );
}
