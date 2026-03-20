export interface AppInfo {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  color: string;
  gradient: string;
  icon: string;
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
    slug: "app-2",
    name: "App 2",
    tagline: "Something amazing is brewing.",
    description:
      "Details coming soon. We're working on something that will make your daily life a little more delightful.",
    longDescription:
      "We're working on something special. Stay tuned for an app that will bring a little more delight to your daily routine.",
    color: "#6C3FA0",
    gradient: "linear-gradient(135deg, #7B5EA7, #E84393)",
    icon: "✨",
    status: "In Development",
    features: ["Feature one", "Feature two", "Feature three"],
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
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
