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
    'nav.search': 'Search',
    
    // Relative Dates
    'date.today': 'Today',
    'date.yesterday': 'Yesterday',
    'date.daysAgo': 'days ago',
    
    // Hero Section
    'hero.greeting': 'Hi, my name is',
    'hero.name': 'Manthan Ankolekar',
    'hero.role': 'Full Stack Developer',
    'hero.headline': 'I build things for the web.',
    'hero.description': "I'm a <strong>Full Stack Developer</strong> specializing in building exceptional digital experiences. Currently focused on creating accessible, scalable web applications with <strong>Angular</strong>, <strong>Node.js</strong>, and modern web technologies.",
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
    'projects.heroTitle': 'Projects',
    'projects.heroSubtitle': 'A collection of things I\'ve built and worked on',
    'projects.pinned': 'Pinned',
    'projects.latest': 'Latest from GitHub',
    'projects.more': 'More Projects',
    'projects.githubCta': 'Want to see more? Check out my GitHub for all repositories.',
    'projects.viewGithub': 'View GitHub Profile',
    
    // Blog Section
    'blog.title': 'Latest Articles',
    'blog.subtitle': 'Recent posts from my blog',
    'blog.viewAll': 'View All Articles',
    'blog.readMore': 'Read More',
    'blog.minRead': 'min read',
    'blog.backToBlog': 'Back to Blog',
    'blog.allPosts': 'All Posts',
    'blog.continueReading': 'Continue Reading',
    'blog.heroTitle': 'Blog',
    'blog.heroSubtitle': 'Thoughts, tutorials, and insights on web development',
    'blog.mediumCta': 'I also write on Medium about web development topics.',
    'blog.readMedium': 'Read More on Medium',
    
    // CTA Section
    'cta.title': 'Interested in working together?',
    'cta.description': "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
    'cta.button': 'Say Hello',
    
    // About Page
    'about.title': 'About Me',
    'about.subtitle': 'A bit about who I am and what I do',
    'about.hello': "Hello! I'm Manthan.",
    'about.bio1': "I'm a passionate Full Stack Developer with a love for creating clean, efficient, and user-friendly web applications. My journey in web development started with curiosity about how websites work, and it has grown into a career building digital experiences that make a difference.",
    'about.bio2': "I specialize in the <strong>Angular</strong> ecosystem and the <strong>MEAN stack</strong>, but I'm always eager to learn new technologies and frameworks. I believe in writing clean, maintainable code and following best practices that make applications scalable and performant.",
    'about.bio3': "When I'm not coding, I enjoy contributing to open-source projects, writing technical articles, and helping fellow developers learn and grow. I'm a strong advocate for knowledge sharing and community building.",
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
    
    // Experience
    'exp.title1': 'Full Stack Developer',
    'exp.company1': 'Freelance / Open Source',
    'exp.desc1_1': 'Developed and maintained multiple open-source Angular projects and npm packages',
    'exp.desc1_2': 'Built full-stack web applications using the MEAN stack',
    'exp.desc1_3': 'Created educational content and learning resources for the Angular community',
    'exp.desc1_4': 'Contributed to open-source projects and maintained personal developer tools',
    'exp.title2': 'Software Developer',
    'exp.company2': 'Previous Company',
    'exp.desc2_1': 'Built responsive web applications using Angular and TypeScript',
    'exp.desc2_2': 'Developed RESTful APIs with Node.js and Express',
    'exp.desc2_3': 'Collaborated with cross-functional teams in an Agile environment',
    'exp.desc2_4': 'Improved application performance and code quality through refactoring',
    
    // Contact Page
    'contact.title': 'Get In Touch',
    'contact.subtitle': "Have a question or want to work together? I'd love to hear from you.",
    'contact.letsConnect': "Let's Connect",
    'contact.connectDesc': "I'm always interested in hearing about new projects and opportunities. Whether you have a question, want to collaborate, or just want to say hello, feel free to reach out.",
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.placeholderName': 'Your name',
    'contact.placeholderEmail': 'your@email.com',
    'contact.placeholderSubject': "What's this about?",
    'contact.placeholderMessage': 'Your message...',
    'contact.formNote': 'This form is protected by spam filters. Alternatively, you can email me directly at',
    'contact.sending': 'Sending...',
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
    'palette.navigate': 'to navigate',
    'palette.select': 'to select',
    'palette.open': 'to open',
    
    // Footer
    'footer.tagline': 'Building digital experiences with modern web technologies.',
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
    'nav.search': 'खोजें',

    // Relative Dates
    'date.today': 'आज',
    'date.yesterday': 'कल',
    'date.daysAgo': 'दिन पहले',
    
    // Hero Section
    'hero.greeting': 'नमस्ते, मेरा नाम है',
    'hero.name': 'मंथन अंकोलेकर',
    'hero.role': 'फुल स्टैक डेवलपर',
    'hero.headline': 'मैं वेब के लिए चीजें बनाता हूं।',
    'hero.description': 'मैं एक <strong>फुल स्टैक डेवलपर</strong> हूं जो असाधारण डिजिटल अनुभव बनाने में विशेषज्ञता रखता है। वर्तमान में <strong>Angular</strong>, <strong>Node.js</strong> और आधुनिक वेब तकनीकों के साथ सुलभ, स्केलेबल वेब एप्लिकेशन बनाने पर केंद्रित हूं।',
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
    'projects.heroTitle': 'प्रोजेक्ट्स',
    'projects.heroSubtitle': 'मेरे द्वारा बनाई गई चीजों का संग्रह',
    'projects.pinned': 'पिन किए गए',
    'projects.latest': 'GitHub से नवीनतम',
    'projects.more': 'अधिक प्रोजेक्ट्स',
    'projects.githubCta': 'और देखना चाहते हैं? सभी रिपॉजिटरी के लिए मेरा GitHub देखें।',
    'projects.viewGithub': 'GitHub प्रोफाइल देखें',
    
    // Blog Section
    'blog.title': 'नवीनतम लेख',
    'blog.subtitle': 'मेरे ब्लॉग से हाल की पोस्ट',
    'blog.viewAll': 'सभी पोस्ट देखें',
    'blog.readMore': 'और पढ़ें',
    'blog.minRead': 'मिनट पढ़ने का समय',
    'blog.backToBlog': 'ब्लॉग पर वापस जाएं',
    'blog.allPosts': 'सभी पोस्ट',
    'blog.continueReading': 'पढ़ना जारी रखें',
    'blog.heroTitle': 'ब्लॉग',
    'blog.heroSubtitle': 'वेब विकास पर विचार, ट्यूटोरियल और अंतर्दृष्टि',
    'blog.mediumCta': 'मैं वेब विकास विषयों के बारे में Medium पर भी लिखता हूं।',
    'blog.readMedium': 'Medium पर और पढ़ें',
    
    // CTA Section
    'cta.title': 'साथ काम करने में रुचि है?',
    'cta.description': 'मैं हमेशा नई परियोजनाओं, रचनात्मक विचारों, या आपके विज़न का हिस्सा बनने के अवसरों पर चर्चा करने के लिए खुला हूं।',
    'cta.button': 'नमस्ते कहें',
    
    // About Page
    'about.title': 'मेरे बारे में',
    'about.subtitle': 'मैं कौन हूं और क्या करता हूं',
    'about.hello': 'नमस्ते! मैं मंथन हूं।',
    'about.bio1': 'मैं एक जुनूनी फुल स्टैक डेवलपर हूं जिसे स्वच्छ, कुशल और उपयोगकर्ता के अनुकूल वेब एप्लिकेशन बनाना पसंद है। वेब विकास में मेरी यात्रा वेबसाइटें कैसे काम करती हैं, इस बारे में जिज्ञासा के साथ शुरू हुई, और यह डिजिटल अनुभव बनाने के करियर में बदल गई है जो बदलाव लाते हैं।',
    'about.bio2': 'मैं <strong>Angular</strong> इकोसिस्टम और <strong>MEAN स्टैक</strong> में विशेषज्ञता रखता हूं, लेकिन मैं हमेशा नई तकनीकों और फ्रेमवर्क को सीखने के लिए उत्सुक रहता हूं। मैं स्वच्छ, रखरखाव योग्य कोड लिखने और सर्वोत्तम प्रथाओं का पालन करने में विश्वास करता हूं जो एप्लिकेशन को स्केलेबल और प्रदर्शनकारी बनाते हैं।',
    'about.bio3': 'जब मैं कोडिंग नहीं कर रहा होता हूं, तो मुझे ओपन-सोर्स प्रोजेक्ट्स में योगदान देना, तकनीकी लेख लिखना और साथी डेवलपर्स को सीखने और बढ़ने में मदद करना अच्छा लगता है। मैं ज्ञान साझा करने और समुदाय निर्माण का प्रबल समर्थक हूं।',
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

    // Experience
    'exp.title1': 'फुल स्टैक डेवलपर',
    'exp.company1': 'फ्रीलांस / ओपन सोर्स',
    'exp.desc1_1': 'कई ओपन-सोर्स Angular प्रोजेक्ट और npm पैकेज विकसित और बनाए रखे',
    'exp.desc1_2': 'MEAN स्टैक का उपयोग करके फुल-स्टैक वेब एप्लिकेशन बनाए',
    'exp.desc1_3': 'Angular समुदाय के लिए शैक्षिक सामग्री और सीखने के संसाधन बनाए',
    'exp.desc1_4': 'ओपन-सोर्स प्रोजेक्ट्स में योगदान दिया और व्यक्तिगत डेवलपर टूल्स बनाए रखे',
    'exp.title2': 'सॉफ्टवेयर डेवलपर',
    'exp.company2': 'पिछली कंपनी',
    'exp.desc2_1': 'Angular और TypeScript का उपयोग करके रिस्पॉन्सिव वेब एप्लिकेशन बनाए',
    'exp.desc2_2': 'Node.js और Express के साथ RESTful API विकसित किए',
    'exp.desc2_3': 'Agile वातावरण में क्रॉस-फंक्शनल टीमों के साथ सहयोग किया',
    'exp.desc2_4': 'रिफैक्टरिंग के माध्यम से एप्लिकेशन प्रदर्शन और कोड गुणवत्ता में सुधार किया',
    
    // Contact Page
    'contact.title': 'संपर्क करें',
    'contact.subtitle': 'कोई प्रश्न है या साथ काम करना चाहते हैं? मुझे आपसे सुनना अच्छा लगेगा।',
    'contact.letsConnect': 'आइए जुड़ें',
    'contact.connectDesc': 'मैं हमेशा नई परियोजनाओं और अवसरों के बारे में सुनने में रुचि रखता हूं। चाहे आपके पास कोई प्रश्न हो, सहयोग करना चाहते हों, या बस नमस्ते कहना चाहते हों, बेझिझक मुझसे संपर्क करें।',
    'contact.name': 'नाम',
    'contact.email': 'ईमेल',
    'contact.subject': 'विषय',
    'contact.message': 'संदेश',
    'contact.placeholderName': 'आपका नाम',
    'contact.placeholderEmail': 'your@email.com',
    'contact.placeholderSubject': 'यह किस बारे में है?',
    'contact.placeholderMessage': 'आपका संदेश...',
    'contact.formNote': 'यह फ़ॉर्म स्पैम फ़िल्टर द्वारा सुरक्षित है। वैकल्पिक रूप से, आप मुझे सीधे ईमेल कर सकते हैं',
    'contact.sending': 'भेज रहा है...',
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
    'palette.navigate': 'नेविगेट करने के लिए',
    'palette.select': 'चुनने के लिए',
    'palette.open': 'खोलने के लिए',
    
    // Footer
    'footer.tagline': 'आधुनिक वेब तकनीकों के साथ डिजिटल अनुभव बना रहा हूं।',
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
