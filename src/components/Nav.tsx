'use client';

import { useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

const LOCALES = ['en', 'fr', 'es'] as const;

export default function Nav() {
  const t = useTranslations('nav');
  const locale = useLocale();

  const handleThemeToggle = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } else {
      html.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  };

  useEffect(() => {
    const fill = document.getElementById('progress-fill');
    const indicator = document.getElementById('progress-indicator');
    const headerOffset = 96;

    function calculateTimeline() {
      const checkpoints = document.querySelectorAll<HTMLElement>('.checkpoint');
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      let currentProgress = maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0;
      currentProgress = Math.max(0, Math.min(100, currentProgress));

      if (fill) fill.style.width = `${currentProgress}%`;
      if (indicator) {
        indicator.innerText = `${Math.round(currentProgress)}%`;
        indicator.style.left = `${currentProgress}%`;
      }

      checkpoints.forEach((cp) => {
        const targetId = cp.getAttribute('data-target');
        const targetEl = targetId ? document.getElementById(targetId) : null;
        if (!targetEl) return;

        let targetScroll = (targetEl as HTMLElement).offsetTop - headerOffset;
        let targetPercent = (targetScroll / maxScroll) * 100;
        targetPercent = Math.max(0, Math.min(100, targetPercent));
        cp.style.left = `${targetPercent}%`;

        const dot = cp.querySelector<HTMLElement>('.indicator-dot');
        const label = cp.querySelector<HTMLElement>('.label-text');

        if (currentProgress >= targetPercent) {
          dot?.classList.add('bg-zinc-900', 'dark:bg-zinc-100');
          dot?.classList.remove('bg-zinc-300', 'dark:bg-zinc-700');
          label?.classList.add('text-zinc-900', 'dark:text-zinc-100');
          label?.classList.remove('text-zinc-400', 'dark:text-zinc-500');
        } else {
          dot?.classList.remove('bg-zinc-900', 'dark:bg-zinc-100');
          dot?.classList.add('bg-zinc-300', 'dark:bg-zinc-700');
          label?.classList.remove('text-zinc-900', 'dark:text-zinc-100');
          label?.classList.add('text-zinc-400', 'dark:text-zinc-500');
        }
      });
    }

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          calculateTimeline();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', calculateTimeline);
    const timer = setTimeout(calculateTimeline, 150);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateTimeline);
      clearTimeout(timer);
    };
  }, []);

  const checkpoints = [
    { target: 'about', label: t('about') },
    { target: 'services', label: t('services') },
    { target: 'projects', label: t('projects') },
    { target: 'contact', label: t('contact') },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-zinc-100/90 dark:bg-background/90 backdrop-blur-xl border-b border-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              jecointr<span className="text-zinc-500 font-medium">.dev</span>
            </a>
          </div>

          {/* Scroll Progress Timeline */}
          <div className="hidden md:flex flex-1 max-w-md mx-12 items-center relative h-full">
            <div className="w-full relative">
              <div
                id="progress-indicator"
                className="absolute -top-7 text-[10px] font-bold text-zinc-900 dark:text-zinc-100 transform -translate-x-1/2 bg-zinc-200/50 dark:bg-zinc-800/50 px-2 py-0.5 rounded-full backdrop-blur-sm transition-all duration-75"
              >
                0%
              </div>
              <div className="h-1 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full relative">
                <div
                  id="progress-fill"
                  className="absolute top-0 left-0 h-full bg-zinc-900 dark:bg-zinc-100 rounded-full w-0"
                  style={{ transition: 'width 0.1s ease-out' }}
                />
                {checkpoints.map(({ target, label }) => (
                  <a
                    key={target}
                    href={`#${target}`}
                    className="checkpoint absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center group outline-none"
                    data-target={target}
                  >
                    <div className="indicator-dot w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-700 transition-all duration-300 z-10 group-hover:scale-125 border-2 border-zinc-100 dark:border-background" />
                    <span className="absolute top-4 text-xs font-semibold text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors whitespace-nowrap label-text">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right controls */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-6 mr-4">
              {/* Theme toggle */}
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-zinc-800 dark:text-zinc-600 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="2" x2="12" y2="4" />
                  <line x1="12" y1="20" x2="12" y2="22" />
                  <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
                  <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
                  <line x1="2" y1="12" x2="4" y2="12" />
                  <line x1="20" y1="12" x2="22" y2="12" />
                  <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
                  <line x1="17.66" y1="4.93" x2="19.07" y2="6.34" />
                </svg>
                <button
                  type="button"
                  onClick={handleThemeToggle}
                  className="relative inline-flex h-6 w-11 items-center rounded-full bg-zinc-300 dark:bg-zinc-700 transition-colors duration-300 focus:outline-none cursor-pointer"
                >
                  <span className="sr-only">Toggle theme</span>
                  <span className="inline-block h-4 w-4 transform rounded-full bg-zinc-50 dark:bg-zinc-950 shadow-sm transition-transform duration-300 ease-in-out translate-x-1 dark:translate-x-6" />
                </button>
                <svg className="w-4 h-4 text-zinc-400 dark:text-zinc-200 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              </div>

              {/* Language switcher */}
              <div className="flex items-center bg-zinc-200/50 dark:bg-zinc-800/50 rounded-full p-1 border border-black/5 dark:border-white/5">
                {LOCALES.map((l) =>
                  l === locale ? (
                    <span
                      key={l}
                      className="px-2.5 py-1 rounded-full bg-zinc-50 dark:bg-zinc-950 text-xs font-bold text-zinc-900 dark:text-zinc-100 shadow-sm transition-all duration-300 cursor-default"
                    >
                      {l.toUpperCase()}
                    </span>
                  ) : (
                    <Link
                      key={l}
                      href={`/${l}`}
                      className="px-2.5 py-1 rounded-full text-xs font-semibold text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-all duration-300"
                    >
                      {l.toUpperCase()}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
