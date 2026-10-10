export interface AppInfo {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  color: string;
  gradient: string;
  icon: string;
  iconImage?: string;
  status: "Available" | "Coming Soon" | "In Development" | "Planned";
  features: string[];
  appStoreUrl?: string;
}

export const apps: AppInfo[] = [
  {
    slug: "passit",
    name: "PassIt",
    tagline: "Give freely. Live lightly.",
    description:
      "A private household item giveaway app. Snap a photo, share with your circle, and pass things on to people who actually need them.",
    longDescription:
      "PassIt makes it effortless to give away things you no longer need to people in your trusted circle. Powered by Claude Vision for smart item recognition, PassIt lets you snap a photo, add a quick description, and share with your private group. No marketplace haggling, no strangers at your door — just simple, joyful giving within your community.",
    color: "#E8430E",
    gradient: "linear-gradient(135deg, #FF6B35, #F7C948)",
    icon: "🎁",
    status: "Coming Soon",
    features: [
      "AI-powered item recognition via Claude Vision",
      "Private circles for trusted sharing",
      "One-tap photo listing",
      "Zero waste philosophy",
      "Simple claim & pickup coordination",
      "No ads, no marketplace fees",
    ],
  },
  {
    slug: "me",
    name: "Me",
    tagline: "Say it as it is.",
    description:
      "A voice-first private diary for iPhone. Just talk, and Me turns your words into diary entries, activities, tasks, and ideas, saved only after you review them.",
    longDescription:
      "Me is a private space for noticing and remembering your life as it happens. Talk for as long as you like: your words are transcribed on your iPhone, and audio is never recorded or kept. Me's AI then sorts what you said into clear, editable proposals, such as an activity and how long it took, a feeling, a task with a deadline, or a passing idea. Nothing enters your diary until you review it and tap save. Your diary syncs through your own private iCloud, so there's no account to create. You can search it on your device, see where your time goes, and ask grounded questions about your day or week, with every answer linked back to your own entries.",
    color: "#D65343",
    gradient: "linear-gradient(135deg, #37304F, #D65343)",
    icon: "🎙️",
    iconImage: "/apps/me-icon.png",
    status: "In Development",
    features: [
      "Speak freely, transcribed on your iPhone, no audio ever stored",
      "AI turns one long ramble into separate, editable entries",
      "Nothing is saved until you review and confirm",
      "Capture from anywhere: Siri, Action Button, widgets, Control Center",
      "Unsaved words survive interruptions, cancels, and relaunches",
      "Diary, activity insights, and a workbench for tasks and ideas",
      "Private iCloud sync with on-device search",
      "AI routed only to providers that don't retain or train on your words",
    ],
  },
  {
    slug: "stylemate",
    name: "StyleMate",
    tagline: "Your wardrobe, styled.",
    description:
      "An AI stylist for the clothes you already own. Photograph your wardrobe once, pick one piece each morning, and StyleMate builds three complete outfits around it.",
    longDescription:
      "StyleMate is a personal stylist that works only with what's already in your closet. Photograph each piece once: the background is removed on your iPhone, and AI tags its category, colors, pattern, formality, and season for you. Each morning, choose the piece you want to wear, whether it's a favorite jacket or a new pair of shoes, and StyleMate suggests three complete outfits built around it, each with a short note on why it works. Set the occasion, from casual to formal, and rate each suggestion so it learns your taste over time. Log what you wear, and StyleMate remembers, so the same look doesn't come back too soon.",
    color: "#C2654A",
    gradient: "linear-gradient(135deg, #C2654A, #B85439)",
    icon: "👗",
    iconImage: "/apps/stylemate-icon.png",
    status: "In Development",
    features: [
      "Pick one piece, get three complete outfits with reasons",
      "Snap a piece once, background removed on your iPhone",
      "AI tags category, colors, pattern, formality, and season",
      "Occasions from casual and work to date night and formal",
      "A short style quiz tunes suggestions from day one",
      "Thumbs up or down, and it learns what you like",
      "Outfit history calendar that steers you away from repeats",
      "Batch add: photograph several pieces in a single shot",
    ],
  },
];

export const navLinks = [
  { label: "Products", href: "/#products" },
  { label: "Our Story", href: "/#our-story" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
