import AvatarSection from "./sections/AvatarSection";
import IntroSection from "./sections/IntroSection";
import InterestsSection from "./sections/InterestsSection";
import ExperienceSection from "./sections/ExperienceSection";
import DesignToolsSection from "./sections/DesignToolsSection";
import EducationSection from "./sections/EducationSection";
import EditingToolsSection from "./sections/EditingToolsSection";
import LanguagesSection from "./sections/LanguagesSection";
import PortfolioSection from "./sections/PortfolioSection";
import DetailsSection from "./sections/DetailsSection";

// Si no quieres crear el archivo de tipos, usa esta solución temporal:
interface Dictionary {
  intro: string;
  sections: {
    interests: {
      title: string;
      items: string[];
    };
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
    designTools: string;
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
    editingTools: string;
    languages: string;
  };
}

interface MainContentProps {
  dict: Dictionary;
}

export default function MainContent({ dict }: MainContentProps) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-12 container mt-20 sm:mt-24 md:mt-20 px-4 sm:px-6 md:px-0 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
      <AvatarSection />
      <IntroSection intro={dict.intro} />
      <InterestsSection interests={dict.sections.interests} />
      <ExperienceSection experience={dict.sections.experience} />
      <DesignToolsSection designTools={dict.sections.designTools} />
      <EducationSection education={dict.sections.education} />
      <EditingToolsSection editingTools={dict.sections.editingTools} />
      <LanguagesSection languages={dict.sections.languages} />
      <PortfolioSection />
      <DetailsSection />
    </main>
  );
}