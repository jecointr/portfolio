import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import LocaleHtmlLang from '@/components/LocaleHtmlLang';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  const domain = 'https://jecointr.dev';

  return {
    title: t('title'),
    alternates: {
      canonical: `${domain}/${locale}/`,
      languages: {
        en: `${domain}/en/`,
        fr: `${domain}/fr/`,
        es: `${domain}/es/`,
        'x-default': `${domain}/en/`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <LocaleHtmlLang locale={locale} />
      {children}
    </NextIntlClientProvider>
  );
}
