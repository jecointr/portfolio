import { getTranslations } from 'next-intl/server';

export default async function Contact() {
  const t = await getTranslations('contact');

  return (
    <section id="contact" className="py-32 relative z-10 border-t border-black/5 dark:border-zinc-50/5 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight mb-6">
          {t('title')}
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 font-light mb-12">
          {t('subtitle')}
        </p>
        <a
          href="mailto:jeremycointre@me.com"
          className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-zinc-50 dark:text-background bg-zinc-900 dark:bg-zinc-100 hover:bg-black dark:hover:bg-zinc-50 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(0,0,0,0.15)] dark:shadow-[0_0_30px_rgba(255,255,255,0.15)] smooth-hover rounded-full"
        >
          {t('cta')}
        </a>
      </div>
    </section>
  );
}
