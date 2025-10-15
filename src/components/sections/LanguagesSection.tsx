interface LanguagesSectionProps {
  languages: string;
}

export default function LanguagesSection({ languages }: LanguagesSectionProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center col-span-1 md:col-span-6 rounded-2xl bg-foreground dark:bg-foreground-dark p-5 sm:p-6 md:p-8 lg:p-10">
      <h3 className="text-white text-base sm:text-lg md:text-xl font-bold border-b sm:border-b-0 sm:border-r pb-2 sm:pb-0 sm:pr-4 mb-2 sm:mb-0 min-w-[120px]">
        {languages}
      </h3>
      <div className="flex flex-wrap gap-3 sm:gap-4">
        <span className="text-2xl sm:text-3xl md:text-4xl">🇮🇳</span>
        <span className="text-2xl sm:text-3xl md:text-4xl">🇬🇧</span>
        <span className="text-2xl sm:text-3xl md:text-4xl">🇺🇸</span>
      </div>
    </div>
  );
}