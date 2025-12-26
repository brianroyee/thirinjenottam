import {
  Project,
  Topic,
  LoreItem,
  Shoutout,
  Stats,
  Financials,
  GraveyardItem,
  CommunityFave,
} from "./types";

export const HERO_TEXT = {
  title: "Techiepedia 2025",
  subtitle: "The Year-End Deep Dive",
  intro:
    "2025 was the year Quantum Realm shed its skin to become Techiepedia. From 'support group' to 'incubator of chaotic innovation.' We saw 16-year-olds humbling graduates, viral SaaS launches, and the tragic loss of an entire website repository.",
};

export const STATS: Stats = {
  members: 423,
  projects: 14,
  hours: "10PM — 3AM",
  command: "sudo rm -rf /",
};

export const PIE_DATA = [
  { name: "Procrastination", value: 40, color: "#10b981" },
  { name: "Debugging", value: 30, color: "#3b82f6" },
  { name: "Ladoo Hunting", value: 10, color: "#f59e0b" },
  { name: "Coding", value: 20, color: "#ef4444" },
];

export const ACTIVITY_DATA = [
  { name: "6AM", active: 5 },
  { name: "12PM", active: 45 },
  { name: "6PM", active: 80 },
  { name: "12AM", active: 100 },
  { name: "3AM", active: 60 },
];

export const COMMUNITY_FAVES: CommunityFave[] = [
  {
    category: "Distro of the Year",
    winner: "Fedora",
    description:
      "Brian broke it, everyone else installed it. The 'I use Arch' crowd is silent.",
  },
  {
    category: "AI Model",
    winner: "DeepSeek",
    description:
      "Writes better love letters in Malayalam than most actual humans.",
  },
  {
    category: "Physics Topic",
    winner: "Quantum Mechanics",
    description:
      "Schrödinger’s cat and 'Cat Qubits' lived rent-free in our heads.",
  },
  {
    category: "Hardware",
    winner: "Raspberry Pi",
    description: "The solution to every problem, including the ones it caused.",
  },
  {
    category: "Code Platform",
    winner: "Replit",
    description: "Where Sreeram hosts 64 instances of absolute chaos.",
  },
  {
    category: "Snack Combo",
    winner: "Oman Chips + Lassi",
    description: "The nostalgia trip that united the NRIs.",
  },
  {
    category: "Game of the Year",
    winner: "Black Myth: Wukong",
    description: "The only reason half of us are upgrading our GPUs.",
  },
  {
    category: "Event",
    winner: "Brahma '25",
    description: "Turned the group from shitposters into a 24/7 helpdesk.",
  },
];

export const COMMUNITY_FINANCIALS: Financials[] = [
  { item: "Funds Raised", value: "₹3,000", trend: "up" },
  { item: "Total Spent", value: "₹4,000", trend: "down" },
  { item: "Net 'Profit'", value: "-₹1,000", trend: "down" },
  { item: "ROI", value: "Vibes Only", trend: "neutral" },
];

export const PROJECTS: Project[] = [
  {
    name: "BananaCV.fun",
    creator: "Abhijith T",
    description:
      "The community’s biggest win. A brutal AI resume roaster that hit 200k visitors.",
    highlight: true,
  },
  {
    name: "Koppile Sanam",
    creator: "Alfie",
    description:
      "AI GitHub Repo Roaster using 'Prof. Pisharody' to roast code in Manglish.",
    highlight: true,
  },
  {
    name: "Typelo.tech",
    creator: "Christopher Joshy",
    description:
      "Real-time 1v1 competitive typing game with a Gacha system and global leaderboards.",
  },
  {
    name: "Klaz.app",
    creator: "Dhanesh",
    description:
      "P2P learning library decentralizing notes for B.Tech students by students.",
  },
  {
    name: "Orix",
    creator: "Jithin & Christopher",
    description:
      "Student-only rideshare network solving the 'auto-fare crisis' at SJCET/ASIET.",
  },
  {
    name: "DropANote",
    creator: "Akhil B Xavier",
    description:
      "Anonymous feedback tool beta-tested by the community until it broke.",
  },
  {
    name: "Git Time Machine",
    creator: "Nandhu",
    description:
      "A tool to view git history visually, born out of a FOSS hackathon.",
  },
  {
    name: "Brahma Helpline Bot",
    creator: "Brian & Sreeram",
    description:
      "Telegram bot managing event details, timeline, and results for Brahma '25.",
  },
  {
    name: "Wikirun AI",
    creator: "Christopher Joshy",
    description:
      "Visualizing AI thought paths through Wikipedia links in a graph format.",
  },
  {
    name: "Avina",
    creator: "Srihari",
    description:
      "Human-first productivity & wellness tool for focus and distraction awareness.",
  },
  {
    name: "Nodit",
    creator: "Affan",
    description:
      "AI platform for exploration, built by a student who left traditional schooling.",
  },
  {
    name: "Get Humbled",
    creator: "Brian Roy Mathew",
    description:
      "LinkedIn profile roaster. 'LinkedIn is not Linked-Inning anymore'.",
  },
  {
    name: "Greyskale Robotics",
    creator: "Chandra & Ashwin",
    description:
      "Portfolio and project showcase for hardware and robotics experiments.",
  },
  {
    name: "WealthWise",
    creator: "Sufiyan",
    description: "Expense and income tracker application built with Flask.",
  },
  {
    name: "Gerty",
    creator: "Sreeram",
    description:
      "A Discord bot with 4 years of commit history (mostly scripted) and 64 Replit instances.",
  },
];

