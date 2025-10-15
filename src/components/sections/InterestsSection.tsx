interface InterestsSectionProps {
  interests: {
    title: string;
    items: string[];
  };
}

export default function InterestsSection({ interests }: InterestsSectionProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center col-span-1 md:col-span-9 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-foreground dark:bg-foreground-dark">
      <h3 className="text-white text-base sm:text-lg font-bold border-b sm:border-b-0 sm:border-r pb-2 sm:pb-0 sm:pr-4 mb-2 sm:mb-0 min-w-[120px]">
        {interests.title}
      </h3>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {interests.items.map((item) => (
          <span
            key={item}
            className="flex items-center bg-background dark:bg-background-dark rounded-lg text-white text-xs sm:text-sm px-3 py-2"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}