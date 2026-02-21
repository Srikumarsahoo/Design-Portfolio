// ============================================================
// 🎨 PORTFOLIO CONFIGURATION — Edit this file to customize!
// ============================================================

export const config = {
  // ── Personal Info ──────────────────────────────────────────
  name: "Srikumar Sahoo",
  role: "UI/UX Designer",
  tagline: "passionate about creating intuitive digital experiences that connect users with value.",
  email: "srikumarsgetspace@gmail.com",
  availability: true, // Toggle "Available for opportunities" badge
  availabilityText: "Available for new opportunities",

  // ── Hero Avatar ────────────────────────────────────────────
  // Replace with your own image in /public/images/hero.png
  heroImage: "/images/Hero.jpg",

  // ── Social Links ───────────────────────────────────────────
  social: {
    linkedin: "https://www.linkedin.com/in/srikumar-sahoo-90094b2a9/",
    dribbble: "https://dribbble.com/srikumarsgetspace?apply_modal=true",
    behance: "https://www.behance.net/Srikumar_Sahoo",
    twitter: "https://x.com/Srikumarsaho",
    github: "https://x.com/Srikumarsaho",
  },

  // ── Stats ──────────────────────────────────────────────────
  stats: {
    clients: "1200+",
    clientsLabel: "happy clients",
    description: "across residential and commercial projects.",
  },

  // ── Brand Logos (Clients / Tools) ──────────────────────────
  // Add/remove companies you've worked with or tools you use
  brands: [
    "FocalPoint",
    "Screentime",
    "Segment",
    "Shutterframe",
    "Lightspeed",
    "Masterclass",
    "FocalPoint",
    "Screentime",
    "Segment",
    "Shutterframe",
  ],

  // ── About Section ──────────────────────────────────────────
  about: {
    headline: "focus is on blending clear strategy, thoughtful design, and user empathy to",
    highlight: "craft experiences that solve real problems",
    skills: [
      { label: "Product Design", color: "orange" },
      { label: "UX Design", color: "blue" },
      { label: "User Research", color: "purple" },
      { label: "Design Systems", color: "green" },
      { label: "Usability Testing", color: "pink" },
      { label: "Brand Identity", color: "teal" },
    ],
  },

  // ── Process Steps ──────────────────────────────────────────
  process: [
    {
      number: "01",
      title: "Discover",
      description:
        "Understanding your goals, users, and challenges through research and strategy.",
    },
    {
      number: "02",
      title: "Design",
      description:
        "Translating insights into intuitive, beautiful, and functional product experiences.",
    },
    {
      number: "03",
      title: "Deliver",
      description:
        "Testing, refining, and launching the final product with clarity and precision.",
    },
  ],

  // ── Testimonials ───────────────────────────────────────────
  testimonials: [
    {
      quote:
        "Working with them was seamless from start to finish. They understood our goals quickly, asked the right questions, and delivered a design system that scaled perfectly with our growing modern SaaS app.",
      name: "Daniel Reed",
      role: "Founder of FormLabs",
      avatar: "/images/testimonial-1.jpg", // add your own or use initials
    },
    {
      quote:
        "They brought our product vision to life with incredible attention to detail. An ability to balance aesthetics and functionality made our platform not just beautiful — but genuinely useful.",
      name: "Sarah Nguyen",
      role: "Product Manager at Paraflex",
      avatar: "/images/testimonial-2.jpg",
    },
  ],

  // ── Projects ───────────────────────────────────────────────
  // Add your project images to /public/images/projects/
  // coverImage: path relative to /public
  projects: [
    {
      id: 1,
      title: "Finvera Dashboard",
      category: "Fintech · Product Design",
      tags: ["Fintech", "Product Design"],
      coverImage: "/images/projects/project-1.png",
      description:
        "A comprehensive financial analytics dashboard built for enterprise clients, featuring real-time data visualization.",
      link: "#",
    },
    {
      id: 2,
      title: "Homerly Real Estate",
      category: "Web App · UI/UX Design",
      tags: ["Web App", "UI/UX Design"],
      coverImage: "/images/projects/project-2.png",
      description:
        "Modern real estate platform with property discovery, virtual tours, and seamless booking experience.",
      link: "#",
    },
    {
      id: 3,
      title: "Cluva Learning Platform",
      category: "Edtech · Mobile Design",
      tags: ["Edtech", "Mobile Design"],
      coverImage: "/images/projects/project-3.png",
      description:
        "Interactive e-learning platform designed to make education accessible and engaging for global learners.",
      link: "#",
    },
    {
      id: 4,
      title: "Trusten M-Banking",
      category: "Fintech · UI System",
      tags: ["Fintech", "UI System"],
      coverImage: "/images/projects/project-4.png",
      description:
        "Mobile banking app redesign focused on simplicity, trust, and seamless financial management.",
      link: "#",
    },
  ],
};
