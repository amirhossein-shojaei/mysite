export interface LocalizedText {
  en: string;
  fa: string;
}

export interface Service {
  title: LocalizedText;
  description: LocalizedText;
  body: LocalizedText[];
}

const text = (en: string, fa: string): LocalizedText => ({ en, fa });

export const services: Service[] = [
  {
    title: text("Full-Stack Development", "توسعه Full-Stack"),
    description: text(
      "Building a complete product from Frontend to Backend",
      "توسعه یک محصول کامل، از Frontend تا Backend",
    ),
    body: [
      text(
        "End-to-end web application development; from implementing the user interface and managing Frontend state to designing APIs, server-side logic, database connections, and preparing the product for execution.",
        "توسعه اپلیکیشن‌های وب به‌صورت End-to-End؛ از پیاده‌سازی رابط کاربری و مدیریت State در Frontend تا طراحی API، منطق سمت سرور، ارتباط با دیتابیس و آماده‌سازی محصول برای اجرا.",
      ),
      text(
        "Using React, Next.js, TypeScript, Node.js, Express, PostgreSQL, and MongoDB, I can develop the different parts of a product within an integrated architecture.",
        "با استفاده از React، Next.js، TypeScript، Node.js، Express، PostgreSQL و MongoDB می‌توانم بخش‌های مختلف یک محصول را در یک معماری یکپارچه توسعه دهم.",
      ),
      text(
        "Suitable for: MVPs, management dashboards, enterprise systems, web platforms, and SaaS products.",
        "مناسب برای: ساخت MVP، پنل‌های مدیریتی، سامانه‌های سازمانی، پلتفرم‌های تحت وب و محصولات SaaS.",
      ),
    ],
  },
  {
    title: text("Frontend Development", "توسعه Frontend"),
    description: text(
      "Turning design and ideas into a real user interface",
      "تبدیل طراحی و ایده به یک رابط کاربری واقعی",
    ),
    body: [
      text(
        "Implementing modern, Responsive, and Component-Based interfaces with a focus on user experience, performance, and maintainable code.",
        "پیاده‌سازی رابط‌های کاربری مدرن، Responsive و Component-Based با تمرکز روی تجربه کاربری، عملکرد و نگهداری آسان کد.",
      ),
      text(
        "I use React, Next.js, TypeScript, Tailwind CSS, React Query, and Zustand in Frontend development, optimizing the interface for mobile, tablet, and desktop.",
        "در توسعه Frontend از React، Next.js، TypeScript، Tailwind CSS، React Query و Zustand استفاده می‌کنم و رابط را برای موبایل، تبلت و دسکتاپ بهینه می‌کنم.",
      ),
      text(
        "The process can start with receiving a Figma design and continue through complete page and component implementation, State management, API connection, and interface optimization.",
        "فرآیند کار می‌تواند از دریافت طراحی در Figma شروع شود و تا پیاده‌سازی کامل صفحات، کامپوننت‌ها، مدیریت State، اتصال به API و بهینه‌سازی رابط ادامه پیدا کند.",
      ),
      text(
        "Outcome: an organized, Responsive, and extensible Frontend ready to connect to the Backend and be used in the real world.",
        "خروجی: یک Frontend منظم، Responsive و قابل توسعه که آماده اتصال به Backend و استفاده واقعی باشد.",
      ),
    ],
  },
  {
    title: text("Backend & API Development", "توسعه Backend و API"),
    description: text(
      "Building server-side logic and infrastructure",
      "ساخت منطق و زیرساخت سمت سرور",
    ),
    body: [
      text(
        "Backend development for managing data, business logic, and communication between different parts of a product.",
        "توسعه Backend برای مدیریت داده‌ها، منطق کسب‌وکار و ارتباط بین بخش‌های مختلف یک محصول.",
      ),
      text(
        "Using Node.js and Express, I can design and implement the APIs an application needs and connect them to the Database and Frontend.",
        "با استفاده از Node.js و Express می‌توانم APIهای موردنیاز یک اپلیکیشن را طراحی و پیاده‌سازی کنم و ارتباط آن‌ها را با دیتابیس و Frontend برقرار کنم.",
      ),
      text(
        "For projects that need real-time communication with users, technologies such as SSE can also be considered.",
        "در پروژه‌هایی که نیاز به ارتباط لحظه‌ای با کاربر دارند، امکان استفاده از تکنولوژی‌هایی مانند SSE را نیز در نظر می‌گیرم.",
      ),
      text(
        "Suitable for: REST API, management dashboards, Backend services, data-driven systems, and web applications.",
        "مناسب برای: REST API، پنل‌های مدیریتی، سرویس‌های Backend، سامانه‌های مبتنی بر داده و اپلیکیشن‌های وب.",
      ),
    ],
  },
  {
    title: text("PWA Development", "توسعه PWA"),
    description: text(
      "An app-like experience with the power of the web",
      "تجربه‌ای نزدیک به اپلیکیشن، با قدرت وب",
    ),
    body: [
      text(
        "Developing Progressive Web Applications for products that want to provide a suitable experience on mobile and desktop without complete dependence on a Native app.",
        "توسعه Progressive Web Application برای محصولاتی که می‌خواهند بدون وابستگی کامل به اپلیکیشن Native، تجربه‌ای مناسب روی موبایل و دسکتاپ ارائه دهند.",
      ),
      text(
        "A PWA can provide capabilities such as installation on a device, independent execution from the browser, and an experience closer to an app.",
        "PWA می‌تواند قابلیت‌هایی مانند نصب روی دستگاه، اجرای مستقل از مرورگر و تجربه کاربری نزدیک‌تر به اپلیکیشن را فراهم کند.",
      ),
      text(
        "My experience building real PWA projects has made this type of product one of my primary areas of focus.",
        "تجربه من در ساخت پروژه‌های واقعی PWA باعث شده توسعه این نوع محصولات یکی از حوزه‌های اصلی تمرکزم باشد.",
      ),
      text(
        "Suitable for: reservation systems, user dashboards, service platforms, enterprise systems, and mobile-first Web Apps.",
        "مناسب برای: سامانه‌های رزرو، پنل‌های کاربری، پلتفرم‌های خدماتی، سامانه‌های سازمانی و Web Appهای موبایل‌محور.",
      ),
    ],
  },
  {
    title: text("AI Integration", "یکپارچه‌سازی هوش مصنوعی"),
    description: text(
      "Adding intelligent capabilities to real products",
      "اضافه‌کردن قابلیت‌های هوشمند به محصولات واقعی",
    ),
    body: [
      text(
        "If your product needs an AI capability, I can implement it within your web application architecture and integrate it with different parts of the system.",
        "اگر محصول شما نیاز به یک قابلیت هوش مصنوعی دارد، می‌توانم این قابلیت را در معماری وب‌اپلیکیشن شما پیاده‌سازی و با بخش‌های مختلف سیستم یکپارچه کنم.",
      ),
      text(
        "Using services and models such as OpenAI, Gemini, and Claude, capabilities such as the following can be added to a Web Application:",
        "با استفاده از سرویس‌ها و مدل‌هایی مانند OpenAI، Gemini و Claude می‌توان قابلیت‌هایی مانند موارد زیر را به یک Web Application اضافه کرد:",
      ),
      text(
        "• Smart chatbots\n• Product-information-based responses\n• Text processing and analysis\n• Intelligent content generation\n• Information and data processing\n• In-product intelligent assistants",
        "• چت‌بات‌های هوشمند\n• پاسخ‌گویی مبتنی بر اطلاعات محصول\n• پردازش و تحلیل متن\n• تولید محتوای هوشمند\n• پردازش اطلاعات و داده‌ها\n• دستیارهای هوشمند داخل محصول",
      ),
      text(
        "The main focus is not only connecting an API; it is placing AI in the right part of the product and turning it into a usable capability for the user.",
        "تمرکز اصلی در این بخش فقط اتصال یک API نیست؛ بلکه قرار دادن AI در جای درست محصول و تبدیل آن به یک قابلیت قابل استفاده برای کاربر است.",
      ),
    ],
  },
  {
    title: text("Database Development & Management", "توسعه و مدیریت پایگاه داده"),
    description: text(
      "Designing a data structure that grows with the product",
      "طراحی ساختار داده‌ای که با محصول رشد کند",
    ),
    body: [
      text(
        "Designing and implementing the data layer according to project needs, from defining table structures and relationships to connecting the Backend to the Database.",
        "طراحی و پیاده‌سازی لایه داده متناسب با نیاز پروژه، از تعریف ساختار جداول و ارتباط بین داده‌ها تا اتصال Backend به دیتابیس.",
      ),
      text(
        "I work with PostgreSQL, SQL, MongoDB, and Prisma, choosing a suitable SQL or NoSQL structure based on the data type and product needs.",
        "در پروژه‌ها با PostgreSQL، SQL، MongoDB و Prisma کار می‌کنم و بر اساس نوع داده و نیاز محصول، ساختار مناسب SQL یا NoSQL را انتخاب می‌کنم.",
      ),
      text(
        "This can include:\n• Schema design\n• Defining relationships between data\n• Implementing Queries\n• Connecting Backend to Database\n• Managing structured and unstructured data\n• Working with an ORM when needed",
        "این بخش می‌تواند شامل موارد زیر باشد:\n• طراحی Schema\n• تعریف روابط بین داده‌ها\n• پیاده‌سازی Queryها\n• اتصال Backend به Database\n• مدیریت داده‌های ساختاریافته و غیرساختاریافته\n• کار با ORM در صورت نیاز",
      ),
    ],
  },
  {
    title: text("Docker & Server Deployment", "Docker و استقرار روی سرور"),
    description: text(
      "Taking a project from development to the real environment",
      "رساندن پروژه از محیط توسعه به محیط واقعی",
    ),
    body: [
      text(
        "Project development does not end when the code runs on your system.",
        "توسعه پروژه زمانی تمام نمی‌شود که کد روی سیستم شما اجرا شود.",
      ),
      text(
        "In this part, the project is prepared for stable execution in a real environment; from Containerization with Docker to configuring services and running the application on a server.",
        "در این بخش پروژه برای اجرای پایدار در محیط واقعی آماده می‌شود؛ از Containerization با Docker تا تنظیم سرویس‌ها و اجرای برنامه روی سرور.",
      ),
      text(
        "I have also worked with tools such as PM2 and Jenkins for managing application execution and deployment processes.",
        "همچنین با ابزارهایی مانند PM2 و Jenkins برای مدیریت فرآیند اجرای برنامه و استقرار پروژه کار کرده‌ام.",
      ),
      text(
        "Outcome: a project that has left the development environment and is ready for real execution on a server.",
        "خروجی: پروژه‌ای که از محیط توسعه خارج شده و برای اجرای واقعی روی سرور آماده باشد.",
      ),
    ],
  },
  {
    title: text("Automation & Workflow", "اتوماسیون و Workflow"),
    description: text(
      "Removing repetitive work by connecting services",
      "حذف کارهای تکراری با اتصال سرویس‌ها به یکدیگر",
    ),
    body: [
      text(
        "Many manual processes can be automated by designing suitable Workflows.",
        "بسیاری از فرآیندهای دستی را می‌توان با طراحی Workflowهای مناسب خودکار کرد.",
      ),
      text(
        "Using tools such as n8n and Flowise, services, APIs, data, and AI capabilities can be connected in a defined process.",
        "با استفاده از ابزارهایی مانند n8n و Flowise می‌توان سرویس‌ها، APIها، داده‌ها و قابلیت‌های هوش مصنوعی را در یک فرآیند مشخص به یکدیگر متصل کرد.",
      ),
      text(
        "For example:\nData received → Processing → Sent to AI → Decision → Result stored → Output sent",
        "برای مثال:\nدریافت داده → پردازش → ارسال به AI → تصمیم‌گیری → ذخیره نتیجه → ارسال خروجی",
      ),
      text(
        "This type of automation can be used to reduce repetitive work, process information, and build intelligent processes.",
        "این نوع اتوماسیون می‌تواند برای کاهش کارهای تکراری، پردازش اطلاعات و ساخت فرآیندهای هوشمند استفاده شود.",
      ),
    ],
  },
  {
    title: text(
      "AI-Assisted Software Development",
      "توسعه نرم‌افزار با کمک هوش مصنوعی",
    ),
    description: text(
      "Develop faster, while keeping it engineered",
      "سریع‌تر توسعه بده؛ اما همچنان مهندسی‌شده",
    ),
    body: [
      text(
        "AI is not only a code-generation tool for me; it is part of the software development process.",
        "هوش مصنوعی برای من فقط یک ابزار تولید کد نیست؛ بخشی از فرآیند توسعه نرم‌افزار است.",
      ),
      text(
        "I use tools such as OpenAI, Gemini, Claude, Codex, and GitHub Copilot in parts of the development process; from problem analysis and reviewing solutions to generating, reviewing, and improving code.",
        "از ابزارهایی مانند OpenAI، Gemini، Claude، Codex و GitHub Copilot برای بخش‌هایی از فرآیند توسعه استفاده می‌کنم؛ از تحلیل مسئله و بررسی راه‌حل‌ها تا تولید، بازبینی و بهبود کد.",
      ),
      text(
        "The goal is not to replace engineering thinking with AI; it is to use it to increase speed, reduce repetitive work, and focus more on problem-solving and product architecture.",
        "هدف، جایگزین‌کردن تفکر مهندسی با AI نیست؛ بلکه استفاده از آن برای افزایش سرعت، کاهش کارهای تکراری و تمرکز بیشتر روی حل مسئله و معماری محصول است.",
      ),
    ],
  },
  {
    title: text(
      "Freelance Software Development",
      "توسعه نرم‌افزار به‌صورت فریلنسری",
    ),
    description: text(
      "Direct collaboration to build a solution suited to your needs",
      "همکاری مستقیم برای ساخت یک راهکار متناسب با نیاز شما",
    ),
    body: [
      text(
        "If you need a developer for your business or idea, I can work on your project as a freelance collaboration.",
        "اگر برای کسب‌وکار یا ایده خود به یک توسعه‌دهنده نیاز دارید، می‌توانم در قالب همکاری فریلنسری روی پروژه شما کار کنم.",
      ),
      text(
        "The collaboration can start with reviewing the idea and requirements and then continue through technology selection, technical structure design, development, testing, and product deployment.",
        "فرآیند همکاری می‌تواند از بررسی ایده و نیازمندی‌ها شروع شود و سپس به انتخاب تکنولوژی، طراحی ساختار فنی، توسعه، تست و استقرار محصول برسد.",
      ),
      text(
        "The collaboration can cover a complete project or a specific part of a product, such as Frontend, Backend, PWA, AI capabilities, or Database integration.",
        "همکاری می‌تواند برای یک پروژه کامل یا بخشی مشخص از یک محصول باشد؛ مانند توسعه Frontend، Backend، PWA، قابلیت‌های AI یا اتصال به دیتابیس.",
      ),
    ],
  },
];

