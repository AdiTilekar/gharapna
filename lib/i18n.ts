export type SupportedLocale = 'en' | 'mr' | 'hi';

export interface Translations {
  nav: {
    home: string;
    localities: string;
    projects: string;
    flats: string;
    tools: string;
    whyGharapna: string;
    blog: string;
    faq: string;
    about: string;
    contact: string;
    scheduleVisit: string;
  };
  trust: {
    demoRibbon: string;
    demoBanner: string;
    reraVerified: string;
    zeroHiddenCosts: string;
    carpetOnly: string;
    responsePromise: string;
  };
  actions: {
    callNow: string;
    whatsappUs: string;
    searchFlats: string;
    calculateEmi: string;
    compareAreas: string;
    readGuide: string;
  };
}

export const DICTIONARIES: Record<SupportedLocale, Translations> = {
  en: {
    nav: {
      home: 'Home',
      localities: 'Localities',
      projects: 'Projects',
      flats: 'Flats',
      tools: 'Calculators',
      whyGharapna: 'Why Gharapna',
      blog: 'Research & Guides',
      faq: 'FAQs',
      about: 'About',
      contact: 'Contact',
      scheduleVisit: 'Schedule Visit',
    },
    trust: {
      demoRibbon: 'Sample Listing',
      demoBanner: 'Demo Preview — All project information and pricing are illustrative sample data.',
      reraVerified: 'MahaRERA Verified',
      zeroHiddenCosts: 'Every Number Shown Upfront',
      carpetOnly: 'Net Usable Carpet Area Only',
      responsePromise: 'We reply within 2 hours, 9:00 AM – 8:00 PM IST',
    },
    actions: {
      callNow: 'Call Advisory Desk',
      whatsappUs: 'Chat on WhatsApp',
      searchFlats: 'Find Flats in PCMC',
      calculateEmi: 'Calculate Home Loan EMI',
      compareAreas: 'Compare Localities',
      readGuide: 'Read Guide',
    },
  },
  mr: {
    nav: {
      home: 'मुख्यपृष्ठ',
      localities: 'परिसर',
      projects: 'प्रकल्प',
      flats: 'फ्लॅट्स',
      tools: 'गणकयंत्रे (टूल्स)',
      whyGharapna: 'घरआपलं का?',
      blog: 'मार्गदर्शक आणि लेख',
      faq: 'वारंवार विचारले जाणारे प्रश्न',
      about: 'आमच्याबद्दल',
      contact: 'संपर्क',
      scheduleVisit: 'भेट ठरवा',
    },
    trust: {
      demoRibbon: 'नमुना नोंदणी',
      demoBanner: 'डेमो पूर्वावलोकन — सर्व प्रकल्प माहिती आणि दर नमुना स्वरूपात आहेत.',
      reraVerified: 'महारेरा (MahaRERA) पडताळणीकृत',
      zeroHiddenCosts: 'सर्व खर्च आधीच स्पष्ट दाखवले',
      carpetOnly: 'फक्त प्रत्यक्ष वापरण्यायोग्य कार्पेट क्षेत्र',
      responsePromise: 'आम्ही २ तासांच्या आत उत्तर देतो (सकाळी ९ ते रात्री ८)',
    },
    actions: {
      callNow: 'सल्लागार कक्षाला कॉल करा',
      whatsappUs: 'व्हॉट्सअ‍ॅपवर बोला',
      searchFlats: 'पिंपरी-चिंचवडमध्ये फ्लॅट्स शोधा',
      calculateEmi: 'ईएमआय (EMI) मोजा',
      compareAreas: 'परिसरांची तुलना करा',
      readGuide: 'मार्गदर्शक वाचा',
    },
  },
  hi: {
    nav: {
      home: 'होम',
      localities: 'इलाके (लोकालिटी)',
      projects: 'प्रोजेक्ट्स',
      flats: 'फ्लैट्स',
      tools: 'कैलकुलेटर एवं टूल्स',
      whyGharapna: 'घरअपना क्यों?',
      blog: 'गाइड एवं लेख',
      faq: 'सामान्य प्रश्न (FAQ)',
      about: 'हमारे बारे में',
      contact: 'संपर्क',
      scheduleVisit: 'विजिट बुक करें',
    },
    trust: {
      demoRibbon: 'सैंपल लिस्टिंग',
      demoBanner: 'डेमो पूर्वावलोकन — सभी प्रोजेक्ट विवरण और कीमतें नमूना डेटा हैं।',
      reraVerified: 'महारेरा (MahaRERA) सत्यापित',
      zeroHiddenCosts: 'हर एक लागत पहले से स्पष्ट',
      carpetOnly: 'केवल वास्तविक उपयोग योग्य कारपेट एरिया',
      responsePromise: 'हम 2 घंटे के भीतर जवाब देते हैं (सुबह 9 से रात 8 बजे तक)',
    },
    actions: {
      callNow: 'सलाहकार डेस्क को कॉल करें',
      whatsappUs: 'व्हाट्सएप पर बात करें',
      searchFlats: 'पिंपरी-चिंचवड में फ्लैट खोजें',
      calculateEmi: 'होम लोन EMI गणना करें',
      compareAreas: 'इलाकों की तुलना करें',
      readGuide: 'गाइड पढ़ें',
    },
  },
};
