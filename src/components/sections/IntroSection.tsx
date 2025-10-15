interface IntroSectionProps {
  intro: string;
}

export default function IntroSection({ intro }: IntroSectionProps) {
  return (
    <p className="p-4 sm:p-5 text-base sm:text-lg md:text-xl lg:text-2xl text-white col-span-1 md:col-span-9 rounded-2xl bg-foreground dark:bg-foreground-dark leading-relaxed">
      {intro}
    </p>
  );
}