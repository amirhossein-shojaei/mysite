export interface LocalizedText {
  en: string;
  fa: string;
}

export interface ResumeExperience {
  title: LocalizedText;
  company: LocalizedText;
  role: LocalizedText;
  date: LocalizedText;
  description: LocalizedText[];
  responsibilities?: LocalizedText[];
}

export interface ResumeProject {
  number: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  description: LocalizedText[];
  focus: LocalizedText[];
  company?: LocalizedText;
  app?: string;
  website?: string;
}

export const resume = {
  hero: {
    eyebrow: { en: "RESUME", fa: "رزومه" },
    title: {
      en: "Full-Stack Developer focused on building real web products, PWAs, and AI integrations.",
      fa: "توسعه‌دهنده Full-Stack با تمرکز بر ساخت محصولات وب واقعی، PWA و یکپارچه‌سازی هوش مصنوعی.",
    },
    subtitle: {
      en: "A concise overview of my professional path, project experience, technical skills, and areas of expertise; from interface and Backend development to Database, Deployment, and intelligent capabilities.",
      fa: "رزومه‌ای خلاصه از مسیر حرفه‌ای، تجربه پروژه‌ها، مهارت‌های فنی و حوزه‌های تخصصی من؛ از توسعه رابط کاربری و Backend تا دیتابیس، استقرار و قابلیت‌های هوشمند.",
    },
  },
  profile: {
    title: { en: "PROFILE", fa: "پروفایل" },
    name: { en: "Amirhossein Shojaei", fa: "امیرحسین شجاعی" },
    paragraphs: [
      {
        en: "A Full-Stack Developer focused on designing and developing practical web products that can be used in real environments.",
        fa: "توسعه‌دهنده Full-Stack با تمرکز بر طراحی و توسعه محصولات وب کاربردی و قابل استفاده در محیط واقعی.",
      },
      {
        en: "My path in programming began about four years ago and, after years of learning and practice, I started my professional software development activity on 11 Tir 1404.",
        fa: "مسیر یادگیری و فعالیت من در برنامه‌نویسی حدود چهار سال پیش آغاز شد و پس از سال‌ها یادگیری و تمرین، از ۱۱ تیر ۱۴۰۴ فعالیت حرفه‌ای خود را در توسعه نرم‌افزار آغاز کردم.",
      },
      {
        en: "I currently work across Frontend, Backend, Database, PWA, Deployment, and AI integration, with experience developing projects used in real environments.",
        fa: "در حال حاضر در حوزه‌های Frontend، Backend، Database، PWA، Deployment و یکپارچه‌سازی هوش مصنوعی فعالیت می‌کنم و تجربه توسعه پروژه‌هایی را دارم که در محیط واقعی مورد استفاده قرار گرفته‌اند.",
      },
      {
        en: "My main focus is building products that are not only correct in code, but also dependable in user experience, architecture, performance, and real-world usability.",
        fa: "تمرکز اصلی من ساخت محصولاتی است که فقط از نظر کدنویسی درست نباشند؛ بلکه از نظر تجربه کاربری، معماری، عملکرد و قابلیت استفاده واقعی نیز قابل اتکا باشند.",
      },
      {
        en: "Alongside software development, I use AI tools and models such as OpenAI, Gemini, Claude, Codex, and GitHub Copilot as part of the development and problem-solving process.",
        fa: "در کنار توسعه نرم‌افزار، از ابزارها و مدل‌های هوش مصنوعی مانند OpenAI، Gemini، Claude، Codex و GitHub Copilot نیز به‌عنوان بخشی از فرآیند توسعه و حل مسئله استفاده می‌کنم.",
      },
    ],
  },
  experience: {
    title: { en: "WORK EXPERIENCE", fa: "تجربه کاری" },
    items: [
      {
        title: { en: "Professional Software Development", fa: "توسعه نرم‌افزار حرفه‌ای" },
        company: { en: "Edge Runners", fa: "دوندگان لبه علم" },
        role: { en: "Full-Stack Developer", fa: "توسعه‌دهنده Full-Stack" },
        date: { en: "11 Tir 1404 — Present", fa: "۱۱ تیر ۱۴۰۴ — اکنون" },
        description: [
          {
            en: "I started my professional software development activity at Edge Runners and have worked on real projects across web development, Backend, PWA, and AI-powered capabilities.",
            fa: "فعالیت حرفه‌ای خود را با توسعه نرم‌افزار در شرکت دوندگان لبه علم آغاز کردم و در پروژه‌های واقعی در حوزه توسعه وب، Backend، PWA و قابلیت‌های مبتنی بر هوش مصنوعی فعالیت داشته‌ام.",
          },
        ],
        responsibilities: [
          { en: "Building user interfaces with React and TypeScript", fa: "توسعه رابط‌های کاربری با React و TypeScript" },
          { en: "Developing Backend and APIs with Node.js and Express", fa: "توسعه Backend و API با Node.js و Express" },
          { en: "Designing and implementing database connections", fa: "طراحی و پیاده‌سازی ارتباط با دیتابیس" },
          { en: "Developing Progressive Web Applications", fa: "توسعه Progressive Web Application" },
          { en: "Implementing AI-powered capabilities", fa: "پیاده‌سازی قابلیت‌های مبتنی بر هوش مصنوعی" },
          { en: "Working with PostgreSQL and MongoDB", fa: "کار با PostgreSQL و MongoDB" },
          { en: "Using Docker and deploying projects on servers", fa: "استفاده از Docker و استقرار پروژه روی سرور" },
          { en: "Developing and maintaining software used in real environments", fa: "توسعه و نگهداری نرم‌افزارهای مورد استفاده در محیط واقعی" },
          { en: "Using AI tools to improve development speed and quality", fa: "استفاده از ابزارهای هوش مصنوعی برای افزایش سرعت و کیفیت فرآیند توسعه" },
        ],
      },
      {
        title: { en: "Freelance Full-Stack Developer", fa: "توسعه‌دهنده Full-Stack فریلنسر" },
        company: { en: "Independent practice", fa: "فعالیت مستقل" },
        role: { en: "Full-Stack Developer", fa: "توسعه‌دهنده Full-Stack" },
        date: { en: "Present", fa: "اکنون" },
        description: [
          {
            en: "Alongside my professional activity, I work independently on software products and projects.",
            fa: "در کنار فعالیت حرفه‌ای، به‌صورت مستقل روی توسعه محصولات و پروژه‌های نرم‌افزاری کار می‌کنم.",
          },
          {
            en: "Depending on project needs, freelance collaborations can cover Frontend, Backend, Database, PWA, AI Integration, Docker, and Deployment.",
            fa: "در همکاری‌های فریلنسری، بسته به نیاز پروژه می‌توانم در بخش‌های مختلف چرخه توسعه فعالیت داشته باشم؛ از Frontend و Backend تا Database، PWA، AI Integration، Docker و Deployment.",
          },
          {
            en: "The main focus is turning a requirement or initial idea into a usable and extensible web product.",
            fa: "تمرکز اصلی این همکاری‌ها، تبدیل نیازمندی یا ایده اولیه به یک محصول وب قابل استفاده و قابل توسعه است.",
          },
        ],
      },
    ] as ResumeExperience[],
  },
  projects: {
    title: { en: "SELECTED PROJECTS", fa: "پروژه‌های منتخب" },
    items: [
      {
        number: "۱",
        title: { en: "Elixia", fa: "Elixia" },
        subtitle: { en: "AI-Powered Fitness & Nutrition PWA", fa: "AI-Powered Fitness & Nutrition PWA" },
        description: [
          { en: "A PWA platform for fitness and nutrition that uses AI capabilities to provide user-specific workout and nutrition plans.", fa: "توسعه یک پلتفرم PWA در حوزه ورزش و تناسب اندام که با استفاده از قابلیت‌های هوش مصنوعی، امکان دریافت برنامه‌های ورزشی و غذایی متناسب با کاربر را فراهم می‌کند." },
        ],
        focus: [
          { en: "PWA Web Application development", fa: "توسعه Web Application به‌صورت PWA" },
          { en: "User interface implementation", fa: "پیاده‌سازی رابط کاربری" },
          { en: "AI capability integration", fa: "اتصال قابلیت‌های هوش مصنوعی به محصول" },
          { en: "Mobile-first user experience", fa: "ایجاد تجربه کاربری مناسب برای استفاده روی موبایل" },
          { en: "Development for real-world use", fa: "توسعه بخش‌های مختلف محصول برای استفاده واقعی" },
        ],
        website: "https://myelixia.com/",
      },
      {
        number: "۲",
        title: { en: "OIEC", fa: "OIEC" },
        subtitle: { en: "Enterprise inventory and product coding system", fa: "سیستم سازمانی کدگذاری موجودی و کالا" },
        description: [
          { en: "Development and improvement of an inventory and product coding system, including conversion of legacy product codes into a new organizational structure with AI-assisted data processing.", fa: "در این پروژه روی توسعه و بهبود سیستم کدگذاری کالا و موجودی فعالیت کردم. یکی از بخش‌های اصلی پروژه، تبدیل کدهای قدیمی محصولات موجود در انبار به ساختار کدگذاری جدید بر اساس معیارهای مشخص سازمان بود. در این فرآیند از هوش مصنوعی برای پردازش و تبدیل حجم بالای اطلاعات و کمک به اجرای فرآیند کدگذاری استفاده شد." },
        ],
        focus: [
          { en: "Product information processing", fa: "پردازش اطلاعات محصولات" },
          { en: "Legacy code structure conversion", fa: "تبدیل ساختار کدهای قدیمی" },
          { en: "Applying new coding criteria", fa: "اعمال معیارهای جدید کدگذاری" },
          { en: "AI-assisted data processing", fa: "استفاده از هوش مصنوعی در فرآیند پردازش داده" },
          { en: "Organization-specific solution", fa: "پیاده‌سازی راهکار متناسب با نیاز سازمان" },
        ],
        company: { en: "OIEC Group", fa: "OIEC Group" },
        website: "https://www.oiecgroup.com/",
      },
      {
        number: "۳",
        title: { en: "CO-UP", fa: "CO-UP" },
        subtitle: { en: "Coworking space reservation PWA", fa: "PWA رزرو فضای کار اشتراکی" },
        description: [
          { en: "A Progressive Web Application for a coworking space in Pardis Technology Park, allowing users to view and reserve seats and meeting rooms online.", fa: "توسعه یک Progressive Web Application برای فضای کار اشتراکی در پارک فناوری پردیس. کاربران این سامانه می‌توانند فضای مورد نیاز خود، از جمله صندلی‌ها و اتاق‌های جلسات را به‌صورت آنلاین مشاهده و رزرو کنند." },
        ],
        focus: [
          { en: "PWA development", fa: "توسعه PWA" },
          { en: "User interface design and implementation", fa: "طراحی و پیاده‌سازی رابط کاربری" },
          { en: "Online reservation system", fa: "سیستم رزرو آنلاین" },
          { en: "Reservation state and information management", fa: "مدیریت وضعیت و اطلاعات رزرو" },
          { en: "Frontend and Backend communication", fa: "ارتباط Frontend با Backend" },
          { en: "Suitable everyday user experience", fa: "ارائه تجربه کاربری مناسب برای استفاده روزمره" },
        ],
        app: "https://coup.davandegan.cloud/",
        website: "https://co-up.net/",
      },
      {
        number: "۴",
        title: { en: "INOTEX", fa: "INOTEX" },
        subtitle: { en: "Event and networking PWA", fa: "PWA رویداد و شبکه‌سازی" },
        description: [
          { en: "A PWA for the INOTEX exhibition, providing exhibition information and a platform for communication between visitors, companies, and exhibitors.", fa: "توسعه یک PWA برای نمایشگاه INOTEX با هدف ارائه اطلاعات نمایشگاه و ایجاد بستری برای ارتباط میان بازدیدکنندگان، شرکت‌ها و غرفه‌داران. کاربران می‌توانند اطلاعات مربوط به نمایشگاه، برنامه‌ها، اخبار، شرکت‌ها و غرفه‌داران را از طریق اپلیکیشن مشاهده کنند. یکی از قابلیت‌های مهم پروژه، چت‌بات هوشمند برای پاسخ‌گویی مرتبط با اطلاعات نمایشگاه است." },
        ],
        focus: [
          { en: "Progressive Web Application development", fa: "توسعه Progressive Web Application" },
          { en: "Exhibition information delivery", fa: "ارائه اطلاعات نمایشگاه" },
          { en: "Company and exhibitor profiles", fa: "معرفی شرکت‌ها و غرفه‌داران" },
          { en: "Programs and news access", fa: "دسترسی به برنامه‌ها و اخبار" },
          { en: "Networking capabilities", fa: "توسعه قابلیت‌های شبکه‌سازی" },
          { en: "Smart chatbot integration", fa: "یکپارچه‌سازی چت‌بات هوشمند" },
          { en: "AI-powered user responses", fa: "استفاده از هوش مصنوعی برای پاسخ‌گویی به کاربران" },
        ],
        app: "https://app.inotex.com/",
        website: "https://inotex.com/",
      },
    ] as ResumeProject[],
  },
  highlights: {
    title: { en: "CAREER HIGHLIGHTS", fa: "دستاورد و تجربه پروژه‌ای" },
    items: [
      { number: "+5", title: { en: "Real Projects", fa: "پروژه واقعی" }, description: { en: "Experience developing multiple web products and systems designed and built for real use.", fa: "تجربه توسعه چندین محصول و سامانه وب که برای استفاده واقعی طراحی و پیاده‌سازی شده‌اند." } },
      { number: "2", title: { en: "PWA Focus", fa: "تمرکز بر PWA" }, description: { en: "All main projects completed so far have been developed as PWAs and can be installed and used on mobile devices.", fa: "تمام پروژه‌های اصلی انجام‌شده توسط من تاکنون به‌صورت PWA توسعه داده شده‌اند و قابلیت نصب و استفاده روی دستگاه‌های موبایل را دارند." } },
      { number: "3", title: { en: "1+ Year Professional Activity", fa: "بیش از یک سال فعالیت حرفه‌ای" }, description: { en: "I entered professional software development on 11 Tir 1404 and have worked on real products used in the market since then.", fa: "از ۱۱ تیر ۱۴۰۴ وارد مسیر توسعه حرفه‌ای نرم‌افزار شده‌ام و در این مدت روی پروژه‌های واقعی و مورد استفاده بازار فعالیت کرده‌ام." } },
      { number: "4", title: { en: "Full-Stack", fa: "Full-Stack" }, description: { en: "Experience working across both Frontend and Backend and developing different parts of a product together.", fa: "تجربه کار در هر دو لایه Frontend و Backend و توانایی توسعه بخش‌های مختلف یک محصول در کنار یکدیگر." } },
      { number: "5", title: { en: "AI in Software Development", fa: "AI در توسعه نرم‌افزار" }, description: { en: "Using AI models and tools to develop product capabilities, process information, and improve software development.", fa: "استفاده از مدل‌ها و ابزارهای هوش مصنوعی برای توسعه قابلیت‌های محصول، پردازش اطلاعات و بهبود فرآیند توسعه نرم‌افزار." } },
    ],
  },
  skills: {
    title: { en: "TECHNICAL SKILLS", fa: "مهارت‌های فنی" },
    groups: [
      { title: { en: "Frontend", fa: "Frontend" }, skills: "React · Next.js · JavaScript · TypeScript · HTML · CSS · Tailwind CSS · Component-Based Development · React Query · Zustand · Responsive Web Design" },
      { title: { en: "Backend", fa: "Backend" }, skills: "JavaScript · Node.js · Express.js · REST API · SSE · SSMS · OLAP · PM2" },
      { title: { en: "Database", fa: "Database" }, skills: "PostgreSQL · SQL · MongoDB · Prisma · MongoDB Compass" },
      { title: { en: "DevOps & Deployment", fa: "DevOps & Deployment" }, skills: "Docker · Docker Hub · Jenkins · PM2 · Server Deployment · ساخت و آماده‌سازی APK برای PWA" },
      { title: { en: "Artificial Intelligence", fa: "Artificial Intelligence" }, skills: "OpenAI · Gemini · Claude · Codex · GitHub Copilot · AI Integration · AI-assisted Software Development · Flowise · n8n" },
      { title: { en: "Machine Learning & Data", fa: "Machine Learning & Data" }, skills: "Python — پیشرفته · NumPy — پیشرفته · Pandas — پیشرفته · Python OOP — متوسط" },
    ],
  },
  additional: {
    title: { en: "PROGRAMMING LANGUAGES & ADDITIONAL TECHNOLOGIES", fa: "زبان‌های برنامه‌نویسی و تکنولوژی‌های تکمیلی" },
    skills: "C++ — متوسط · C# — متوسط · Flutter — آشنایی",
    note: { en: "Additional technologies", fa: "تکنولوژی‌های تکمیلی" },
  },
  tools: {
    title: { en: "TOOLS", fa: "ابزارها" },
    skills: "Git · GitHub · Postman · MongoDB Compass · Docker Hub · Figma · n8n · Flowise · Crawler",
  },
  expertise: {
    title: { en: "AREAS OF EXPERTISE", fa: "حوزه‌های تخصصی" },
    items: [
      { title: { en: "Full-Stack Web Development", fa: "Full-Stack Web Development" }, description: { en: "Developing a product from user interface to Backend, API, and Database.", fa: "توسعه محصول از رابط کاربری تا Backend، API و Database." } },
      { title: { en: "Progressive Web Applications", fa: "Progressive Web Applications" }, description: { en: "Building Web Applications with installation and suitable experiences on mobile and desktop.", fa: "ساخت Web Applicationهایی با قابلیت نصب و تجربه مناسب روی موبایل و دسکتاپ." } },
      { title: { en: "AI-Powered Applications", fa: "AI-Powered Applications" }, description: { en: "Adding AI capabilities to real products and connecting AI models to software workflows.", fa: "اضافه‌کردن قابلیت‌های هوش مصنوعی به محصولات واقعی و اتصال مدل‌های AI به فرآیندهای نرم‌افزاری." } },
      { title: { en: "Backend & API Development", fa: "Backend & API Development" }, description: { en: "Designing and developing Backend services and APIs connecting Frontend, Database, and services.", fa: "طراحی و توسعه سرویس‌های Backend و API برای ارتباط میان Frontend، Database و سرویس‌های مختلف." } },
      { title: { en: "Data & Database", fa: "Data & Database" }, description: { en: "Working with data, designing database structures, and developing the data access layer.", fa: "کار با داده، طراحی ساختار دیتابیس و توسعه لایه دسترسی به داده." } },
      { title: { en: "Deployment & Infrastructure", fa: "Deployment & Infrastructure" }, description: { en: "Preparing and deploying projects for real environments with Docker, PM2, and Jenkins.", fa: "آماده‌سازی و استقرار پروژه برای اجرا در محیط واقعی با Docker، PM2 و Jenkins." } },
    ],
  },
  approach: {
    title: { en: "PROFESSIONAL APPROACH", fa: "رویکرد من به توسعه نرم‌افزار" },
    heading: { en: "Continuous learning, real building", fa: "یادگیری مداوم، ساختن واقعی" },
    paragraphs: [
      { en: "My professional path started with learning and practice, but an important part of my growth happened when I entered real projects.", fa: "مسیر حرفه‌ای من با یادگیری و تمرین شروع شد، اما بخش مهمی از رشد من زمانی اتفاق افتاد که وارد پروژه‌های واقعی شدم." },
      { en: "When developing a product, I do not think only about writing code; the main problem for me is finding a suitable technical solution for a real need and turning it into a product that can be used, extended, and improved.", fa: "در توسعه یک محصول، صرفاً به نوشتن کد فکر نمی‌کنم؛ مسئله اصلی برای من این است که راهکار فنی مناسبی برای یک نیاز واقعی پیدا کنم و آن را به محصولی تبدیل کنم که بتوان از آن استفاده کرد، توسعه‌اش داد و در آینده بهبودش بخشید." },
      { en: "Alongside learning new technologies, I focus on practical experience in architecture, development, Database, Deployment, and useful applications of AI.", fa: "به همین دلیل در کنار یادگیری تکنولوژی‌های جدید، روی تجربه عملی در معماری، توسعه، دیتابیس، استقرار و استفاده کاربردی از هوش مصنوعی تمرکز دارم." },
    ],
  },
  goal: {
    title: { en: "PROFESSIONAL GOAL", fa: "هدف حرفه‌ای" },
    heading: { en: "Building better products, learning more, solving more complex problems.", fa: "ساخت محصولات بهتر، یادگیری بیشتر، حل مسئله‌های پیچیده‌تر." },
    description: { en: "As I continue my professional path, my focus is on developing modern and intelligent web products, deepening my Full-Stack knowledge, and using AI more effectively in software development.", fa: "در ادامه مسیر حرفه‌ای، تمرکز من روی توسعه محصولات وب مدرن و هوشمند، عمیق‌تر کردن دانش Full-Stack و استفاده مؤثرتر از هوش مصنوعی در فرآیند توسعه نرم‌افزار است." },
  },
  cta: {
    heading: { en: "If you have a project to build, develop, or improve, I would be happy to discuss it.", fa: "اگر پروژه‌ای برای ساخت، توسعه یا بهبود دارید، خوشحال می‌شوم درباره آن صحبت کنیم." },
    button: { en: "Start a conversation ←", fa: "شروع یک گفتگو ←" },
  },
} as const;
