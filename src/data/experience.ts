export interface LocalizedText {
  en: string;
  fa: string;
}

export interface ExperienceLink {
  label: LocalizedText;
  url: string;
}

export interface ExperienceItem {
  number: string;
  title: LocalizedText;
  subtitle?: LocalizedText;
  role?: LocalizedText;
  paragraphs: LocalizedText[];
  meta?: {
    type?: LocalizedText;
    domain?: LocalizedText;
    client?: LocalizedText;
    links?: ExperienceLink[];
  };
}

export interface ExperienceData {
  eyebrow: LocalizedText;
  title: LocalizedText;
  intro: LocalizedText[];
  items: ExperienceItem[];
  closing: {
    title: LocalizedText;
    paragraphs: LocalizedText[];
  };
}

export const experience: ExperienceData = {
  eyebrow: {
    en: "EXPERIENCE",
    fa: "تجربه کاری",
  },
  title: {
    en: "A grounded professional journey.",
    fa: "مسیر حرفه‌ای واقعی و قابل اتکا",
  },
  intro: [
    {
      en: "I entered the world of programming about four years ago; a path that started with learning, practice, and building various projects, and became professional on 11 Tir 1404.",
      fa: "از حدود ۴ سال پیش وارد دنیای برنامه‌نویسی شدم؛ مسیری که با یادگیری، تمرین و ساخت پروژه‌های مختلف شروع شد و از ۱۱ تیر ۱۴۰۴ وارد مرحله حرفه‌ای شد.",
    },
    {
      en: "Today, as a Full-Stack Developer, I work on real products; from designing and implementing user interfaces and APIs to databases, server deployment, and using AI tools to build faster and smarter solutions.",
      fa: "امروز به‌عنوان یک توسعه‌دهنده فول‌استک روی توسعه محصولات واقعی کار می‌کنم؛ از طراحی و پیاده‌سازی رابط کاربری و API گرفته تا دیتابیس، استقرار روی سرور و استفاده از ابزارهای هوش مصنوعی برای ساخت راهکارهای سریع‌تر و هوشمندتر.",
    },
    {
      en: "During this time, I have worked on 5 real projects, all developed as PWAs and installable on mobile.",
      fa: "در این مدت روی ۵ پروژه واقعی کار کرده‌ام که همگی به‌صورت PWA توسعه داده شده‌اند و قابلیت نصب روی موبایل را دارند.",
    },
  ],
  items: [
    {
      number: "۱",
      title: {
        en: "Professional Software Development",
        fa: "توسعه نرم‌افزار حرفه‌ای",
      },
      subtitle: {
        en: "Started professional activity — Tir 1404",
        fa: "شروع فعالیت حرفه‌ای — تیر ۱۴۰۴",
      },
      role: {
        en: "Full-Stack Developer",
        fa: "توسعه‌دهنده فول‌استک",
      },
      paragraphs: [
        {
          en: "From learning and practice to building products that are used in the real world.",
          fa: "از یادگیری و تمرین به سمت ساخت محصولاتی که در دنیای واقعی استفاده می‌شوند.",
        },
        {
          en: "In professional projects, I gained experience working with React, Next.js, Node.js, TypeScript, PostgreSQL, MongoDB, Docker, CI/CD, and a wide range of development and deployment tools.",
          fa: "در پروژه‌های حرفه‌ای، تجربه کار با React، Next.js، Node.js، TypeScript، PostgreSQL، MongoDB، Docker، CI/CD و طیف گسترده‌ای از ابزارهای توسعه و استقرار را به دست آورده‌ام.",
        },
        {
          en: "Alongside software development, I use AI tools such as OpenAI, Gemini, Claude, Codex, Copilot, Lovable, and tools like n8n and Flowise for development and automation.",
          fa: "در کنار توسعه نرم‌افزار، از ابزارهای هوش مصنوعی مانند OpenAI، Gemini، Claude، Codex، Copilot، Lovable و ابزارهایی مانند n8n و Flowise نیز برای توسعه و اتوماسیون استفاده می‌کنم.",
        },
      ],
    },
    {
      number: "۲",
      title: {
        en: "Elixia",
        fa: "Elixia",
      },
      subtitle: {
        en: "Smart fitness platform",
        fa: "پلتفرم هوشمند تناسب‌اندام",
      },
      paragraphs: [
        {
          en: "A PWA for sports and health that uses AI capabilities to create a personalized experience for users.",
          fa: "یک PWA برای حوزه ورزش و سلامت که با استفاده از قابلیت‌های هوش مصنوعی، تجربه‌ای شخصی‌سازی‌شده برای کاربران ایجاد می‌کند.",
        },
        {
          en: "Users can receive personalized workout and diet programs based on their conditions and goals, and use various platform features to follow their fitness journey.",
          fa: "کاربران می‌توانند بر اساس شرایط و اهداف خود، برنامه‌های تمرینی و غذایی شخصی‌سازی‌شده دریافت کنند و از امکانات مختلف پلتفرم برای دنبال‌کردن مسیر تناسب‌اندام خود استفاده کنند.",
        },
      ],
      meta: {
        type: {
          en: "PWA",
          fa: "PWA",
        },
        domain: {
          en: "Fitness / AI",
          fa: "تناسب‌اندام / هوش مصنوعی",
        },
        links: [
          {
            label: { en: "Website", fa: "وب‌سایت" },
            url: "https://myelixia.com/",
          },
        ],
      },
    },
    {
      number: "۳",
      title: {
        en: "OIEC",
        fa: "OIEC",
      },
      subtitle: {
        en: "Smart solution for generating new warehouse codes",
        fa: "راهکار هوشمند تولید کدهای جدید انبار",
      },
      paragraphs: [
        {
          en: "OIEC or Oil Industries Engineering and Construction Company, is one of the longstanding companies in Iran's oil industry, operating since 1987 and having participated in more than 150 oil and energy projects over more than three decades.",
          fa: "OIEC یا شرکت مهندسی و ساختمان صنایع نفت، یکی از مجموعه‌های باسابقه صنعت نفت ایران است که از سال ۱۳۶۶ فعالیت می‌کند و در بیش از سه دهه فعالیت خود در اجرای بیش از ۱۵۰ پروژه نفت و انرژی حضور داشته است.",
        },
        {
          en: "In this project, I worked on generating and converting warehouse product codes; old product codes were reviewed and converted to new structures based on the required criteria and standards, with the help of AI.",
          fa: "در این پروژه، روی تولید و تبدیل کدهای کالاهای انبار کار کردم؛ به این صورت که کدهای قدیمی محصولات بر اساس معیارها و استانداردهای موردنیاز مجموعه، با کمک هوش مصنوعی بررسی و به ساختار جدید تبدیل شدند.",
        },
        {
          en: "This project was an example of practical use of AI for processing and organizing organizational data.",
          fa: "این پروژه نمونه‌ای از استفاده عملی از هوش مصنوعی برای پردازش و سامان‌دهی داده‌های سازمانی بود.",
        },
      ],
      meta: {
        client: {
          en: "OIEC",
          fa: "OIEC",
        },
        domain: {
          en: "Oil & Energy / Data Processing / AI",
          fa: "نفت و انرژی / پردازش داده / هوش مصنوعی",
        },
        links: [
          {
            label: { en: "Website", fa: "وب‌سایت" },
            url: "https://www.oiecgroup.com",
          },
        ],
      },
    },
    {
      number: "۴",
      title: {
        en: "coup",
        fa: "coup",
      },
      subtitle: {
        en: "Coworking space management platform",
        fa: "پلتفرم مدیریت فضای کار اشتراکی",
      },
      paragraphs: [
        {
          en: "coup is the first coworking space in Pardis Technology Park, providing a platform for freelancers, startup teams, and innovative businesses. Located alongside more than 400 technology and knowledge-based companies, it offers shared workspace, meeting rooms, event rooms, and networking spaces.",
          fa: "coup اولین فضای کار اشتراکی پارک فناوری پردیس است و بستری برای فعالیت فریلنسرها، تیم‌های استارتاپی و کسب‌وکارهای نوآور فراهم می‌کند. این مجموعه در کنار بیش از ۴۰۰ شرکت فناور و دانش‌بنیان قرار دارد و امکاناتی مانند فضای کار اشتراکی، اتاق جلسه، اتاق رویداد و فضاهای شبکه‌سازی ارائه می‌دهد.",
        },
        {
          en: "For this collection, a dedicated PWA was developed for managing and reserving spaces.",
          fa: "برای این مجموعه، یک PWA اختصاصی برای مدیریت و رزرو فضاها توسعه داده شد.",
        },
        {
          en: "Users can view and reserve various collection resources, including seats and meeting rooms, online.",
          fa: "کاربران می‌توانند به‌صورت آنلاین منابع مختلف مجموعه، از جمله صندلی‌ها و اتاق‌های جلسات را مشاهده و رزرو کنند.",
        },
      ],
      meta: {
        type: {
          en: "PWA",
          fa: "PWA",
        },
        domain: {
          en: "Workspace Management / Reservation",
          fa: "مدیریت فضای کار / رزرو",
        },
        links: [
          {
            label: { en: "Website", fa: "وب‌سایت" },
            url: "https://co-up.net",
          },
          {
            label: { en: "App", fa: "اپلیکیشن" },
            url: "https://coup.davandegan.cloud/",
          },
        ],
      },
    },
    {
      number: "۵",
      title: {
        en: "INOTEX",
        fa: "INOTEX",
      },
      subtitle: {
        en: "Digital platform for INOTEX exhibition",
        fa: "پلتفرم دیجیتال نمایشگاه اینوتکس",
      },
      paragraphs: [
        {
          en: "INOTEX is one of the important events in the field of technology and innovation in Iran, providing a platform for communication between technology companies, startups, investors, entrepreneurs, and innovation ecosystem activists.",
          fa: "INOTEX یکی از رویدادهای مهم حوزه فناوری و نوآوری ایران است که بستری برای ارتباط میان شرکت‌های فناور، استارتاپ‌ها، سرمایه‌گذاران، کارآفرینان و فعالان اکوسیستم نوآوری فراهم می‌کند.",
        },
        {
          en: "In the new version of this platform, users can access event information, programs, panels, speeches, and other exhibition sections, and communicate with other audiences and participating collections. The official INOTEX website also introduces its application as a platform for viewing the schedule, communicating with other audiences, and networking.",
          fa: "در نسخه جدید این پلتفرم، کاربران می‌توانند به اطلاعات رویدادها، برنامه‌ها، پنل‌ها، سخنرانی‌ها و سایر بخش‌های نمایشگاه دسترسی داشته باشند و با سایر مخاطبان و مجموعه‌های حاضر در رویداد ارتباط برقرار کنند. وب‌سایت رسمی اینوتکس نیز اپلیکیشن خود را بستری برای مشاهده برنامه زمانی، ارتباط با سایر مخاطبان و شبکه‌سازی معرفی می‌کند.",
        },
        {
          en: "One of the important parts of the project is the smart chatbot that allows users to ask questions about the exhibition, companies, exhibitors, and different parts of the event, and receive the information they need.",
          fa: "یکی از بخش‌های مهم پروژه، چت‌بات هوشمند است که به کاربران اجازه می‌دهد درباره نمایشگاه، شرکت‌ها، غرفه‌داران و بخش‌های مختلف رویداد سؤال بپرسند و اطلاعات موردنیازشان را دریافت کنند.",
        },
      ],
      meta: {
        type: {
          en: "PWA",
          fa: "PWA",
        },
        domain: {
          en: "Event Technology / AI / Networking",
          fa: "فناوری رویداد / هوش مصنوعی / شبکه‌سازی",
        },
        links: [
          {
            label: { en: "Website", fa: "وب‌سایت" },
            url: "https://inotex.com",
          },
          {
            label: { en: "App", fa: "اپلیکیشن" },
            url: "https://app.inotex.com",
          },
        ],
      },
    },
  ],
  closing: {
    title: {
      en: "5 real projects; a growing path",
      fa: "۵ پروژه واقعی؛ یک مسیر رو به رشد",
    },
    paragraphs: [
      {
        en: "Throughout this journey, my focus was not only on learning technologies; I have tried to apply everything I learn in real, usable projects.",
        fa: "در طول این مسیر، تمرکز من فقط روی یادگیری تکنولوژی‌ها نبوده؛ بلکه تلاش کرده‌ام هر چیزی که یاد می‌گیرم را در پروژه‌های واقعی و قابل استفاده به کار بگیرم.",
      },
      {
        en: "Experience working on projects in various fields, from fitness and AI to oil industry, shared workspace management, and technology events, has given me a broader perspective on the real software development process.",
        fa: "تجربه کار روی پروژه‌هایی در حوزه‌های مختلف، از فیتنس و هوش مصنوعی گرفته تا صنعت نفت، مدیریت فضای کار اشتراکی و رویدادهای فناوری، باعث شده دید گسترده‌تری نسبت به فرآیند واقعی توسعه نرم‌افزار پیدا کنم.",
      },
      {
        en: "I started with learning; continued with real projects.",
        fa: "از یادگیری شروع کردم؛ با پروژه‌های واقعی ادامه دادم.",
      },
    ],
  },
};
