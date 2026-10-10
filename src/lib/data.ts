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
    slug: "app-3",
    name: "App 3",
    tagline: "Watch this space.",
    description:
      "Our next big idea is taking shape. Stay tuned for something truly special.",
    longDescription:
      "Our next big idea is taking shape. We believe in building fewer, better apps — and this one is worth the wait.",
    color: "#0670C4",
    gradient: "linear-gradient(135deg, #0984E3, #00CEC9)",
    icon: "🚀",
    status: "Planned",
    features: ["Feature one", "Feature two", "Feature three"],
  },
];

export const navLinks = [
  { label: "Products", href: "/#products" },
  { label: "Our Story", href: "/#our-story" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