export const TOPICS: Topic[] = [
  {
    title: "The Great Reset",
    description:
      "MNCs ghosting the '24 batch led to the consensus: Startups are the only escape.",
  },
  {
    title: "Linux vs. Windows",
    description:
      "Brian breaking his Fedora install vs. everyone else complaining about Windows Updates.",
  },
  {
    title: "The Ladoo Crisis",
    description:
      "The GPay Twinkle Ladoo hunt that turned the tech group into a trading floor.",
  },
  {
    title: "The 55k RTX 4090",
    description:
      "Ameen trying to convince the hardware geeks that you can get a 4090 laptop for ₹55k (it was a 4050).",
  },
  {
    title: "Raw Power vs. DLSS",
    description:
      " The war between 'It's fake frames' and 'I paid for the whole speedometer'.",
  },
  {
    title: "Shadows in Vacuum",
    description: "High-IQ debate: Do you need an atmosphere to see a shadow?",
  },
  {
    title: "AI Consciousness",
    description:
      "Nandhu claiming 'AI is racist' vs. Ebin believing 'The lizard is just chitchatting'.",
  },
  {
    title: "Gnome vs. Hyprland",
    description:
      "Geevarghese dropping the bar: 'You use Linux and don't know gnome? You have a house but no home?'",
  },
  {
    title: "DeepSeek's Love Letters",
    description:
      "Hashim and Brian discovering DeepSeek's Malayalam mode has absolute zero filter when writing romantic poetry.",
  },
];

export const HALL_OF_SHADOWS: GraveyardItem[] = [
  {
    title: "techiepedia.tech",
    description: "The Lost Repository",
    postmortem:
      "The ultimate community fail. The source code vanished when the dev team went AWOL. The site now exists as an uneditable 'ghost' on Vercel, serving as a monument to 'commit often'.",
    status: "lost",
  },
  {
    title: "Decentralized Cloud",
    description: "Kerala-native AWS",
    postmortem:
      "A plan to build a cloud cluster using idle student PCs. Died in the brainstorming phase due to latency issues, lack of electricity, and 'unrealistic infra requirements'.",
    status: "abandoned",
  },
  {
    title: "100-Crore Crypto",
    description: "The Sugar Deal",
    postmortem:
      "Ebin's legendary 'black-to-white' conversion schemes involving sugar exports and Californium. Never materialized, but the memes fueled the group economy for months.",
    status: "myth",
  },
];

