import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

export default async function Hero() {
  const t = await getTranslations('hero');

  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20 pb-24 flex flex-col-reverse lg:flex-row items-center gap-16 relative"
    >
      <div className="lg:w-3/5 space-y-8 relative z-10">
        <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-300 bg-black/5 dark:bg-zinc-50/5 border border-black/10 dark:border-zinc-50/10 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 dark:bg-zinc-300 mr-2 animate-pulse" />
          {t('available')}
        </div>

        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-zinc-900 via-zinc-600 to-zinc-400 dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-500 leading-[1.1] pb-2">
          {t('headline')}
        </h1>

        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed font-light">
          {t('bio')}
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="#projects"
            className="px-6 py-3 text-sm font-semibold rounded-full text-zinc-50 dark:text-background bg-zinc-900 dark:bg-zinc-100 hover:bg-black dark:hover:bg-zinc-50 hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] smooth-hover"
          >
            {t('cta_work')}
          </a>
          <a
            href="https://github.com/jecointr"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-sm font-medium rounded-full text-zinc-700 dark:text-zinc-300 bg-black/5 dark:bg-zinc-50/5 hover:bg-black/10 dark:hover:bg-zinc-50/10 border border-black/5 dark:border-zinc-50/5 backdrop-blur-md smooth-hover flex items-center gap-2 group"
          >
            <svg className="h-4 w-4 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 smooth-hover" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            GitHub
          </a>
        </div>
      </div>

      <div className="lg:w-2/5 w-full flex justify-center lg:justify-end relative lg:-translate-x-12">
        <div
          className="relative w-64 h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden"
          style={{ animation: 'float 8s ease-in-out infinite' }}
        >
          <div className="absolute inset-0 bg-zinc-300/50 dark:bg-zinc-600/20 rounded-full blur-3xl opacity-50" />
          <div className="relative w-full h-full rounded-full overflow-hidden border border-black/10 dark:border-zinc-50/10 bg-gradient-to-b from-black/5 dark:from-zinc-50/5 to-transparent shadow-[inset_0_0_40px_rgba(0,0,0,0.02)] dark:shadow-[inset_0_0_40px_rgba(255,255,255,0.02)] flex items-center justify-center p-2">
            <div className="relative w-full h-full rounded-full border border-black/5 dark:border-zinc-50/5 overflow-hidden group">
              <Image
                src="/wa.jpeg"
                alt={t('portrait_alt')}
                fill
                sizes="(max-width: 1024px) 256px, 288px"
                priority
                className="object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 smooth-hover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
