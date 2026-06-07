export const SITE = {
  name: "PitchIQ",
  tagline: "Strike-zone intelligence for high school baseball",
  description:
    "Objective strike-ball calls and pitch location mapping for practice.",
  url: "https://pitchiq.app",
};

export const NAV_LINKS = [
  { label: "Product", href: "#product" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
];

export const HERO = {
  eyebrow: "Free for high school teams",
  headline: "See every pitch. Predict the next one.",
  subheadline: SITE.description,
  primaryCta: "Join the Waitlist",
  secondaryCta: "See how it works",
};

export const HOW_IT_WORKS = {
  label: "PROCESS",
  title: "How PitchIQ works",
  subtitle: "From bullpen to insights in three steps",
  steps: [
    {
      number: "01",
      title: "Capture",
      description:
        "Film bullpen or practice from any angle with a phone or camera.",
    },
    {
      number: "02",
      title: "Analyze",
      description:
        "The ABS model calls strike or ball and maps location in real time.",
    },
    {
      number: "03",
      title: "Predict",
      description:
        "Predict the next pitch location from sequence patterns.",
    },
  ],
};

export const FEATURES = {
  abs: {
    label: "ABS MODEL",
    title: "Automated Ball-Strike detection you can trust",
    description:
      "Trained on pitch trajectory and zone boundaries, the ABS model delivers consistent, objective calls during practice — no umpire debate, no guesswork.",
    detail:
      "Real-time strike-ball classification, precise location mapping, and objective calls on every rep.",
  },
  prediction: {
    label: "PITCH PREDICTION",
    title: "Know what's coming before it's thrown",
    description:
      "PitchIQ reads pitch sequences to forecast the next location — helping hitters prepare and coaches plan smarter bullpen sessions.",
    detail:
      "Sequence-based forecasting, zone heatmaps, and location predictions built for hitter preparation.",
  },
};

export const METRICS = {
  label: "PERFORMANCE",
  title: "Built on real data",
  items: [
    { value: "95%+", label: "Classification accuracy" },
    { value: "<200ms", label: "Inference latency" },
    { value: "10k+", label: "Pitches in training set" },
  ],
};

export const TEAM = {
  label: "TEAM",
  title: "Meet the team",
  subtitle: "The team building PitchIQ",
  members: [
    {
      name: "Samuel Dickter",
      role: "Co-founder",
      bio: "",
      initials: "SD",
      linkedin: "https://www.linkedin.com/in/samuel-dickter/",
    },
    {
      name: "Mayon Mageswaran",
      role: "Co-founder",
      bio: "",
      initials: "MM",
      linkedin: "https://www.linkedin.com/in/mayonmageswaran/",
    },
  ],
};

export const FAQ_ITEMS = [
  {
    question: "Is PitchIQ free?",
    answer:
      "Yes. PitchIQ is free for high school baseball teams. Every program deserves access to modern practice tools.",
  },
  {
    question: "Who is PitchIQ for?",
    answer:
      "High school baseball teams — coaches running bullpen sessions, hitters preparing at the plate, and programs that want objective strike-zone feedback during practice.",
  },
  {
    question: "How does the ABS model work?",
    answer:
      "The Automated Ball-Strike model analyzes pitch trajectory from video and classifies each pitch against the strike zone. It maps exact location and delivers a strike or ball call in real time.",
  },
  {
    question: "Can we use this in games or only practice?",
    answer:
      "PitchIQ is built for practice — bullpens, live BP, and training sessions. It is not intended to replace official umpires during games.",
  },
  {
    question: "When will the software be available?",
    answer:
      "We are actively building PitchIQ and onboarding early-access teams. Join the waitlist to be first when we launch.",
  },
];

export const WAITLIST = {
  title: "Get early access to PitchIQ",
  subtitle:
    "Join the waitlist and be the first to bring pitch intelligence to your team.",
  placeholder: "Enter your email",
  button: "Notify me",
  successMessage: "You're on the list. We'll be in touch soon.",
};

export const FOOTER = {
  tagline: "Built for high school baseball",
  copyright: `© ${new Date().getFullYear()} PitchIQ. All rights reserved.`,
};