export const LORE: LoreItem[] = [
  {
    id: "twinkle",
    title: "The Twinkle Ladoo Crisis",
    description: "When GPay turned techies into beggars.",
    story:
      "During Diwali 2024, the group descended into madness hunting for the rare 'Twinkle' Ladoo in Google Pay. Members were trading secrets, forming 'Twinkle Sahayakana Sangham', and offering kidney trades for a single card. Nandhu CUSAT eventually scammed the group with a fake link, leading to mass trust issues.",
    tags: ["Finance", "Chaos"],
  },
  {
    id: "brick",
    title: "Brian's 'Brick by Brick'",
    description: "Manual labor on GitHub.",
    story:
      "Brian Roy Mathew's portfolio website had an impressive commit history. When questioned about the volume, he claimed he built it 'Brick by Brick'. It was later revealed he manually wrote every single commit message to look busy, a technique now legendary for 'farming aura'.",
    tags: ["Dev", "Meme"],
  },
  {
    id: "social",
    title: "Socially Relevant Project",
    description: "The ultimate roast by an AI.",
    story:
      "When Alfie launched 'Koppile Sanam' (an AI repo roaster), Brian tried to test it. The AI roasted Brian's code so hard, calling it a 'Socially Relevant Project' (a euphemism for 'useless but has good intentions'), that it caused a trauma flashback to his S3 Analog Lab viva.",
    tags: ["AI", "Roast"],
  },
  {
    id: "californium",
    title: "Ebin's Californium Empire",
    description: "$8.5M per gram. DM for deal.",
    story:
      "Ebin  is the group's resident tycoon. From 'Black to White' money conversion schemes to selling Californium for $8.5M/gram (sourced from Africa), his business propositions are as shady as they are entertaining. He once offered a $1.5M commission for finding a buyer.",
    tags: ["Business", "Shady"],
  },
  {
    id: "ameen",
    title: "Ameen's Black Market",
    description: "Spotify Premium for ₹30.",
    story:
      "Ameen Ashraf established a monopoly on cheap subscriptions. Spotify, Canva, YouTube Premium—if it had a price tag, Ameen had it for ₹30/month. His business model remains a mystery, likely involving 'family plans' with 900 strangers.",
    tags: ["Market", "Stonks"],
  },
  {
    id: "typelo",
    title: "The 240 WPM Ban",
    description: "Suffering from success.",
    story:
      "In the early beta of Typelo, Roshvin (a competitive typist) typed so fast that the anti-cheat system flagged him as a bot and banned him. This led to the 'Suffering from Success' meme and a rewrite of the anti-cheat logic.",
    tags: ["Gaming", "Bug"],
  },
  {
    id: "shadows",
    title: "Shadows in a Vacuum",
    description: "A high-IQ debate involving The Flash & Interstellar.",
    story:
      "A seemingly innocent question sparked a high-volume debate on physics: Do you need an atmosphere to see a shadow? Arguments referenced 'Interstellar' black holes and 'The Flash' speed force, effectively halting all productivity as the group tried to out-nerd each other.",
    tags: ["Physics", "Debate"],
  },
  {
    id: "nri",
    title: "The '1 Dirham' Cult",
    description: "Oman Chips and Almarai Lassi nostalgia.",
    story:
      "Late-night coding sessions frequently devolved into nostalgia trips about growing up in the Gulf. The group bonded over the '1 Dirham' lifestyle, trading memories of Oman Chips and Almarai Lassi, declaring them superior to any modern energy drink.",
    tags: ["Culture", "Nostalgia"],
  },
  {
    id: "speed",
    title: "The 150km/h Lead",
    description: "Brian's legendary survival story.",
    story:
      "Lore suggests Brian lives his life like a GTA mission. He survived a high-speed bike chase that led to his 'Unc' status within the community. While the exact physics of the event remain debated in the group chats, the legend solidified his reputation as the elder statesman who has 'seen it all'.",
    tags: ["Lore", "Meme"],
  },
  {
    id: "blood",
    title: "The Blood Mafia Response",
    description: "Community's real-world utility in action.",
    story:
      "Proving the group isn't just about code and chaos, the 'Blood Mafia' successfully coordinated multiple emergency blood donations at Aster Medicity and General Hospital Ekm. It was a moment where the network's efficiency saved lives, transitioning from a shitposting group to a rapid-response unit.",
    tags: ["Community", "Impact"],
  },
  {
    id: "win11",
    title: "Windows 11 vs. Mental Health",
    description: "The UI 7 Update that broke Brian and sparked a Linux wave.",
    story:
      "The 'UI 7 Update' was a major pain point. Brian's attempt to go 'AI-free' on Windows resulted in a bricked system, triggering a massive Linux Migration Wave. The chat turned into a warzone of 'Fedora vs. Arch' debates, with members abandoning Microsoft en masse to preserve their sanity.",
    tags: ["OS", "Rant"],
  },
  {
    id: "alice-bob",
    title: "The Unresolved Dependency",
    description: "A tragic love story of thread safety.",
    story:
      "Brian dropped a literary masterpiece about Alice (Real-time thread) and Bob (Async service) unable to connect due to 'EADDRINUSE' and segmentation faults. It was 90% technical jargon, 10% heartbreak, and 100% compiled successfully.",
    tags: ["Poetry", "Nerd"],
  },
  {
    id: "laundering",
    title: "Ebin's Masterclass: $500M",
    description: "Hypothetical financial advice. Strictly hypothetical.",
    story:
      "Ebin dropped a detailed tutorial on laundering $500M using charitable trusts and customs clerks. He claimed to have 'clients' and even offered Brian a cut. The group legally disowned this conversation immediately.",
    tags: ["Finance", "Sus"],
  },
  {
    id: "server-nuke",
    title: "sudo rm -rf /ui",
    description: "Brian deleted the frontend. Then the server.",
    story:
      "In a span of one week, Brian managed to 'accidentally' delete the entire UI of a project, and later the entire server. Ebin's response: 'Leviathan is afraid of Brian'.",
    tags: ["Chaos", "Ops"],
  },
  {
    id: "otp-spam",
    title: "The TinkerHub OTP Glitch",
    description: "Unlimited OTPs for free.",
    story:
      "Brian and Nandhu discovered an unprotected API endpoint during Tink-Her-Hack that allowed infinite OTP spanning. Instead of reporting it immediately, they tested it on themselves... and maybe a few others.",
    tags: ["Sec", "Hack"],
  },
];

