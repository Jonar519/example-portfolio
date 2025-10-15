interface DesignToolsSectionProps {
  designTools: string;
}

export default function DesignToolsSection({ designTools }: DesignToolsSectionProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center col-span-1 md:col-span-6 rounded-2xl bg-foreground dark:bg-foreground-dark p-5 sm:p-6 md:p-8 lg:p-10">
      <h3 className="text-white text-base sm:text-lg md:text-xl font-bold border-b sm:border-b-0 sm:border-r pb-2 sm:pb-0 sm:pr-4 mb-2 sm:mb-0 min-w-[120px]">
        {designTools}
      </h3>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        <span className="flex items-center bg-[#360300] dark:bg-[#5a1a00] rounded-lg font-bold text-[#da9f4c] text-base sm:text-lg md:text-xl px-3 py-2">
          Ai
        </span>
        <span className="flex items-center bg-[#0b172a] dark:bg-[#1a2d4a] rounded-lg font-bold text-[#74aaf2] text-base sm:text-lg md:text-xl px-3 py-2">
          Ps
        </span>
        <span className="flex items-center bg-[#59051e] dark:bg-[#7a0a29] rounded-lg font-bold text-[#d84b6f] text-base sm:text-lg md:text-xl px-3 py-2">
          Id
        </span>
        <span className="flex items-center bg-[#480d30] dark:bg-[#6a1345] rounded-lg font-bold text-[#de6ff0] text-base sm:text-lg md:text-xl px-3 py-2">
          Xd
        </span>
      </div>
    </div>
  );
}