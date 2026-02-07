// i18n Configuration for manthanank.dev
// Currently supports: English (en), Hindi (hi)

export const languages = {
  en: 'English',
  hi: 'हिंदी',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Hi, my name is',
    'hero.name': 'Manthan Ankolekar',
    'hero.headline': 'I build things for the web.',
    'hero.description': "I'm a Full Stack Developer specializing in building exceptional digital experiences. Currently focused on creating accessible, scalable web applications with Angular, Node.js, and modern web technologies.",
    'hero.viewWork': 'View My Work',
    'hero.getInTouch': 'Get In Touch',
    'hero.resume': 'Resume',
    
    // Skills Section
    'skills.title': 'Technologies I Work With',
    'skills.subtitle': 'My core tech stack and tools I use daily',
    
    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Some of the things I\'ve built recently',
    'projects.viewAll': 'View All Projects',
    
    // Blog Section
    'blog.title': 'Latest Articles',
    'blog.subtitle': 'Recent posts from my blog',
    'blog.viewAll': 'View All Posts',
    'blog.readMore': 'Read more',
    'blog.minRead': 'min read',
    
    // CTA Section
    'cta.title': 'Interested in working together?',
    'cta.description': "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
    'cta.button': 'Say Hello',
    
    // About Page
    'about.title': 'About Me',
    'about.subtitle': 'A bit about who I am and what I do',
    'about.hello': "Hello! I'm Manthan.",
    'about.downloadResume': 'Download Resume',
    'about.repositories': 'Repositories',
    'about.totalStars': 'Total Stars',
    'about.contributions': 'Contributions',
    'about.npmPackages': 'npm Packages',
    'about.topStack': 'Top Stack:',
    'about.liveActivity': 'Live Activity',
    'about.skillsTitle': 'Skills & Technologies',
    'about.skillsSubtitle': 'Technologies I\'ve been working with',
    'about.frontend': 'Frontend',
    'about.backend': 'Backend',
    'about.tools': 'Tools & Platforms',
    'about.experienceTitle': 'Experience',
    'about.experienceSubtitle': 'My professional journey',
    
    // Contact Page
    'contact.title': 'Get In Touch',
    'contact.subtitle': "Have a question or want to work together? I'd love to hear from you.",
    'contact.letsConnect': "Let's Connect",
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.sent': 'Message Sent!',
    'contact.thanks': "Thanks for reaching out! I've received your message and will get back to you soon.",
    'contact.sendAnother': 'Send Another',
    'contact.error': 'Oops! There was a problem sending your message. Please try again.',
    
    // Command Palette
    'palette.placeholder': 'Type a command or search...',
    'palette.noResults': 'No results found',
    'palette.actions': 'Actions',
    'palette.pages': 'Pages',
    'palette.switchDark': 'Switch to Dark Mode',
    'palette.switchLight': 'Switch to Light Mode',
    'palette.downloadResume': 'Download Resume',
    'palette.goTo': 'Go to',
    'palette.learnMore': 'Learn more about me',
    'palette.viewWork': 'View my work',
    'palette.readArticles': 'Read my articles',
    'palette.changeTheme': 'Change theme',
    'palette.getCv': 'Get a copy of my CV',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.builtWith': 'Built with',
    
    // 404
    '404.title': 'Page Not Found',
    '404.description': "The page you're looking for doesn't exist or has been moved.",
    '404.goHome': 'Go Home',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Something went wrong',
    'common.back': 'Back',
  },
  hi: {
    // Navigation
    'nav.home': 'होम',
    'nav.about': 'मेरे बारे में',
    'nav.projects': 'प्रोजेक्ट्स',
    'nav.blog': 'ब्लॉग',
    'nav.contact': 'संपर्क',
    
    // Hero Section
    'hero.greeting': 'नमस्ते, मेरा नाम है',
    'hero.name': 'मंथन अंकोलेकर',
    'hero.headline': 'मैं वेब के लिए चीजें बनाता हूं।',
    'hero.description': 'मैं एक फुल स्टैक डेवलपर हूं जो असाधारण डिजिटल अनुभव बनाने में विशेषज्ञता रखता है। वर्तमान में Angular, Node.js और आधुनिक वेब तकनीकों के साथ सुलभ, स्केलेबल वेब एप्लिकेशन बनाने पर केंद्रित हूं।',
    'hero.viewWork': 'मेरा काम देखें',
    'hero.getInTouch': 'संपर्क करें',
    'hero.resume': 'रिज्यूमे',
    
    // Skills Section
    'skills.title': 'जिन तकनीकों के साथ मैं काम करता हूं',
    'skills.subtitle': 'मेरी मुख्य टेक स्टैक और दैनिक उपयोग के टूल्स',
    
    // Projects Section
    'projects.title': 'विशेष प्रोजेक्ट्स',
    'projects.subtitle': 'कुछ चीजें जो मैंने हाल ही में बनाई हैं',
    'projects.viewAll': 'सभी प्रोजेक्ट्स देखें',
    
    // Blog Section
    'blog.title': 'नवीनतम लेख',
    'blog.subtitle': 'मेरे ब्लॉग से हाल की पोस्ट',
    'blog.viewAll': 'सभी पोस्ट देखें',
    'blog.readMore': 'और पढ़ें',
    'blog.minRead': 'मिनट पढ़ने का समय',
    
    // CTA Section
    'cta.title': 'साथ काम करने में रुचि है?',
    'cta.description': 'मैं हमेशा नई परियोजनाओं, रचनात्मक विचारों, या आपके विज़न का हिस्सा बनने के अवसरों पर चर्चा करने के लिए खुला हूं।',
    'cta.button': 'नमस्ते कहें',
    
    // About Page
    'about.title': 'मेरे बारे में',
    'about.subtitle': 'मैं कौन हूं और क्या करता हूं',
    'about.hello': 'नमस्ते! मैं मंथन हूं।',
    'about.downloadResume': 'रिज्यूमे डाउनलोड करें',
    'about.repositories': 'रिपॉजिटरी',
    'about.totalStars': 'कुल स्टार्स',
    'about.contributions': 'योगदान',
    'about.npmPackages': 'npm पैकेज',
    'about.topStack': 'टॉप स्टैक:',
    'about.liveActivity': 'लाइव गतिविधि',
    'about.skillsTitle': 'कौशल और तकनीक',
    'about.skillsSubtitle': 'जिन तकनीकों के साथ मैं काम कर रहा हूं',
    'about.frontend': 'फ्रंटएंड',
    'about.backend': 'बैकएंड',
    'about.tools': 'टूल्स और प्लेटफॉर्म',
    'about.experienceTitle': 'अनुभव',
    'about.experienceSubtitle': 'मेरी पेशेवर यात्रा',
    
    // Contact Page
    'contact.title': 'संपर्क करें',
    'contact.subtitle': 'कोई प्रश्न है या साथ काम करना चाहते हैं? मुझे आपसे सुनना अच्छा लगेगा।',
    'contact.letsConnect': 'आइए जुड़ें',
    'contact.name': 'नाम',
    'contact.email': 'ईमेल',
    'contact.subject': 'विषय',
    'contact.message': 'संदेश',
    'contact.send': 'संदेश भेजें',
    'contact.sent': 'संदेश भेजा गया!',
    'contact.thanks': 'संपर्क करने के लिए धन्यवाद! मुझे आपका संदेश मिल गया है और मैं जल्द ही जवाब दूंगा।',
    'contact.sendAnother': 'एक और भेजें',
    'contact.error': 'उफ़! आपका संदेश भेजने में समस्या हुई। कृपया पुनः प्रयास करें।',
    
    // Command Palette
    'palette.placeholder': 'कमांड टाइप करें या खोजें...',
    'palette.noResults': 'कोई परिणाम नहीं मिला',
    'palette.actions': 'क्रियाएं',
    'palette.pages': 'पेज',
    'palette.switchDark': 'डार्क मोड पर स्विच करें',
    'palette.switchLight': 'लाइट मोड पर स्विच करें',
    'palette.downloadResume': 'रिज्यूमे डाउनलोड करें',
    'palette.goTo': 'जाएं',
    'palette.learnMore': 'मेरे बारे में जानें',
    'palette.viewWork': 'मेरा काम देखें',
    'palette.readArticles': 'मेरे लेख पढ़ें',
    'palette.changeTheme': 'थीम बदलें',
    'palette.getCv': 'मेरी CV की कॉपी लें',
    
    // Footer
    'footer.rights': 'सर्वाधिकार सुरक्षित।',
    'footer.builtWith': 'के साथ बनाया गया',
    
    // 404
    '404.title': 'पेज नहीं मिला',
    '404.description': 'जो पेज आप खोज रहे हैं वह मौजूद नहीं है या स्थानांतरित हो गया है।',
    '404.goHome': 'होम जाएं',
    
    // Common
    'common.loading': 'लोड हो रहा है...',
    'common.error': 'कुछ गलत हो गया',
    'common.back': 'वापस',
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return translations[lang][key] || translations[defaultLang][key] || key;
  };
}

export function getLocalizedPath(path: string, lang: Lang): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}