export const SHOUTOUTS: Shoutout[] = [
  {
    role: "The Architect",
    name: "Ashwin P Shine",
    description: "Dreams in assembly. The walking ChatGPT.",
  },
  {
    role: "The Tycoon",
    name: "Ebin Jewels",
    description: "Trading everything from Crypto to Californium.",
  },
  {
    role: "16yo Giants",
    name: "Srihari & Affan",
    description: "Reminding seniors age is just a number.",
  },
  {
    role: "The Plug",
    name: "Ameen Ashraf",
    description: "If it has a subscription, he has it cheaper.",
  },
  {
    role: "Support Pillar",
    name: "Jayalakshmy",
    description: "10 CGPA sanity check at 2 AM.",
  },
  {
    role: "The Hype Man",
    name: "Joseph Shibu",
    description: "Chief Motivator. 'Proud Dad' of the community.",
  },
  {
    role: "Glitch Hunter",
    name: "Nandhu",
    description: "Broke TinkerHub's API & built Git Time Machine.",
  },
  {
    role: "Distro Whisperer",
    name: "Geevarghese",
    description: "Linux evangelist. Can fix your OS, not his sleep.",
  },
  {
    role: "The Bot Father",
    name: "Sreeram",
    description: "64 Replit instances. 4 years of commit history.",
  },
  {
    role: "The Roaster",
    name: "Alfie",
    description: "Built an AI just to roast Brian in Manglish.",
  },
  {
    role: "Game Master",
    name: "Christopher",
    description: "Turning typing into an esport with Typelo.",
  },
  {
    role: "Resume Destroyer",
    name: "Abhijith",
    description: "Humbled 200k people with BananaCV.",
  },
];

export const QUOTES = [
  {
    text: "Leviathan is afraid of Brian.",
    author: "Ebin",
    context: "After Brian deleted the server",
  },
  {
    text: "You use Linux and don't know Gnome? You have a house but no home?",
    author: "Geevarghese",
    context: "The DE Wars",
  },
  {
    text: "I paid for the whole speedometer.",
    author: "Anonymous",
    context: "Defending 4090 purchase",
  },
  {
    text: "It works on my machine (and the 63 other instances).",
    author: "Sreeram",
    context: "Deploying Gerty",
  },
  {
    text: "I just wanted to test the API limits.",
    author: "Nandhu",
    context: "TinkerHub OTP Glitch",
  },
  {
    text: "Is the lizard just chitchatting?",
    author: "Ebin",
    context: "AI Consciousness Debate",
  },
];

export const PREDICTIONS = [
  { text: "Brian accidentally deletes the internet", probability: "12%" },
  { text: "Sreeram reaches 100 Replit instances", probability: "99%" },
  { text: "Ebin buys a small island nation", probability: "45%" },
  { text: "We explicitly support Windows", probability: "0.1%" },
];

export const VERDICT = {
  positives:
    "Built a space where a 1st-year student could ask a question and get a reply from a 10+ year professional.",
  negatives:
    "We spend more time 'distro-hopping' and hunting Ladoos than finishing our docs.",
  goal: "2026 Goal: 1,000 members. Build or die.",
};
