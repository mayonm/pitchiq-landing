export const SITE = {
  name: "PitchIQ",
  tagline: "Change the game",
  description:
    "Objective strike-ball calls and pitch location mapping for practice.",
  url: "https://pitchiq.app",
};

export const ANNOUNCEMENT =
  "Change the game — join the waitlist today";

export const NAV_LINKS = [
  { label: "Product", href: "#product" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
];

export const HERO = {
  headline: "See every pitch. Predict the next one.",
  subheadline:
    "Objective strike-ball calls and pitch location mapping for every practice.",
  primaryCta: "Join the Waitlist",
  microcopy: "No credit card · Works on any phone",
  trustLine: "Change the game",
};

export const TRUST_LOGOS = [
  "Travel Ball",
  "High School",
  "Academy",
  "Showcase",
  "Bullpen",
];

export const PROBLEM = {
  label: "THE PROBLEM",
  title: "Your strike zone calls are slowing down practice",
  subtitle:
    "Coaches waste reps debating balls and strikes instead of developing pitchers and hitters.",
  cards: [
    {
      title: "Coach debate",
      text: '"Was that a strike?" — every close pitch stops the session.',
      position: "top-0 left-0 md:-left-4",
    },
    {
      title: "Manual logging",
      text: "Pitch location tracked in spreadsheets after practice ends.",
      position: "top-8 right-0 md:-right-4",
    },
    {
      title: "Parent questions",
      text: '"What was his strike percentage today?" — no data to share.',
      position: "bottom-0 left-4 md:left-8",
    },
    {
      title: "Inconsistent zone",
      text: "Strike zone shifts every session. Hitters can't adjust.",
      position: "bottom-8 right-4 md:right-8",
    },
  ],
};

export const HOW_IT_WORKS = {
  label: "MEET PITCHIQ",
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

export const CTA_BEATS = [
  "Start using PitchIQ at your next bullpen.",
  "Bring objective strike-zone calls to your next practice.",
];

export const METRICS = {
  label: "PERFORMANCE",
  items: [
    { value: "95%+", label: "Classification accuracy" },
    { value: "<200ms", label: "Inference latency" },
    { value: "10k+", label: "Pitches in training set" },
  ],
};

export const SOCIAL_PROOF = {
  label: "TRUSTED BY PROGRAMS",
  title: "Built for the teams that care about every rep",
  testimonials: [
    {
      quote:
        "We finally have consistent strike-zone feedback without arguing every close pitch. Practice moves faster.",
      name: "Coach Martinez",
      role: "Varsity Head Coach",
      org: "Westlake High School",
    },
    {
      quote:
        "The pitch prediction helps our hitters anticipate sequences. It's like having a scouting report in the cage.",
      name: "Coach Thompson",
      role: "Hitting Coordinator",
      org: "Summit Baseball Academy",
    },
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
  microcopy: "Change the game",
  placeholder: "Enter your email",
  button: "Notify me",
  successMessage: "You're on the list. We'll be in touch soon.",
};

export const FOOTER = {
  tagline: "Change the game",
  copyright: `© ${new Date().getFullYear()} PitchIQ. All rights reserved.`,
};
