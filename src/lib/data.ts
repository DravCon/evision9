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
  status: "Live" | "Available" | "Coming Soon" | "In Development" | "Planned";
  features: string[];
  disclaimer?: string;
  appStoreUrl?: string;
  webUrl?: string;
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
  {
    slug: "sanket",
    name: "Sanket",
    tagline: "A signal to act, not a verdict.",
    description:
      "An oral cancer risk check for Android, built for India. Take three guided photos of the inside of the mouth and get a clear, plain-language signal on whether to see a doctor.",
    longDescription:
      "Oral cancer is one of the most common cancers in India, and most cases are found late, even though many early warning signs are visible inside the mouth. Sanket, Hindi for \"signal\", helps people notice them sooner. The app walks you through three photos, of the left cheek, the right cheek, and the tongue, and checks each one for blur and lighting as you take it. AI then reviews the photos and returns one of three plain-language signals: low risk, needs attention, or consult a doctor urgently, along with what it noticed and what to do next. A family member can run the check for someone else using the back camera, and the result can be shared as an image card to show a doctor. Coming next: Hindi, a finder for nearby hospitals and clinics, and one-tap deletion of all your data.",
    color: "#1565C0",
    gradient: "linear-gradient(135deg, #1565C0, #42A5F5)",
    icon: "🩺",
    status: "In Development",
    features: [
      "A clear signal: low risk, needs attention, or consult urgently",
      "Three guided photos: left cheek, right cheek, and tongue",
      "Live checks for blur, lighting, and framing as you shoot",
      "Plain-language observations and what to do next",
      "Front or back camera, so family can check someone else",
      "Shareable result card to show a doctor",
      "Past screenings saved with their full results",
      "Phone number sign-in, with consent asked up front",
    ],
    disclaimer:
      "Sanket is a health information tool, not a diagnostic device. It does not diagnose cancer and does not replace an examination by a doctor or dentist.",
  },
  {
    slug: "watch-corner",
    name: "Watch Corner",
    tagline: "Good stories. Thoughtful choices.",
    description:
      "A parent-guided movie and series library for kids in India. Children browse what's new and trending; only titles a parent has reviewed and approved ever reach their screen.",
    longDescription:
      "Watch Corner helps a parent and a child discover movies and series together, without handing the choice to an algorithm. Each month's releases and this week's trending titles are pulled in with their age ratings, IMDb scores, and where to watch them in India, whether on a subscription, free with ads, or to rent or buy. Nothing appears in the child's library until a parent has opened the title on a separate, passcode-protected review desk, written a short note, and approved it. Age certificates are shown as evidence, never treated as automatic permission, and ratings or availability are never invented when the data is missing. Your child browses posters, filters by genre, service, and format, and saves a watchlist, with no viewing history or personal details collected.",
    color: "#18573E",
    gradient: "linear-gradient(135deg, #18573E, #7FCFAA)",
    icon: "🎬",
    status: "Live",
    webUrl: "https://advita-watch-corner.web.app",
    features: [
      "Only parent-approved titles reach the child's library",
      "Monthly releases and weekly trending, rated for their age",
      "IMDb ratings and India streaming options for every title",
      "Clearly separates subscription, free, rent, and buy",
      "Search and filter by genre, streaming service, and format",
      "Separate parent review desk with notes and block controls",
      "Shared watchlist for titles your child wants to see",
      "No viewing history or child personal data collected",
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
