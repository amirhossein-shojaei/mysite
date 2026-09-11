export interface LocalizedText {
  en: string;
  fa: string;
}

export interface AboutTimelineItem {
  title: LocalizedText;
  description: LocalizedText;
}

export interface AboutFocusItem {
  title: LocalizedText;
  description: LocalizedText;
}

export interface AboutFactCard {
  title: LocalizedText;
  description: LocalizedText;
}

export interface AboutSkillGroup {
  category: LocalizedText;
  skills: string;
}

export interface AboutData {
  eyebrow: LocalizedText;
  title: LocalizedText;
  subtitle: LocalizedText;
  intro: LocalizedText[];
  mindset: {
    title: LocalizedText;
    paragraphs: LocalizedText[];
  };
  focus: {
    title: LocalizedText;
    items: AboutFocusItem[];
  };
  pursuit: {
    title: LocalizedText;
    tagline: LocalizedText;
    paragraphs: LocalizedText[];
  };
  timeline: {
    title: LocalizedText;
    items: AboutTimelineItem[];
  };
  skills: {
    title: LocalizedText;
    groups: AboutSkillGroup[];
  };
  facts: AboutFactCard[];
}

export const about: AboutData = {
  eyebrow: {
    en: "ABOUT ME",
    fa: "درباره من",
  },
  title: {
    en: "From idea to product, with a mind always learning.",
    fa: "از ایده تا محصول، با ذهنی همیشه در حال یادگیری.",
  },
  subtitle: {
    en: "Full-Stack Developer",
    fa: "توسعه‌دهنده فول‌استک",
  },
  intro: [
    {
      en: "For me, software development is not just writing code; it is building solutions that are actually usable.",
      fa: "برای من توسعه نرم‌افزار فقط نوشتن کد نیست؛ ساختن راه‌حل‌هایی است که واقعاً قابل استفاده باشند.",
    },
    {
      en: "I am Amirhossein Shojaei, a full-stack developer focused on building modern web applications, PWAs, and AI-powered products.",
      fa: "من امیرحسین شجاعی هستم؛ یک توسعه‌دهنده‌ی فول‌استک که تمرکزم روی ساخت اپلیکیشن‌های وب مدرن، PWA و محصولات مبتنی بر هوش مصنوعی است.",
    },
    {
      en: "My journey began with learning and practicing programming, and gradually continued with building real projects, working with various technologies, and solving more complex problems. Today, in every project, I try to pay attention not only to coding but also to user experience, proper architecture, performance, scalability, and real-world usability of the product.",
      fa: "مسیر من از یادگیری و تمرین برنامه‌نویسی شروع شد و به مرور با ساخت پروژه‌های واقعی، کار با تکنولوژی‌های مختلف و حل مسائل پیچیده‌تر ادامه پیدا کرد. امروز سعی می‌کنم در هر پروژه، علاوه بر کدنویسی، به تجربه کاربر، معماری مناسب، عملکرد، مقیاس‌پذیری و قابلیت استفاده واقعی محصول هم توجه داشته باشم.",
    },
  ],
  mindset: {
    title: {
      en: "My Mindset",
      fa: "طرز فکر من",
    },
    paragraphs: [
      {
        en: "I believe a good developer is not just someone who knows many technologies; more importantly, it is the ability to understand a problem and find the right solution.",
        fa: "من معتقدم یک توسعه‌دهنده‌ی خوب فقط کسی نیست که تکنولوژی‌های زیادی بلد باشد؛ مهم‌تر از آن، توانایی درک مسئله و پیدا کردن راه‌حل مناسب است.",
      },
      {
        en: "That is why I try to properly understand the problem before writing code, and then choose the right technology and architecture based on the project needs.",
        fa: "به همین دلیل سعی می‌کنم قبل از اینکه سراغ کدنویسی بروم، مسئله را به‌درستی درک کنم و بعد با توجه به نیاز پروژه، تکنولوژی و معماری مناسب را انتخاب کنم.",
      },
      {
        en: "For me, learning is also not a finite process. Technologies are constantly changing, and I try to experience new tools and methods alongside working on real projects.",
        fa: "برای من یادگیری هم یک فرآیند تمام‌شدنی نیست. تکنولوژی‌ها دائماً تغییر می‌کنند و من هم سعی می‌کنم در کنار کار روی پروژه‌های واقعی، ابزارها و روش‌های جدید را تجربه کنم.",
      },
    ],
  },
  focus: {
    title: {
      en: "Professional Focus",
      fa: "تمرکز حرفه‌ای",
    },
    items: [
      {
        title: {
          en: "Full-Stack Development",
          fa: "توسعه فول‌استک",
        },
        description: {
          en: "The ability to work on both Frontend and Backend allows me to follow a product from the user interface to server-side logic and database.",
          fa: "توانایی کار روی هر دو بخش Frontend و Backend باعث شده بتوانم یک محصول را از رابط کاربری تا منطق سمت سرور و دیتابیس دنبال کنم.",
        },
      },
      {
        title: {
          en: "Modern Web & PWA",
          fa: "وب مدرن و PWA",
        },
        description: {
          en: "I have a special focus on building modern Web Applications and PWAs; products that, in addition to the web experience, can be installed and used on various devices.",
          fa: "تمرکز ویژه‌ای روی ساخت Web Applicationهای مدرن و PWA دارم؛ محصولاتی که علاوه بر تجربه‌ی وب، قابلیت نصب و استفاده روی دستگاه‌های مختلف را نیز داشته باشند.",
        },
      },
      {
        title: {
          en: "AI in Development",
          fa: "هوش مصنوعی در توسعه",
        },
        description: {
          en: "I do not see artificial intelligence merely as a side tool. I use tools such as OpenAI, Gemini, Claude, Codex, and Copilot to increase development speed, solve problems, review code, and build intelligent features. I have also worked with n8n and Flowise to build workflows and AI-based solutions.",
          fa: "هوش مصنوعی را صرفاً به‌عنوان یک ابزار جانبی نمی‌بینم. از ابزارهایی مانند OpenAI، Gemini، Claude، Codex و Copilot برای افزایش سرعت توسعه، حل مسائل، بررسی کد و ساخت قابلیت‌های هوشمند استفاده می‌کنم. در کنار آن، با ابزارهای n8n و Flowise نیز برای ساخت workflowها و راهکارهای مبتنی بر هوش مصنوعی کار کرده‌ام.",
        },
      },
      {
        title: {
          en: "Infrastructure & Deployment",
          fa: "زیرساخت و استقرار",
        },
        description: {
          en: "My experience is not limited to writing code; I have worked with Docker, Jenkins, PM2, and deploying projects on servers, and I am familiar with the process of taking a project from development to production.",
          fa: "تجربه‌ی من فقط به نوشتن کد محدود نمی‌شود؛ با Docker، Jenkins، PM2 و استقرار پروژه روی سرور نیز کار کرده‌ام و با فرآیند رساندن یک پروژه از محیط توسعه به محیط واقعی آشنا هستم.",
        },
      },
    ],
  },
  pursuit: {
    title: {
      en: "What I Always Pursue",
      fa: "چیزی که همیشه دنبالش هستم",
    },
    tagline: {
      en: "Learn → Build → Experience → Improve",
      fa: "یادگیری → ساختن → تجربه کردن → بهتر ساختن",
    },
    paragraphs: [
      {
        en: "Every project is not just a final output for me; it is an opportunity to better understand a real problem, find a suitable solution for it, and ultimately gain more technical experience.",
        fa: "هر پروژه برای من فقط یک خروجی نهایی نیست؛ فرصتی است برای اینکه یک مسئله‌ی واقعی را بهتر بفهمم، راه‌حل مناسبی برای آن پیدا کنم و در نهایت تجربه‌ی فنی بیشتری به دست بیاورم.",
      },
      {
        en: "That is why I like to work on projects where I can combine software development, proper architecture, and AI tools to build a product that is truly valuable to use.",
        fa: "به همین دلیل علاقه دارم روی پروژه‌هایی کار کنم که در آن‌ها بتوانم با ترکیب توسعه نرم‌افزار، معماری مناسب و ابزارهای هوش مصنوعی، محصولی بسازم که واقعاً ارزش استفاده داشته باشد.",
      },
    ],
  },
  timeline: {
    title: {
      en: "My Path So Far",
      fa: "مسیر من تا امروز",
    },
    items: [
      {
        title: {
          en: "4 Years of Learning & Practice",
          fa: "۴ سال یادگیری و تمرین",
        },
        description: {
          en: "The beginning of serious familiarity with programming, learning various concepts, and building practice projects.",
          fa: "شروع آشنایی جدی با برنامه‌نویسی، یادگیری مفاهیم مختلف و ساخت پروژه‌های تمرینی.",
        },
      },
      {
        title: {
          en: "11 Tir 1404",
          fa: "۱۱ تیر ۱۴۰۴",
        },
        description: {
          en: "Started professional activity and entered real-world projects.",
          fa: "شروع فعالیت حرفه‌ای و ورود به پروژه‌های واقعی.",
        },
      },
      {
        title: {
          en: "Today",
          fa: "امروز",
        },
        description: {
          en: "Focusing on Full-Stack development, PWA, and AI-based solutions, and continuing the journey of learning and building real products.",
          fa: "تمرکز بر توسعه Full-Stack، PWA و راهکارهای مبتنی بر هوش مصنوعی و ادامه‌ی مسیر یادگیری و ساخت محصولات واقعی.",
        },
      },
    ],
  },
  skills: {
    title: {
      en: "Skills",
      fa: "مهارت‌ها",
    },
    groups: [
      {
        category: { en: "Frontend", fa: "Frontend" },
        skills:
          "React · Next.js · TypeScript · JavaScript · Tailwind CSS · HTML · CSS · React Query · Zustand · Responsive Design · Component-Based Development",
      },
      {
        category: { en: "Backend", fa: "Backend" },
        skills:
          "Node.js · Express · JavaScript · SSE · OLAP · SSMS · PM2",
      },
      {
        category: { en: "Database", fa: "Database" },
        skills: "PostgreSQL · SQL · MongoDB · Prisma",
      },
      {
        category: { en: "DevOps & Deployment", fa: "DevOps & Deployment" },
        skills: "Docker · Jenkins · Docker Hub · Server Deployment",
      },
      {
        category: { en: "AI & Automation", fa: "AI & Automation" },
        skills: "OpenAI · Gemini · Claude · Codex · Copilot · Lovable · Flowise · n8n",
      },
      {
        category: { en: "Machine Learning & Data", fa: "Machine Learning & Data" },
        skills: "Python · Python OOP · NumPy · Pandas",
      },
      {
        category: { en: "Other", fa: "Other" },
        skills:
          "C++ · C# · Flutter · Git · GitHub · Postman · MongoDB Compass · Figma · Web Crawling",
      },
    ],
  },
  facts: [
    {
      title: { en: "My Approach", fa: "رویکرد من" },
      description: {
        en: "Solving the problem before choosing the technology.",
        fa: "حل مسئله قبل از انتخاب تکنولوژی.",
      },
    },
    {
      title: { en: "My Tools", fa: "ابزارهای من" },
      description: {
        en: "Coding, AI, and automation together.",
        fa: "کدنویسی، هوش مصنوعی و اتوماسیون در کنار هم.",
      },
    },
    {
      title: { en: "What I Build", fa: "چیزی که می‌سازم" },
      description: {
        en: "Modern, usable, real-world web products.",
        fa: "محصولات وب مدرن، قابل استفاده و آماده‌ی دنیای واقعی.",
      },
    },
  ],
};
