const TECHS = ['TypeScript', 'NestJS', 'React', 'PostgreSQL', 'Docker'];

export default function TechBanner() {
  return (
    <section className="border-y border-black/5 dark:border-zinc-50/5 bg-zinc-100/50 dark:bg-surface/30 py-8 relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-zinc-400 dark:text-zinc-500 font-medium">
          {TECHS.map((tech) => (
            <span key={tech} className="hover:text-zinc-900 dark:hover:text-zinc-200 smooth-hover cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