export const servicesContent = {
  eyebrow: text("WHAT I DO", "خدمات من"),
  title: text("From first interface to final product.", "از اولین رابط تا محصول نهایی."),
  subtitle: text(
    "Flexible full-stack support for products that need thoughtful development and practical delivery.",
    "پشتیبانی منعطف فول‌استک برای محصولاتی که به توسعه دقیق و تحول عملی نیاز دارند.",
  ),
  ctaTitle: text("Need more than one service?", "فقط یک سرویس نمی‌خواهید؟"),
  ctaDescription: text(
    "We build a solution suited to your project.",
    "یک راهکار متناسب با پروژه شما می‌سازیم.",
  ),
  ctaBody: text(
    "Every project combines different needs. You may need a simple Frontend or a product that includes Frontend, Backend, Database, PWA, AI, and Deployment at the same time. If you are not sure which technology or architecture fits your project, start by sharing the problem and requirements so the right technical solution can be considered.",
    "هر پروژه ترکیبی از نیازهای متفاوت است. ممکن است به یک Frontend ساده نیاز داشته باشید یا محصولی که هم‌زمان شامل Frontend، Backend، Database، PWA، هوش مصنوعی و Deployment باشد. اگر هنوز دقیقاً نمی‌دانید چه تکنولوژی یا معماری‌ای برای پروژه‌تان مناسب است، می‌توانید ابتدا مسئله و نیازمندی‌ها را مطرح کنید تا راهکار فنی مناسب بررسی شود.",
  ),
  cta: text("Start a conversation ←", "شروع یک گفتگو ←"),
};
