import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rafli Ramadhani",
  initials: "RAP",
  url: "https://dillion.io",
  location: "Jakarta, Indonesia",
  locationLink: "https://www.google.com/maps/place/jakarta",
  description:
    "a Fullstack Developer who turns complex systems into elegant digital experiences.",
  summary: `From building WebGIS applications to optimizing national-scale financial systems, I’ve grown into a problem-solver at the intersection of technology and impact, with hands-on experience in Angular 18, .NET Core, and Laravel. What began as simple curiosity about how systems interact has evolved into a passion for creating integrated, secure, and data-driven applications, supported by a mindset that values collaboration, continuous learning, and building technology that genuinely makes life easier.`,
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/zendParadox",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rafliramadhanii/",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "raflirama7446@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "BPJS Kesehatan",
      href: "https://www.bpjs-kesehatan.go.id/",
      badges: [],
      location: "Onsite - Jakarta, Indonesia",
      title: "Fullstack Developer",
      logoUrl: "/bpjs-kesehatan.png",
      start: "Sep 2024",
      end: "Present (1.3 Years)",
      description:
        "At BPJS Kesehatan, I worked as a Fullstack Developer responsible for building and enhancing internal accounting and actuarial systems. I developed responsive user interfaces using Angular 18, implemented scalable microservices with .NET Core, optimized system performance, and strengthened application security. I collaborated closely with cross-functional teams to ensure smooth integration, accurate data flow, and alignment with business needs.",
    },
    {
      company: "BAPSI Universitas Serang Raya",
      badges: [],
      href: "https://unsera.ac.id/",
      location: "Remote",
      title: "Frontend Developer (Internship)",
      logoUrl: "/unsera.png",
      start: "June",
      end: "Sept 2023 (3 Months)",
      description:
        "During my internship at BAPSI Universitas Serang Raya, I worked as a Frontend Developer responsible for redesigning and modernizing the university’s main website. I built responsive interfaces using HTML, CSS, and Bootstrap, integrated API endpoints for dynamic content, and collaborated with the Humas team and backend developers to align the site’s features with institutional needs. I also performed routine maintenance to ensure the website remained functional, accessible, and up to date.",
    },
    {
      company: "PT Abbauf Mulia Konsultan Teknologi",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Frontend Developer (Internship)",
      logoUrl: "/abbauf.jpeg",
      start: "Aug",
      end: "Dec 2022 (6 Months)",
      description:
        "During my internship at PT Abbauf Mulia Konsultan Teknologi, I worked as a Frontend Developer focused on building responsive and interactive WebGIS applications. I collaborated with the development team to translate project requirements into functional interfaces, implemented geospatial visualizations using OpenLayers, and integrated data from APIs and databases to deliver accurate, real-time map-based information. I also coordinated with backend developers to ensure smooth data flow and a seamless user experience across the platform.",
    },
  ],
  education: [
    {
      school: "Universitas Serang Raya",
      href: "https://unsera.ac.id/",
      degree: "S1 Teknik Informatika",
      logoUrl: "/unsera.png",
      start: "2020",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Nihongo Master",
      href: "https://nihongo-master-ecru.vercel.app/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Nihongo Master is a research-based Japanese learning platform built with Next.js, featuring spaced repetition, interactive lessons, and animated flashcards to help users prepare effectively for the JLPT.",
      technologies: [
        "Next.js",
        "Typescript",
        "React",
        "TailwindCSS",
        "Shadcn UI",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://nihongo-master-ecru.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/zendParadox/nihongo-master",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/projects/nihongo-master2.mp4",
    },
    {
      title: "SIAKTIF - Sistem Informasi Akuntansi Keuangan Terintegrasi",
      href: "",
      dates: "June 2023 - Present",
      active: true,
      description:
        "SIAKTIF is an enterprise-grade accounting and actuarial web application built with Angular 18, offering financial reporting, IBNR analysis, and multi-format export tools within a scalable, secure admin dashboard.",
      technologies: [
        "Angular",
        ".NET Core",
        "Typescript",
        "SQL Server",
        "TailwindCSS",
        "Angular Material",
      ],
      links: [
        {
          type: "Website",
          href: "https://siaktif.bpjs-kesehatan.go.id/siaktif/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/siaktif.png",
      video: "",
    },
    {
      title: "GoTEK",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "GoTEK is a personal finance tracker that lets users record transactions via WhatsApp and visualize their spending through a modern web dashboard powered by Next.js and PostgreSQL.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://fe-whatsapp-bot.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/zendParadox/fe-whatsapp-bot",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/zendParadox/whatsapp-bot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/projects/gotek.mp4",
    },
    {
      title: "Kopi Senja",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Kopi Senja is a modern, animation-rich landing page for a fictional coffee brand, built with Next.js, Tailwind, and GSAP to create an immersive and visually expressive brand experience.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/projects/kopi-senja.mp4",
    },
  ],
  hackathons: [
    {
      title: "Cyber Security - Professional Academy",
      dates: "November 2024",
      location: "Digital Talent Scholarship, Kominfo",
      description:
        "Completed an intensive program covering network security, ethical hacking, SIEM, cloud security fundamentals, and risk management.",
      image: "/digitalent.png",
      links: [],
    },
    {
      title: "IT Support - Fresh Graduate Academy",
      dates: "April 2024 - July 2024",
      location: "Digital Talent Scholarship, Kominfo",
      description:
        "Gained foundational IT support skills including networking, system administration, troubleshooting, and operating systems (Windows & Linux).",
      image: "/digitalent.png",
      links: [],
    },
    {
      title: "Machine Learning Cohort",
      dates: "February 2023 - July 2023",
      location: "Bangkit Academy led by Google, Tokopedia, Gojek & Traveloka",
      description:
        "Hands-on experience building machine learning models for image classification and NLP, including data preprocessing, feature engineering, and model evaluation.",
      image: "/bangkit.jpg",
      links: [],
    },
  ],
} as const;
