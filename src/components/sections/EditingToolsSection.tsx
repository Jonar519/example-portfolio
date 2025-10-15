interface EditingToolsSectionProps {
  editingTools: string;
}

export default function EditingToolsSection({ editingTools }: EditingToolsSectionProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center col-span-1 md:col-span-6 rounded-2xl bg-foreground dark:bg-foreground-dark p-5 sm:p-6 md:p-8 lg:p-10">
      <h3 className="text-white text-base sm:text-lg md:text-xl font-bold border-b sm:border-b-0 sm:border-r pb-2 sm:pb-0 sm:pr-4 mb-2 sm:mb-0 min-w-[120px]">
        {editingTools}
      </h3>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        <span className="flex items-center bg-[#000155] dark:bg-[#1a1a7a] rounded-lg font-bold text-[#a0a0f9] text-base sm:text-lg md:text-xl px-3 py-2">
          Ae
        </span>
        <span className="flex items-center bg-[#02035e] dark:bg-[#1c1c8a] rounded-lg font-bold text-[#9997f9] text-base sm:text-lg md:text-xl px-3 py-2">
          Pr
        </span>
      </div>
    </div>
  );
}