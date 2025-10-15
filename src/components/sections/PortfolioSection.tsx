import { Globe, Briefcase, Instagram, Youtube, Dribbble } from "lucide-react";

export default function PortfolioSection() {
  return (
    <section className="col-span-1 md:col-span-12 flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-2xl bg-foreground dark:bg-foreground-dark p-5 sm:p-6 md:p-8 lg:p-10 gap-4 sm:gap-5">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
        <h3 className="text-white text-base sm:text-lg md:text-xl font-bold border-b sm:border-b-0 sm:border-r pb-2 sm:pb-0 sm:pr-4 mb-3 sm:mb-0 min-w-[100px]">
          Portafolio
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3 w-full">
          <a href="#" className="flex items-center justify-center gap-2 bg-background dark:bg-background-dark rounded-lg px-3 py-2 sm:px-4 sm:py-3 hover:bg-gray-700 dark:hover:bg-gray-800 transition text-white text-xs sm:text-sm">
            <Globe className="w-3 h-3 sm:w-4 sm:h-4" /> Bento
          </a>
          <a href="#" className="flex items-center justify-center gap-2 bg-background dark:bg-background-dark rounded-lg px-3 py-2 sm:px-4 sm:py-3 hover:bg-gray-700 dark:hover:bg-gray-800 transition text-white text-xs sm:text-sm">
            <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" /> Behance
          </a>
          <a href="#" className="flex items-center justify-center gap-2 bg-background dark:bg-background-dark rounded-lg px-3 py-2 sm:px-4 sm:py-3 hover:bg-gray-700 dark:hover:bg-gray-800 transition text-white text-xs sm:text-sm">
            <Instagram className="w-3 h-3 sm:w-4 sm:h-4" /> Instagram
          </a>
          <a href="#" className="flex items-center justify-center gap-2 bg-background dark:bg-background-dark rounded-lg px-3 py-2 sm:px-4 sm:py-3 hover:bg-gray-700 dark:hover:bg-gray-800 transition text-white text-xs sm:text-sm">
            <Youtube className="w-3 h-3 sm:w-4 sm:h-4" /> YouTube
          </a>
          <a href="#" className="flex items-center justify-center gap-2 bg-background dark:bg-background-dark rounded-lg px-3 py-2 sm:px-4 sm:py-3 hover:bg-gray-700 dark:hover:bg-gray-800 transition text-white text-xs sm:text-sm">
            <Dribbble className="w-3 h-3 sm:w-4 sm:h-4" /> Dribbble
          </a>
        </div>
      </div>
    </section>
  );
}