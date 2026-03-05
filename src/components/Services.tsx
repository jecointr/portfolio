import { getTranslations } from 'next-intl/server';

export default async function Services() {
  const t = await getTranslations('services');

  const cards = [
    {
      key: 'frontend',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>
      ),
      title: t('frontend_title'),
      desc: t('frontend_desc'),
    },
    {
      key: 'backend',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25-4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>
      ),
      title: t('backend_title'),
      desc: t('backend_desc'),
    },
    {
      key: 'perf',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: t('perf_title'),
      desc: t('perf_desc'),
    },
  ];

  return (
    <section id="services" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
            {t('title')}
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 font-light">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map(({ key, icon, title, desc }) => (
            <div
              key={key}
              className="bg-zinc-50 dark:bg-surface/50 border border-black/5 dark:border-zinc-50/5 hover:border-black/15 dark:hover:border-zinc-50/15 shadow-md hover:shadow-lg dark:shadow-none dark:hover:shadow-none p-8 rounded-2xl smooth-hover group transition-all duration-300"
            >
              <div className="w-10 h-10 mb-6 text-zinc-900 dark:text-zinc-100">{icon}</div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">{title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 font-light text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
