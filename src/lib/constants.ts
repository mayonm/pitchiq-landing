export const SITE = {
  name: "PitchIQ",
  tagline: "AI-powered strike zone and pitch intelligence for high school baseball",
  description:
    "AI strike/ball detection and pitch location prediction built for high school baseball practice.",
  url: "https://pitchiq.app",
};

export const NAV_LINKS = [
  { label: "Product", href: "#product" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
];

export const HERO = {
  headline: "See every pitch. Predict the next one.",
  subheadline: SITE.description,
  primaryCta: "Join the Waitlist",
  secondaryCta: "See how it works",
};

export const HOW_IT_WORKS = {
  title: "How PitchIQ works",
  subtitle: "From bullpen to insights in three steps",
  steps: [
    {
      number: "01",
      title: "Capture",
      description:
        "Film bullpen or practice from any angle. PitchIQ works with standard phone or camera footage.",
      icon: "camera" as const,
    },
    {
      number: "02",
      title: "Analyze",
      description:
        "Our ABS model classifies strike or ball and maps pitch location in real time with objective precision.",
      icon: "target" as const,
    },
    {
      number: "03",
      title: "Predict",
      description:
        "AI forecasts the next pitch type and location so hitters can anticipate and coaches can plan sequences.",
      icon: "brain" as const,
    },
  ],
};

export const FEATURES = {
  abs: {
    badge: "ABS Model",
    title: "Automated Ball-Strike detection you can trust",
    description:
      "Our ABS model is trained on pitch trajectory and zone boundaries to deliver consistent, objective calls during practice — no umpire debate, no guesswork.",
    bullets: [
      "Real-time strike/ball classification",
      "Precise pitch location mapping",
      "Objective calls for every rep",
    ],
  },
  prediction: {
    badge: "Pitch Prediction",
    title: "Know what's coming before it's thrown",
    description:
      "PitchIQ analyzes pitch sequences to predict the next location, helping hitters sharpen their approach and coaches design smarter bullpen sessions.",
    bullets: [
      "Sequence-based location forecasting",
      "Heatmap visualization of likely zones",
      "Built for hitter preparation",
    ],
  },
  pills: [
    "Practice-first design",
    "Built for high school teams",
    "Free to use",
  ],
};

export const METRICS = [
  {
    value: "95%+",
    label: "Strike/ball classification accuracy",
  },
  {
    value: "<200ms",
    label: "Inference latency",
  },
  {
    value: "10k+",
    label: "Pitches in training set",
  },
];

export const TEAM = {
  title: "Meet the team",
  subtitle: "Built by baseball people who love building software",
  members: [
    {
      name: "Alex Chen",
      role: "Co-founder",
      bio: "Former varsity pitcher. Leads product vision and team outreach.",
      initials: "AC",
      linkedin: "#",
    },
    {
      name: "Jordan Rivera",
      role: "ML Engineer",
      bio: "Trained the ABS and pitch prediction models from the ground up.",
      initials: "JR",
      linkedin: "#",
    },
    {
      name: "Sam Patel",
      role: "Baseball Ops",
      bio: "High school coach who shaped PitchIQ around real practice workflows.",
      initials: "SP",
      linkedin: "#",
    },
    {
      name: "Taylor Kim",
      role: "Co-founder",
      bio: "Full-stack engineer focused on making PitchIQ fast and accessible.",
      initials: "TK",
      linkedin: "#",
    },
  ],
};

export const FAQ_ITEMS = [
  {
    question: "Is PitchIQ free?",
    answer:
      "Yes. PitchIQ is free for high school baseball teams. We believe every program deserves access to modern practice tools, regardless of budget.",
  },
  {
    question: "Who is PitchIQ for?",
    answer:
      "PitchIQ is built for high school baseball teams — coaches running bullpen sessions, hitters preparing at the plate, and programs looking for objective strike-zone feedback during practice.",
  },
  {
    question: "How does the ABS model work?",
    answer:
      "Our Automated Ball-Strike model analyzes pitch trajectory from video footage and classifies each pitch against the strike zone boundary. It maps exact pitch location and delivers a strike or ball call in real time.",
  },
  {
    question: "Can we use this in games or only practice?",
    answer:
      "PitchIQ is designed primarily for practice — bullpens, live BP, and training sessions. It is not intended to replace official umpires during games.",
  },
  {
    question: "When will the software be available?",
    answer:
      "We are actively building PitchIQ and onboarding early-access teams. Join the waitlist to be among the first to try it when we launch.",
  },
];

export const WAITLIST = {
  title: "Get early access to PitchIQ",
  subtitle:
    "Join the waitlist and be the first to bring AI-powered pitch intelligence to your team.",
  placeholder: "Enter your email",
  button: "Notify me",
  successMessage: "You're on the list! We'll be in touch soon.",
};

export const FOOTER = {
  tagline: "Built for high school baseball",
  copyright: `© ${new Date().getFullYear()} PitchIQ. All rights reserved.`,
};
