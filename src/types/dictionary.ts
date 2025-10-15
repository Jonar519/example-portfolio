// types/dictionary.ts
export interface Dictionary {
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