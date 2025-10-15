interface ExperienceSectionProps {
  experience: {
    freelance: {
      title: string;
      role: string;
      period: string;
      bullets: string[];
    };
    meetzed: {
      title: string;
      role: string;
      period: string;
      bullets: string[];
    };
  };
}

export default function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <>
      {/* Experience: Freelancer - Responsive */}
      <article className="col-span-1 md:col-span-6 rounded-2xl bg-foreground dark:bg-foreground-dark p-5 sm:p-6 md:p-8 lg:p-10">
        <section className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-b-grey dark:border-b-gray-700 pb-4 sm:pb-6 md:pb-8 gap-3 sm:gap-4">
          <header className="flex flex-col">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
              {experience.freelance.title}
            </h3>
            <p className="text-grey dark:text-gray-400 text-xs sm:text-sm">
              {experience.freelance.role}
            </p>
          </header>
          <span className="bg-background dark:bg-background-dark rounded-lg text-white text-xs sm:text-sm p-2 sm:p-3 md:p-4 w-fit self-start sm:self-auto">
            {experience.freelance.period}
          </span>
        </section>
        <ul className="list-disc list-inside text-white text-xs sm:text-sm mt-4 sm:mt-5 space-y-2 sm:space-y-3 pl-2">
          {experience.freelance.bullets.map((b) => (
            <li key={b} className="leading-relaxed">{b}</li>
          ))}
        </ul>
      </article>

      {/* Experience: Meetzed - Responsive */}
      <article className="col-span-1 md:col-span-6 rounded-2xl bg-foreground dark:bg-foreground-dark p-5 sm:p-6 md:p-8 lg:p-10">
        <section className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-b-grey dark:border-b-gray-700 pb-4 sm:pb-6 md:pb-8 gap-3 sm:gap-4">
          <header className="flex flex-col">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
              {experience.meetzed.title}
            </h3>
            <p className="text-grey dark:text-gray-400 text-xs sm:text-sm">
              {experience.meetzed.role}
            </p>
          </header>
          <span className="bg-background dark:bg-background-dark rounded-lg text-white text-xs sm:text-sm p-2 sm:p-3 md:p-4 w-fit self-start sm:self-auto">
            {experience.meetzed.period}
          </span>
        </section>
        <ul className="list-disc list-inside text-white text-xs sm:text-sm mt-4 sm:mt-5 space-y-2 sm:space-y-3 pl-2">
          {experience.meetzed.bullets.map((b) => (
            <li key={b} className="leading-relaxed">{b}</li>
          ))}
        </ul>
      </article>
    </>
  );
}