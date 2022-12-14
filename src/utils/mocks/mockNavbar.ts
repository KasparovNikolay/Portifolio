const mockNavbar = {
  home: {
    en: 'home',
    ru: 'главная',
  },
  bio: {
    en: 'bio',
    ru: 'биография',
  },
  skills: {
    en: 'skills',
    ru: 'навыки',
  },
  projects: {
    en: 'projects',
    ru: 'проекты',
  },
  contact: {
    en: 'contact',
    ru: 'контакты',
  },
};

export const getNavbar = () => {
  return Object.keys(mockNavbar).map(
    (item) => mockNavbar[item as keyof typeof mockNavbar]
  );
};
