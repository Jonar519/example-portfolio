import Image from "next/image";
import { getDictionary } from "../i18n/dictionaries";
import { Lang, languages } from "../i18n/config";
import LanguageSwitcher from "@/components/LanguageSwitcher";

// Importa íconos de lucide-react
import {
  Globe,
  Instagram,
  Youtube,
  Dribbble,
  Mail,
  Phone,
  User,
  MapPin,
  Palette,
  Briefcase,
  Sun,
  Moon,
  Monitor,
} from "lucide-react";

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="font-sans flex justify-center bg-background dark:bg-background-dark min-h-screen transition-colors duration-300">
      {/* Header con controles */}
      <div className="fixed top-0 left-0 right-0 z-10 bg-background dark:bg-background-dark border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <LanguageSwitcher currentLang={lang} />
          
          {/* Theme Switcher */}
          <div className="flex items-center gap-2 bg-foreground dark:bg-foreground-dark rounded-lg p-1">
            <button className="p-2 rounded-md hover:bg-background dark:hover:bg-background-dark transition-colors">
              <Sun className="w-4 h-4 text-white" />
            </button>
            <button className="p-2 rounded-md hover:bg-background dark:hover:bg-background-dark transition-colors">
              <Moon className="w-4 h-4 text-white" />
            </button>
            <button className="p-2 rounded-md hover:bg-background dark:hover:bg-background-dark transition-colors">
              <Monitor className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>

      <main className="grid grid-cols-1 md:grid-cols-12 container mt-28 md:mt-20 px-4 md:px-0 gap-4 md:gap-6 lg:gap-10">
        {/* Avatar - Responsive */}
        <div className="flex items-center justify-center col-span-1 md:col-span-3 row-span-2 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden p-4 md:p-0">
          <Image 
            src="/avatar.jpg" 
            alt="avatar" 
            width={300} 
            height={300}
            className="w-full max-w-[200px] md:max-w-[300px] h-auto rounded-lg"
          />
        </div>

        {/* Intro - Responsive */}
        <p className="p-4 md:p-5 text-lg md:text-xl lg:text-2xl text-white col-span-1 md:col-span-9 rounded-2xl bg-foreground dark:bg-foreground-dark">
          {dict.intro}
        </p>

        {/* Interests - Responsive */}
        <ul className="flex flex-col md:flex-row items-start md:items-center col-span-1 md:col-span-9 gap-3 md:gap-4 p-4 md:p-5 rounded-2xl bg-foreground dark:bg-foreground-dark">
          <li className="text-white text-lg font-bold border-r-0 md:border-r pr-0 md:pr-4 mb-2 md:mb-0">
            {dict.sections.interests.title}
          </li>
          <div className="flex flex-wrap gap-2 md:gap-4">
            {dict.sections.interests.items.map((item) => (
              <li
                key={item}
                className="flex items-center bg-background dark:bg-background-dark rounded-lg text-white text-sm px-3 py-2 md:px-4 md:py-2"
              >
                {item}
              </li>
            ))}
          </div>
        </ul>

        {/* Experience: Freelancer - Responsive */}
        <article className="col-span-1 md:col-span-6 rounded-2xl bg-foreground dark:bg-foreground-dark p-6 md:p-8 lg:p-10">
          <section className="flex flex-col md:flex-row md:items-center justify-between border-b border-b-grey dark:border-b-gray-700 pb-6 md:pb-10 gap-4 md:gap-0">
            <header className="flex flex-col">
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {dict.sections.experience.freelance.title}
              </h3>
              <p className="text-grey dark:text-gray-400 text-sm">
                {dict.sections.experience.freelance.role}
              </p>
            </header>
            <span className="bg-background dark:bg-background-dark rounded-lg text-white text-sm p-3 md:p-4 w-fit">
              {dict.sections.experience.freelance.period}
            </span>
          </section>
          <ul className="list-disc list-inside text-white text-sm mt-4 md:mt-6 space-y-2">
            {dict.sections.experience.freelance.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </article>

        {/* Experience: Meetzed - Responsive */}
        <article className="col-span-1 md:col-span-6 rounded-2xl bg-foreground dark:bg-foreground-dark p-6 md:p-8 lg:p-10">
          <section className="flex flex-col md:flex-row md:items-center justify-between border-b border-b-grey dark:border-b-gray-700 pb-6 md:pb-10 gap-4 md:gap-0">
            <header className="flex flex-col">
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {dict.sections.experience.meetzed.title}
              </h3>
              <p className="text-grey dark:text-gray-400 text-sm">
                {dict.sections.experience.meetzed.role}
              </p>
            </header>
            <span className="bg-background dark:bg-background-dark rounded-lg text-white text-sm p-3 md:p-4 w-fit">
              {dict.sections.experience.meetzed.period}
            </span>
          </section>
          <ul className="list-disc list-inside text-white text-sm mt-4 md:mt-6 space-y-2">
            {dict.sections.experience.meetzed.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </article>

        {/* Design Tools - Responsive */}
        <ul className="flex flex-col md:flex-row gap-3 md:gap-4 items-start md:items-center col-span-1 md:col-span-6 rounded-2xl bg-foreground dark:bg-foreground-dark p-6 md:p-8 lg:p-10">
          <li className="text-white text-lg md:text-xl font-bold border-r-0 md:border-r pr-0 md:pr-4 mb-3 md:mb-0">
            {dict.sections.designTools}
          </li>
          <div className="flex flex-wrap gap-2 md:gap-4">
            <li className="flex items-center bg-[#360300] dark:bg-[#5a1a00] rounded-lg font-bold text-[#da9f4c] text-lg md:text-xl px-3 py-2 md:px-4 md:py-2">
              Ai
            </li>
            <li className="flex items-center bg-[#0b172a] dark:bg-[#1a2d4a] rounded-lg font-bold text-[#74aaf2] text-lg md:text-xl px-3 py-2 md:px-4 md:py-2">
              Ps
            </li>
            <li className="flex items-center bg-[#59051e] dark:bg-[#7a0a29] rounded-lg font-bold text-[#d84b6f] text-lg md:text-xl px-3 py-2 md:px-4 md:py-2">
              Id
            </li>
            <li className="flex items-center bg-[#480d30] dark:bg-[#6a1345] rounded-lg font-bold text-[#de6ff0] text-lg md:text-xl px-3 py-2 md:px-4 md:py-2">
              Xd
            </li>
          </div>
        </ul>

        {/* Education - Responsive */}
        <section className="flex flex-col gap-4 md:gap-6 items-center col-span-1 md:col-span-6 row-span-3 rounded-2xl bg-foreground dark:bg-foreground-dark p-6 md:p-8 lg:p-10">
          {/* High School */}
          <article className="flex flex-col md:flex-row md:items-center justify-between w-full border-b border-b-grey dark:border-b-gray-700 pb-6 md:pb-8 gap-3 md:gap-0">
            <span className="flex flex-col">
              <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold">
                {dict.sections.education.highSchool.title}
              </h2>
              <p className="text-grey dark:text-gray-400 text-base md:text-lg">
                {dict.sections.education.highSchool.field}
              </p>
              <p className="text-grey dark:text-gray-400 text-sm">
                {dict.sections.education.highSchool.location}
              </p>
            </span>
            <span className="bg-background dark:bg-background-dark rounded-lg text-white text-sm p-3 md:p-4 w-fit mt-2 md:mt-0">
              {dict.sections.education.highSchool.period}
            </span>
          </article>

          {/* Diploma */}
          <article className="flex flex-col md:flex-row md:items-center justify-between w-full border-b border-b-grey dark:border-b-gray-700 pb-6 md:pb-8 gap-3 md:gap-0">
            <span className="flex flex-col">
              <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold">
                {dict.sections.education.diploma.title}
              </h2>
              <p className="text-grey dark:text-gray-400 text-base md:text-lg">
                {dict.sections.education.diploma.field}
              </p>
              <p className="text-grey dark:text-gray-400 text-sm">
                {dict.sections.education.diploma.location}
              </p>
            </span>
            <span className="bg-background dark:bg-background-dark rounded-lg text-white text-sm p-3 md:p-4 w-fit mt-2 md:mt-0">
              {dict.sections.education.diploma.period}
            </span>
          </article>

          {/* Graduation */}
          <article className="flex flex-col md:flex-row md:items-center justify-between w-full gap-3 md:gap-0">
            <span className="flex flex-col">
              <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold">
                {dict.sections.education.graduation.title}
              </h2>
              <p className="text-grey dark:text-gray-400 text-base md:text-lg">
                {dict.sections.education.graduation.field}
              </p>
              <p className="text-grey dark:text-gray-400 text-sm">
                {dict.sections.education.graduation.location}
              </p>
            </span>
            <span className="bg-background dark:bg-background-dark rounded-lg text-white text-sm p-3 md:p-4 w-fit mt-2 md:mt-0">
              {dict.sections.education.graduation.period}
            </span>
          </article>
        </section>

        {/* Editing Tools - Responsive */}
        <ul className="flex flex-col md:flex-row gap-3 md:gap-4 items-start md:items-center col-span-1 md:col-span-6 rounded-2xl bg-foreground dark:bg-foreground-dark p-6 md:p-8 lg:p-10">
          <li className="text-white text-lg md:text-xl font-bold border-r-0 md:border-r pr-0 md:pr-4 mb-3 md:mb-0">
            {dict.sections.editingTools}
          </li>
          <div className="flex flex-wrap gap-2 md:gap-4">
            <li className="flex items-center bg-[#000155] dark:bg-[#1a1a7a] rounded-lg font-bold text-[#a0a0f9] text-lg md:text-xl px-3 py-2 md:px-4 md:py-2">
              Ae
            </li>
            <li className="flex items-center bg-[#02035e] dark:bg-[#1c1c8a] rounded-lg font-bold text-[#9997f9] text-lg md:text-xl px-3 py-2 md:px-4 md:py-2">
              Pr
            </li>
          </div>
        </ul>

        {/* Languages - Responsive */}
        <ul className="flex flex-col md:flex-row gap-3 md:gap-4 items-start md:items-center col-span-1 md:col-span-6 rounded-2xl bg-foreground dark:bg-foreground-dark p-6 md:p-8 lg:p-10">
          <li className="text-white text-lg md:text-xl font-bold border-r-0 md:border-r pr-0 md:pr-4 mb-3 md:mb-0">
            {dict.sections.languages}
          </li>
          <div className="flex flex-wrap gap-3 md:gap-4">
            <li className="text-3xl md:text-4xl">🇮🇳</li>
            <li className="text-3xl md:text-4xl">🇬🇧</li>
            <li className="text-3xl md:text-4xl">🇺🇸</li>
          </div>
        </ul>

        {/* --- Portfolio Section - Responsive --- */}
        <section className="col-span-1 md:col-span-12 flex flex-col md:flex-row items-start md:items-center justify-between rounded-2xl bg-foreground dark:bg-foreground-dark p-6 md:p-8 lg:p-10 gap-4 md:gap-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full">
            <h3 className="text-white text-lg md:text-xl font-bold border-r-0 md:border-r pr-0 md:pr-4 mb-3 md:mb-0">
              Portafolio
            </h3>
            <ul className="flex flex-wrap gap-2 md:gap-4 text-white w-full">
              <li className="flex items-center gap-2 bg-background dark:bg-background-dark rounded-lg px-3 py-2 md:px-4 md:py-2 hover:bg-gray-700 dark:hover:bg-gray-800 transition flex-1 min-w-[120px] justify-center">
                <Globe className="w-4 h-4 md:w-5 md:h-5" /> Bento
              </li>
              <li className="flex items-center gap-2 bg-background dark:bg-background-dark rounded-lg px-3 py-2 md:px-4 md:py-2 hover:bg-gray-700 dark:hover:bg-gray-800 transition flex-1 min-w-[120px] justify-center">
                <Briefcase className="w-4 h-4 md:w-5 md:h-5" /> Behance
              </li>
              <li className="flex items-center gap-2 bg-background dark:bg-background-dark rounded-lg px-3 py-2 md:px-4 md:py-2 hover:bg-gray-700 dark:hover:bg-gray-800 transition flex-1 min-w-[120px] justify-center">
                <Instagram className="w-4 h-4 md:w-5 md:h-5" /> Instagram
              </li>
              <li className="flex items-center gap-2 bg-background dark:bg-background-dark rounded-lg px-3 py-2 md:px-4 md:py-2 hover:bg-gray-700 dark:hover:bg-gray-800 transition flex-1 min-w-[120px] justify-center">
                <Youtube className="w-4 h-4 md:w-5 md:h-5" /> YouTube
              </li>
              <li className="flex items-center gap-2 bg-background dark:bg-background-dark rounded-lg px-3 py-2 md:px-4 md:py-2 hover:bg-gray-700 dark:hover:bg-gray-800 transition flex-1 min-w-[120px] justify-center">
                <Dribbble className="w-4 h-4 md:w-5 md:h-5" /> Dribbble
              </li>
            </ul>
          </div>
        </section>

        {/* --- Details Section - Responsive --- */}
        <section className="col-span-1 md:col-span-12 flex flex-col md:flex-row items-start md:items-center justify-between rounded-2xl bg-foreground dark:bg-foreground-dark p-6 md:p-8 lg:p-10 gap-4 md:gap-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full">
            <h3 className="text-white text-lg md:text-xl font-bold border-r-0 md:border-r pr-0 md:pr-4 mb-3 md:mb-0">
              Detalles
            </h3>
            <div className="flex flex-wrap gap-2 md:gap-4 text-white w-full">
              <div className="flex items-center gap-2 bg-background dark:bg-background-dark px-3 py-2 md:px-4 md:py-2 rounded-lg flex-1 min-w-[140px] justify-center">
                <User className="w-4 h-4 md:w-5 md:h-5" />
                <p className="text-sm md:text-base">26 years</p>
              </div>
              <div className="flex items-center gap-2 bg-background dark:bg-background-dark px-3 py-2 md:px-4 md:py-2 rounded-lg flex-1 min-w-[140px] justify-center">
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
                <p className="text-sm md:text-base">iamsunilfreelancer.com</p>
              </div>
              <div className="flex items-center gap-2 bg-background dark:bg-background-dark px-3 py-2 md:px-4 md:py-2 rounded-lg flex-1 min-w-[140px] justify-center">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                <p className="text-sm md:text-base">+91 9899052055</p>
              </div>
              <div className="flex items-center gap-2 bg-background dark:bg-background-dark px-3 py-2 md:px-4 md:py-2 rounded-lg flex-1 min-w-[140px] justify-center">
                <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                <p className="text-sm md:text-base">India 🇮🇳</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}