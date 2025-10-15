import { User, Mail, Phone, MapPin } from "lucide-react";

export default function DetailsSection() {
  return (
    <section className="col-span-1 md:col-span-12 flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-2xl bg-foreground dark:bg-foreground-dark p-5 sm:p-6 md:p-8 lg:p-10 gap-4 sm:gap-5">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
        <h3 className="text-white text-base sm:text-lg md:text-xl font-bold border-b sm:border-b-0 sm:border-r pb-2 sm:pb-0 sm:pr-4 mb-3 sm:mb-0 min-w-[100px]">
          Detalles
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 w-full">
          <div className="flex items-center justify-center sm:justify-start gap-2 bg-background dark:bg-background-dark px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-white text-xs sm:text-sm">
            <User className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>26 years</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2 bg-background dark:bg-background-dark px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-white text-xs sm:text-sm">
            <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="truncate">iamsunilfreelancer.com</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2 bg-background dark:bg-background-dark px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-white text-xs sm:text-sm">
            <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>+91 9899052055</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2 bg-background dark:bg-background-dark px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-white text-xs sm:text-sm">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>India 🇮🇳</span>
          </div>
        </div>
      </div>
    </section>
  );
}