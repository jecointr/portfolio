import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

const ExternalLinkIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

type ProjectCardProps = {
  id: string;
  reversed?: boolean;
  tags: string[];
  title: string;
  subtitle: string;
  challengeLabel: string;
  challenge: string;
  technicalLabel: string;
  technical: React.ReactNode;
  sourceUrl: string;
  siteUrl: string;
  viewSource: string;
  visitWebsite: string;
  imgSrc: string;
  imgAlt: string;
};

function ProjectCard({
  id, reversed, tags, title, subtitle,
  challengeLabel, challenge, technicalLabel, technical,
  sourceUrl, siteUrl, viewSource, visitWebsite, imgSrc, imgAlt,
}: ProjectCardProps) {
  return (
    <div id={id} className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
      <div className="lg:w-1/2 space-y-6">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300 border border-black/10 dark:border-zinc-50/10 bg-black/5 dark:bg-zinc-50/5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">{title}</h3>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 font-medium">{subtitle}</p>
        <div className="space-y-4 text-zinc-600 dark:text-zinc-400 text-sm font-light leading-relaxed">
          <p>
            <strong className="text-zinc-900 dark:text-zinc-200 font-semibold">{challengeLabel}</strong>{' '}
            {challenge}
          </p>
          <p>
            <strong className="text-zinc-900 dark:text-zinc-200 font-semibold">{technicalLabel}</strong>{' '}
            {technical}
          </p>
        </div>
        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:text-zinc-500 dark:hover:text-zinc-400 smooth-hover mt-4 border-b border-zinc-900 dark:border-zinc-100 hover:border-zinc-500 dark:hover:border-zinc-400 pb-0.5"
        >
          {viewSource}
        </a>
      </div>
      <div className="lg:w-1/2 w-full">
        <a
          href={siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-zinc-50 dark:bg-surface border border-black/5 dark:border-zinc-50/5 aspect-video rounded-2xl flex items-center justify-center overflow-hidden relative group transition-all duration-300 shadow-md hover:shadow-xl dark:shadow-none dark:hover:shadow-none block"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-100/50 dark:from-background/50 to-transparent z-10 pointer-events-none transition-opacity duration-300 group-hover:opacity-60" />
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={800}
            height={450}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-black/10 dark:border-zinc-50/10 shadow-lg text-sm font-semibold text-zinc-900 dark:text-zinc-100 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              {visitWebsite}
              <ExternalLinkIcon />
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default async function Projects() {
  const t = await getTranslations('projects');

  const codeTag = (chunks: React.ReactNode) => <code>{chunks}</code>;

  return (
    <section id="projects" className="py-32 relative z-10 border-t border-black/5 dark:border-zinc-50/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">{t('title')}</h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 font-light">{t('subtitle')}</p>
        </div>

        <ProjectCard
          id="hypertube"
          tags={['Typescript', 'NestJS', 'React', 'PostgreSQL', 'Docker', 'FFmpeg & BitTorrent']}
          title="Hypertube"
          subtitle={t('hypertube_subtitle')}
          challengeLabel={t('challenge_label')}
          challenge={t('hypertube_challenge')}
          technicalLabel={t('technical_label')}
          technical={t.rich('hypertube_technical', { code: codeTag })}
          sourceUrl="https://github.com/jecointr/hypertube"
          siteUrl="https://github.com/jecointr/hypertube"
          viewSource={t('view_source')}
          visitWebsite={t('visit_website')}
          imgSrc="/hypertube.png"
          imgAlt={t('hypertube_img_alt')}
        />

        <ProjectCard
          id="matcha"
          reversed
          tags={['Node.js', 'Express.js', 'React', 'PostgreSQL', 'Docker', 'Socket.io & WebRTC']}
          title="Matcha"
          subtitle={t('matcha_subtitle')}
          challengeLabel={t('challenge_label')}
          challenge={t('matcha_challenge')}
          technicalLabel={t('technical_label')}
          technical={t.rich('matcha_technical', { code: codeTag })}
          sourceUrl="https://github.com/jecointr/matcha"
          siteUrl="https://github.com/jecointr/matcha"
          viewSource={t('view_source')}
          visitWebsite={t('visit_website')}
          imgSrc="/matcha.png"
          imgAlt={t('matcha_img_alt')}
        />

        <ProjectCard
          id="camagru"
          tags={['PHP', 'Custom MVC', 'Vanilla JS', 'MariaDB', 'Docker']}
          title="Camagru"
          subtitle={t('camagru_subtitle')}
          challengeLabel={t('challenge_label')}
          challenge={t('camagru_challenge')}
          technicalLabel={t('technical_label')}
          technical={t.rich('camagru_technical', { code: codeTag })}
          sourceUrl="https://github.com/jecointr/camagru"
          siteUrl="https://github.com/jecointr/camagru"
          viewSource={t('view_source')}
          visitWebsite={t('visit_website')}
          imgSrc="/camagru.png"
          imgAlt={t('camagru_img_alt')}
        />
      </div>
    </section>
  );
}
