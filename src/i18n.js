import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: "Welcome to my portfolio",
      description: "I am a Graphic Designer, Video Editor & React Developer",
      projects: "My Projects",
      contact: "Contact Me"
    }
  },
  ar: {
    translation: {
      welcome: "مرحباً بكم في معرض أعمالي",
      description: "أنا مصمم جرافيك، مونتير فيديو ومطور رياكت",
      projects: "مشاريعي",
      contact: "تواصل معي"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
