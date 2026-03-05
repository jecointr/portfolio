import { setRequestLocale } from 'next-intl/server';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import TechBanner from '@/components/TechBanner';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Nav />
      <main className="pt-24">
        <Hero />
        <TechBanner />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
