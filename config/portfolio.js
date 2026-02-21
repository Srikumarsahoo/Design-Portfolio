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
      description: "A comprehensive financial analytics dashboard built for enterprise clients, featuring real-time data visualization.",
      link: "#",

      // ── Case Study Data ──────────────────────────────────────
      overview: {
        role: "Lead UI/UX Designer",
        timeline: "8 Weeks · Jan – Mar 2025",
        tools: ["Figma", "FigJam", "Notion", "Zeplin"],
        team: "Solo designer alongside 2 front-end developers & 1 PM",
      },
      problem: {
        challenge: "Enterprise finance teams were drowning in data. The existing dashboard was a cluttered spreadsheet-style layout that required hours of training and caused decision fatigue among senior analysts.",
        audience: "Senior financial analysts and C-suite executives at mid-to-large enterprises.",
        goals: [
          "Reduce time-to-insight from 15 minutes to under 2 minutes",
          "Create a scalable design system for the engineering team",
          "Achieve a SUS (System Usability Scale) score above 80",
        ],
      },
      process: [
        {
          title: "Research & Discovery",
          description: "Conducted 12 user interviews with finance analysts across 4 companies. Key finding: users spent 60% of their time just hunting for the right chart — not analyzing it. Competitor audit of 6 tools revealed a clear gap in contextual data storytelling.",
          image: "/images/projects/project-1-process-1.png",
        },
        {
          title: "Ideation & Wireframing",
          description: "Ran a 2-day design sprint. Sketched 40+ layouts, narrowed to 3 concepts via dot-voting with stakeholders. The winning concept used a 'command center' metaphor — one glanceable hero metric zone with drill-down panels below.",
          image: "/images/projects/project-1-process-2.png",
        },
        {
          title: "Challenges Overcome",
          description: "Usability testing Round 1 revealed users ignored the left sidebar entirely. Pivoted to a top-tab architecture and relocated key filters to a persistent floating toolbar. Round 2 testing showed a 40% improvement in task completion speed.",
          image: "/images/projects/project-1-process-3.png",
        },
      ],
      solution: {
        description: "A modular, widget-based dashboard with a unified design system of 120+ components. Users can drag, resize, and save custom layout presets. Dark and light modes included.",
        images: [
          "/images/projects/project-1-solution-1.png",
          "/images/projects/project-1-solution-2.png",
          "/images/projects/project-1-solution-3.png",
          "/images/projects/project-1-solution-4.png",
        ],
        highlights: [
          "Sticky command bar for zero-hunt navigation",
          "Color-coded anomaly detection cards",
          "One-click export to PDF reports",
        ],
      },
      results: {
        metrics: [
          { value: "73%", label: "Faster time-to-insight" },
          { value: "91", label: "SUS usability score" },
          { value: "4.8★", label: "Beta user rating" },
        ],
        feedback: "\"This redesign completely changed how our team starts the morning. We cut our daily briefing prep from 45 minutes to under 10.\"",
        feedbackAuthor: "— CFO, Series B Fintech Startup",
        deliverables: ["120-component Figma design system", "Interactive prototype", "Developer handoff via Zeplin", "Usability test report"],
      },
      reflection: {
        learned: "I underestimated how emotionally attached finance teams are to their existing (broken) workflows. Change management is a UX problem too — designing the onboarding flow was just as critical as designing the dashboard itself.",
        doingDifferently: "I would invest more time in diary studies to understand the full weekly workflow, not just single-session tasks. Some pain points only surface over days of use.",
      },
    },

    {
      id: 2,
      title: "Homerly Real Estate",
      category: "Web App · UI/UX Design",
      tags: ["Web App", "UI/UX Design"],
      coverImage: "/images/projects/project-2.png",
      description: "Modern real estate platform with property discovery, virtual tours, and seamless booking experience.",
      link: "#",

      overview: {
        role: "Product Designer (End-to-End)",
        timeline: "6 Weeks · Mar – Apr 2025",
        tools: ["Figma", "Maze", "Miro", "Lottiefiles"],
        team: "Collaborated with 1 developer and a real estate domain expert",
      },
      problem: {
        challenge: "Home buyers were abandoning property search platforms mid-funnel because of information overload, poor photo quality presentation, and a checkout process that felt like filing tax returns.",
        audience: "First-time home buyers aged 26–40 and real estate agents managing multiple listings.",
        goals: [
          "Increase property inquiry conversion rate by 30%",
          "Reduce average search-to-shortlist time",
          "Build trust through transparent property data display",
        ],
      },
      process: [
        {
          title: "Research & Discovery",
          description: "Surveyed 80 recent home buyers. Top frustration: 'I can never tell what the neighborhood actually feels like from photos.' This insight drove the decision to prioritize immersive visual experiences over data tables.",
          image: "/images/projects/project-2-process-1.png",
        },
        {
          title: "Ideation & Wireframing",
          description: "Mapped a 7-step user journey from 'browsing' to 'booked viewing.' Created 3 low-fidelity prototypes tested with 15 users on Maze. The 'magazine layout' card style won by a significant margin over traditional list views.",
          image: "/images/projects/project-2-process-2.png",
        },
        {
          title: "Challenges Overcome",
          description: "The virtual tour feature was originally planned as a 360° video embed — but load times were unacceptable on mobile. Pivoted to an AI-powered image slideshow with hotspot annotations. Users rated it equally immersive at a fraction of the bandwidth.",
          image: "/images/projects/project-2-process-3.png",
        },
      ],
      solution: {
        description: "A visually rich, full-screen property discovery experience. Listings lead with cinematic hero photography, neighborhood score cards, and a one-tap 'Book a Viewing' CTA that saves to calendar automatically.",
        images: [
          "/images/projects/project-2-solution-1.png",
          "/images/projects/project-2-solution-2.png",
          "/images/projects/project-2-solution-3.png",
          "/images/projects/project-2-solution-4.png",
        ],
        highlights: [
          "Full-bleed cinematic property photography",
          "Neighborhood 'vibe score' using local data",
          "Frictionless 3-step booking flow",
        ],
      },
      results: {
        metrics: [
          { value: "38%", label: "Higher inquiry conversion" },
          { value: "2.4x", label: "More listings shortlisted" },
          { value: "52%", label: "Drop in bounce rate" },
        ],
        feedback: "\"We went from losing users at the listing page to them spending an average of 8 minutes exploring a single property. That's unheard of in our industry.\"",
        feedbackAuthor: "— Head of Product, Homerly",
        deliverables: ["End-to-end Figma prototype", "Component library", "Mobile-responsive designs", "Interaction specs"],
      },
      reflection: {
        learned: "Trust is a design element. Every micro-copy choice — from 'Verified Listing' badges to 'No hidden fees' disclaimers — meaningfully reduced user anxiety and increased action rates.",
        doingDifferently: "I would prototype the map search interaction earlier. It became a scope creep battleground late in the project that could have been resolved in Week 2 with a quick paper prototype.",
      },
    },

    {
      id: 3,
      title: "Cluva Learning Platform",
      category: "Edtech · Mobile Design",
      tags: ["Edtech", "Mobile Design"],
      coverImage: "/images/projects/project-3.png",
      description: "Interactive e-learning platform designed to make education accessible and engaging for global learners.",
      link: "#",

      overview: {
        role: "UX Designer & Design System Lead",
        timeline: "10 Weeks · May – Jul 2025",
        tools: ["Figma", "ProtoPie", "Notion", "Hotjar"],
        team: "Team of 3 designers, 4 engineers, and an instructional design consultant",
      },
      problem: {
        challenge: "Existing e-learning apps had course completion rates below 12%. Learners started with excitement but dropped off within 3 days due to passive, video-heavy content and zero sense of progress.",
        audience: "Self-directed adult learners aged 20–35 pursuing skills for career growth, primarily in emerging markets.",
        goals: [
          "Increase 30-day course completion rate above 40%",
          "Design an engagement loop that builds daily learning habits",
          "Make the app feel motivating, not overwhelming",
        ],
      },
      process: [
        {
          title: "Research & Discovery",
          description: "Analyzed dropout data from 10,000 user sessions. 78% of users quit within the first 3 lessons. Exit interviews revealed the real reason: they didn't feel any sense of momentum. This reframed our design challenge from 'make content better' to 'make progress visible and rewarding.'",
          image: "/images/projects/project-3-process-1.png",
        },
        {
          title: "Ideation & Wireframing",
          description: "Drew inspiration from habit-tracking apps and games, not traditional LMS tools. Designed a 'learning streak' system, XP points, and bite-sized 5-minute lesson modules. Wireframed 60+ screens across onboarding, lesson, quiz, and achievement flows.",
          image: "/images/projects/project-3-process-2.png",
        },
        {
          title: "Challenges Overcome",
          description: "Our gamification system initially felt patronizing to older learners. Post-test feedback: 'I'm not a child, I don't need stars.' Redesigned the system to be optional and professional — rebranding XP as 'Mastery Points' and streaks as 'Learning Momentum.' Approval ratings jumped from 54% to 88%.",
          image: "/images/projects/project-3-process-3.png",
        },
      ],
      solution: {
        description: "A mobile-first learning app built around a daily 'Learning Sprint' — a personalized 15-minute session that adapts to the user's pace and schedule. Progress feels tangible with path maps, skill graphs, and celebration moments.",
        images: [
          "/images/projects/project-3-solution-1.png",
          "/images/projects/project-3-solution-2.png",
          "/images/projects/project-3-solution-3.png",
          "/images/projects/project-3-solution-4.png",
        ],
        highlights: [
          "Adaptive daily learning sprints",
          "Visual skill mastery path maps",
          "Peer learning rooms for accountability",
        ],
      },
      results: {
        metrics: [
          { value: "44%", label: "Course completion rate" },
          { value: "3.1x", label: "Increase in daily sessions" },
          { value: "89%", label: "User satisfaction score" },
        ],
        feedback: "\"Cluva is the first learning app that actually made me feel like I was making progress. I finished my first course in 3 weeks — I'd never done that before.\"",
        feedbackAuthor: "— Beta Tester, Lagos",
        deliverables: ["Full mobile app design (iOS & Android)", "Design system with 200+ components", "Onboarding flow", "ProtoPie micro-interaction specs"],
      },
      reflection: {
        learned: "Motivation is deeply personal. What feels rewarding to one user feels condescending to another. Designing flexible, opt-in engagement systems is far more inclusive than one-size-fits-all gamification.",
        doingDifferently: "I would run longitudinal usability tests over 2+ weeks rather than single-session tests. Habit-forming features simply can't be evaluated in a 45-minute lab session.",
      },
    },

    {
      id: 4,
      title: "Trusten M-Banking",
      category: "Fintech · UI System",
      tags: ["Fintech", "UI System"],
      coverImage: "/images/projects/project-4.png",
      description: "Mobile banking app redesign focused on simplicity, trust, and seamless financial management.",
      link: "#",

      overview: {
        role: "Senior UI Designer & Brand Identity",
        timeline: "5 Weeks · Aug – Sep 2025",
        tools: ["Figma", "Principle", "Adobe Illustrator", "Zeplin"],
        team: "Solo designer embedded with a team of 3 engineers",
      },
      problem: {
        challenge: "Users described the existing banking app as 'scary' and 'confusing.' A redesign was needed that would rebuild trust, simplify complex financial actions, and compete with modern neo-bank challengers like Revolut and N26.",
        audience: "Everyday banking customers aged 22–55, with varying levels of financial and tech literacy.",
        goals: [
          "Reduce support tickets related to UI confusion by 50%",
          "Redesign the transfer flow to under 4 taps",
          "Create a visual identity that communicates security and modernity",
        ],
      },
      process: [
        {
          title: "Research & Discovery",
          description: "Audited 6 months of support tickets — 34% were related to the money transfer flow alone. Benchmarked 8 competitor apps. Ran card sorting sessions with 20 users to restructure the navigation architecture from scratch.",
          image: "/images/projects/project-4-process-1.png",
        },
        {
          title: "Ideation & Wireframing",
          description: "Designed 4 navigation concepts: bottom tab, gesture-based, card stack, and hybrid. User testing with paper prototypes showed the hybrid bottom-tab-plus-quick-action model had the fastest task completion times across all age groups.",
          image: "/images/projects/project-4-process-2.png",
        },
        {
          title: "Challenges Overcome",
          description: "Security-first banking requirements meant we couldn't use many modern UX patterns (e.g., biometric bypass for large transfers). Worked closely with the compliance team to design secure flows that still felt smooth — using progressive disclosure to show legal text only when needed, not upfront.",
          image: "/images/projects/project-4-process-3.png",
        },
      ],
      solution: {
        description: "A clean, confident banking UI with a deep navy and lime accent palette. The redesigned transfer flow takes 3 taps. A 'Money Health' home screen gives users an instant snapshot of their financial wellbeing without overwhelming them.",
        images: [
          "/images/projects/project-4-solution-1.png",
          "/images/projects/project-4-solution-2.png",
          "/images/projects/project-4-solution-3.png",
          "/images/projects/project-4-solution-4.png",
        ],
        highlights: [
          "3-tap money transfer flow",
          "Money Health dashboard widget",
          "Accessible contrast ratios (WCAG AA)",
        ],
      },
      results: {
        metrics: [
          { value: "61%", label: "Fewer UI-related tickets" },
          { value: "3 taps", label: "Average transfer flow" },
          { value: "4.9★", label: "App store rating (post-launch)" },
        ],
        feedback: "\"Our App Store rating went from 2.8 to 4.9 in 60 days after launch. The redesign wasn't just cosmetic — it fundamentally changed how customers felt about our brand.\"",
        feedbackAuthor: "— CEO, Trusten Financial",
        deliverables: ["Full iOS app redesign (80+ screens)", "Brand identity refresh", "Component library", "Accessibility audit report"],
      },
      reflection: {
        learned: "In regulated industries, constraints are your best creative brief. Working within compliance rules forced me to find elegant solutions I wouldn't have discovered with unlimited freedom.",
        doingDifferently: "I would involve the compliance and legal team from Day 1, not Week 4. Their input reshaped 3 major flows and would have saved significant rework time.",
      },
    },
  ],
};
