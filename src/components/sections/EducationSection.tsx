interface EducationSectionProps {
  education: {
    highSchool: {
      title: string;
      field: string;
      location: string;
      period: string;
    };
    diploma: {
      title: string;
      field: string;
      location: string;
      period: string;
    };
    graduation: {
      title: string;
      field: string;
      location: string;
      period: string;
    };
  };
}

export default function EducationSection({ education }: EducationSectionProps) {
  return (
    <section className="flex flex-col gap-4 sm:gap-5 md:gap-6 items-center col-span-1 md:col-span-6 row-span-3 rounded-2xl bg-foreground dark:bg-foreground-dark p-5 sm:p-6 md:p-8 lg:p-10">
      {/* High School */}
      <article className="flex flex-col sm:flex-row sm:items-center justify-between w-full border-b border-b-grey dark:border-b-gray-700 pb-4 sm:pb-6 md:pb-8 gap-3 sm:gap-4">
        <div className="flex flex-col">
          <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
            {education.highSchool.title}
          </h2>
          <p className="text-grey dark:text-gray-400 text-sm sm:text-base md:text-lg">
            {education.highSchool.field}
          </p>
          <p className="text-grey dark:text-gray-400 text-xs sm:text-sm">
            {education.highSchool.location}
          </p>
        </div>
        <span className="bg-background dark:bg-background-dark rounded-lg text-white text-xs sm:text-sm p-2 sm:p-3 md:p-4 w-fit self-start sm:self-auto">
          {education.highSchool.period}
        </span>
      </article>

      {/* Diploma */}
      <article className="flex flex-col sm:flex-row sm:items-center justify-between w-full border-b border-b-grey dark:border-b-gray-700 pb-4 sm:pb-6 md:pb-8 gap-3 sm:gap-4">
        <div className="flex flex-col">
          <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
            {education.diploma.title}
          </h2>
          <p className="text-grey dark:text-gray-400 text-sm sm:text-base md:text-lg">
            {education.diploma.field}
          </p>
          <p className="text-grey dark:text-gray-400 text-xs sm:text-sm">
            {education.diploma.location}
          </p>
        </div>
        <span className="bg-background dark:bg-background-dark rounded-lg text-white text-xs sm:text-sm p-2 sm:p-3 md:p-4 w-fit self-start sm:self-auto">
          {education.diploma.period}
        </span>
      </article>

      {/* Graduation */}
      <article className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-3 sm:gap-4">
        <div className="flex flex-col">
          <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
            {education.graduation.title}
          </h2>
          <p className="text-grey dark:text-gray-400 text-sm sm:text-base md:text-lg">
            {education.graduation.field}
          </p>
          <p className="text-grey dark:text-gray-400 text-xs sm:text-sm">
            {education.graduation.location}
          </p>
        </div>
        <span className="bg-background dark:bg-background-dark rounded-lg text-white text-xs sm:text-sm p-2 sm:p-3 md:p-4 w-fit self-start sm:self-auto">
          {education.graduation.period}
        </span>
      </article>
    </section>
  );
}