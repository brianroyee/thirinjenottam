import React, { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip as RechartsTooltip,
} from "recharts";
import BentoCard from "./components/BentoCard";
import LoreModal from "./components/LoreModal";
import {
  HERO_TEXT,
  STATS,
  PROJECTS,
  TOPICS,
  HALL_OF_SHADOWS,
  LORE,
  SHOUTOUTS,
  VERDICT,
  COMMUNITY_FINANCIALS,
  COMMUNITY_FAVES,
  PIE_DATA,
  ACTIVITY_DATA,
  QUOTES,
  PREDICTIONS,
} from "./constants";
import {
  Rocket,
  Flame,
  Ghost,
  Users,
  Clock,
  ArrowUpRight,
  Award,
  Skull,
  Terminal,
  BookOpen,
  TrendingUp,
  DollarSign,
  Crown,
  MessageSquare,
  Zap,
  Lock,
} from "./components/Icons";
import { LoreItem } from "./types";

const App: React.FC = () => {
  const [selectedLore, setSelectedLore] = useState<LoreItem | null>(null);

  // Countdown State
  const [isReleased, setIsReleased] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target: 11:11 PM IST on Dec 26, 2025
    const targetDate = new Date("2025-12-26T23:11:00+05:30").getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setIsReleased(true);
        return true; // Finished
      }

      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
      return false;
    };

    // Initial check
    if (calculateTime()) return;

    const interval = setInterval(() => {
      if (calculateTime()) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: "lost" | "abandoned" | "myth") => {
    switch (status) {
      case "lost":
        return "bg-red-500";
      case "abandoned":
        return "bg-yellow-500";
      case "myth":
        return "bg-purple-500";
      default:
        return "bg-gray-500";
    }
  };

  // 🔒 LOCKED STATE UI 🔒
  if (!isReleased) {
    return (
      <div className="fixed inset-0 bg-[#050505] flex flex-col items-center justify-center text-white z-50 overflow-hidden font-sans">
        {/* Background Grid - Matching Main Site */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />

        <div className="z-10 flex flex-col items-center p-8 md:p-12 border border-neutral-800 bg-neutral-900/80 backdrop-blur-xl rounded-3xl shadow-2xl relative max-w-lg w-full mx-4">
          <div className="absolute -top-3 px-4 bg-[#050505] text-tech-orange font-mono text-xs tracking-widest uppercase border border-tech-orange/30 rounded-full py-1 animate-pulse shadow-[0_0_10px_rgba(255,87,34,0.2)]">
            System Locked
          </div>

          <Lock className="w-12 h-12 text-neutral-600 mb-6" />

          <h1 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tighter mb-2 text-center">
            TECHIEPEDIA <span className="text-tech-orange">2025</span>
          </h1>

          <div className="text-center mb-8">
            <p className="text-xs font-mono text-neutral-500 uppercase tracking-[0.3em]">
              Release Protocol Initiating In
            </p>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 font-black font-mono text-5xl md:text-7xl tabular-nums tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            <div className="flex flex-col items-center gap-2">
              <span>{String(timeLeft.hours).padStart(2, "0")}</span>
              <span className="text-[10px] md:text-xs font-sans font-normal text-neutral-600 uppercase tracking-widest">
                Hrs
              </span>
            </div>
            <span className="text-neutral-700 -mt-6">:</span>
            <div className="flex flex-col items-center gap-2">
              <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
              <span className="text-[10px] md:text-xs font-sans font-normal text-neutral-600 uppercase tracking-widest">
                Mins
              </span>
            </div>
            <span className="text-neutral-700 -mt-6">:</span>
            <div className="flex flex-col items-center gap-2">
              <span className="text-tech-orange">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
              <span className="text-[10px] md:text-xs font-sans font-normal text-tech-orange/50 uppercase tracking-widest">
                Secs
              </span>
            </div>
          </div>

          <div className="mt-12 w-full h-1 bg-neutral-800 rounded-full overflow-hidden">
            <div className="h-full bg-tech-orange w-1/3 animate-[shimmer_2s_infinite]"></div>
          </div>

          <p className="mt-6 text-[10px] font-mono text-neutral-600 uppercase tracking-widest text-center">
            Restricted Access • Awaiting Launch
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-12 font-sans">
      <LoreModal item={selectedLore} onClose={() => setSelectedLore(null)} />

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 grid-flow-dense auto-rows-[minmax(180px,auto)]">
        {/* 1. Header - Anchor Item */}
        <BentoCard
          className="col-span-1 md:col-span-3 lg:col-span-3 bg-white text-black min-h-[300px] justify-between"
          delay={0.1}
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                2025 Recap
              </span>
              <span className="text-neutral-500 text-xs font-bold uppercase tracking-widest">
                Quantum Realm → Techiepedia
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[0.9] tracking-tighter mb-6">
              {HERO_TEXT.title}
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-600 max-w-2xl font-medium leading-relaxed">
              {HERO_TEXT.intro}
            </p>
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-end mb-2">
              <span className="font-display font-bold text-2xl">92% Chaos</span>
              <span className="font-mono text-sm text-neutral-400">
                System Status: ONLINE
              </span>
            </div>
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-tech-orange w-[92%]"></div>
            </div>
          </div>
        </BentoCard>

        {/* 2. Total Members - Widget */}
        <BentoCard
          className="col-span-1 bg-tech-pink text-white justify-between"
          delay={0.2}
        >
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-pink-100 text-base uppercase tracking-wider">
              Members
            </h3>
            <Users className="w-5 h-5 opacity-80" />
          </div>
          <div>
            <div className="text-5xl sm:text-6xl font-display font-bold tracking-tighter">
              {STATS.members}
            </div>
            <div className="inline-flex items-center gap-1.5 mt-2 bg-white/20 px-2 py-1 rounded-md">
              <ArrowUpRight className="w-3 h-3" />
              <span className="text-sm font-bold">+411 Growth</span>
            </div>
          </div>
        </BentoCard>

        {/* 3. Shipped - Widget */}
        <BentoCard
          className="col-span-1 bg-tech-orange text-white justify-between"
          delay={0.3}
        >
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-orange-100 text-base uppercase tracking-wider">
              Shipped
            </h3>
            <Rocket className="w-5 h-5 opacity-80" />
          </div>
          <div>
            <div className="text-5xl sm:text-6xl font-display font-bold tracking-tighter">
              {STATS.projects}+
            </div>
            <div className="text-sm mt-2 opacity-90 font-medium">
              Apps, Bots & Chaos
            </div>
          </div>
        </BentoCard>

        {/* 4. Hall of Fame - Tall Pillar */}
        <BentoCard
          className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-neutral-900 border border-neutral-800"
          delay={0.4}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-tech-green">
              <Award className="w-5 h-5" />
              <h2 className="text-xl font-bold uppercase tracking-widest">
                Hall of Fame
              </h2>
            </div>
            <span className="text-sm font-mono text-neutral-500">v2.0.25</span>
          </div>

          <div className="space-y-3 overflow-y-auto pr-2 max-h-[340px] custom-scrollbar">
            {PROJECTS.map((project, idx) => (
              <div
                key={idx}
                className={`group p-4 rounded-xl border transition-all duration-300 hover:bg-neutral-800 ${
                  project.highlight
                    ? "bg-neutral-800/50 border-tech-green/40"
                    : "bg-transparent border-neutral-800"
                }`}
              >
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-tech-green transition-colors">
                    {project.name}
                  </h3>
                  {project.highlight && (
                    <span className="bg-tech-green text-black text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                      Viral
                    </span>
                  )}
                </div>
                <p className="text-xs text-neutral-500 font-mono mb-2 uppercase tracking-wide">
                  By {project.creator}
                </p>
                <p className="text-base text-neutral-400 leading-relaxed group-hover:text-neutral-300">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* 5. Active Hours - Widget */}
        <BentoCard
          className="col-span-1 bg-tech-green text-black justify-center items-center text-center"
          delay={0.5}
        >
          <Clock className="w-8 h-8 mb-4 opacity-80" />
          <h3 className="font-bold uppercase tracking-widest text-sm opacity-60 mb-1">
            Peak Activity
          </h3>
          <div className="text-2xl sm:text-3xl font-display font-bold leading-none">
            {STATS.hours}
          </div>
          <div className="mt-3 px-2 py-1 bg-black/10 rounded text-xs font-bold uppercase">
            The No-Sleep Club
          </div>
        </BentoCard>

        {/* 6. Lore - Interactive Widget */}
        <BentoCard
          className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-[#1a1a1a] border border-neutral-800 text-white flex flex-col"
          delay={0.8}
        >
          <div className="flex items-center gap-2 mb-4 text-tech-purple">
            <BookOpen className="w-4 h-4" />
            <h2 className="text-base font-bold uppercase tracking-widest">
              Lore
            </h2>
            <span className="text-[10px] bg-tech-purple/20 text-tech-purple px-1.5 py-0.5 rounded ml-auto">
              Click to read
            </span>
          </div>
          <div className="space-y-3 flex-1 overflow-y-auto custom-scrollbar pr-1 h-full min-h-0">
            {LORE.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedLore(item)}
                className="bg-black/40 p-3 rounded-lg border border-white/5 hover:border-tech-purple/50 transition-all cursor-pointer hover:bg-white/5 active:scale-95"
              >
                <h4 className="font-bold text-xs uppercase tracking-wider text-purple-300 mb-1 flex justify-between items-center">
                  {item.title}
                  <ArrowUpRight className="w-3 h-3 opacity-50" />
                </h4>
                <p className="text-sm text-neutral-400 leading-snug line-clamp-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* 7. Graveyard - Filler Widget */}
        <BentoCard
          className="col-span-1 md:col-span-2 lg:col-span-2 bg-gradient-to-b from-neutral-900 to-black border border-neutral-800"
          delay={0.7}
        >
          <div className="flex items-center gap-2 mb-4 text-red-500">
            <Ghost className="w-4 h-4" />
            <h2 className="text-base font-bold uppercase tracking-widest">
              Graveyard
            </h2>
          </div>
          <ul className="space-y-4">
            {HALL_OF_SHADOWS.map((item, idx) => (
              <li
                key={idx}
                className="group cursor-default relative pl-4 border-l border-neutral-800 hover:border-red-500/50 transition-colors"
              >
                <div
                  className={`absolute left-[-2.5px] top-1.5 w-1 h-1 rounded-full ${getStatusColor(
                    item.status
                  )}`}
                ></div>
                <div className="flex flex-col gap-0.5">
                  <h4 className="text-neutral-300 font-bold text-sm line-through decoration-red-500/50 group-hover:text-white transition-colors">
                    {item.title}
                  </h4>
                  <span className="text-[10px] text-neutral-500 uppercase tracking-wide font-mono">
                    {item.description}
                  </span>
                  <p className="text-neutral-400 text-xs mt-1 leading-snug opacity-0 group-hover:opacity-100 transition-opacity h-0 group-hover:h-auto overflow-hidden">
                    {item.postmortem}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </BentoCard>

        {/* Community Favourites */}
        <BentoCard
          className="col-span-1 md:col-span-2 lg:col-span-2 bg-[#0F0F0F] border border-neutral-800"
          delay={0.65}
        >
          <div className="flex items-center gap-2 mb-4 text-yellow-500">
            <Crown className="w-5 h-5" />
            <h2 className="text-xl font-bold uppercase tracking-wide">
              Community Faves
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {COMMUNITY_FAVES.map((fave, idx) => (
              <div
                key={idx}
                className="bg-neutral-800/40 p-3 rounded-lg border border-white/5 hover:border-yellow-500/30 transition-colors"
              >
                <h4 className="text-[10px] text-neutral-500 uppercase tracking-wider font-bold mb-1">
                  {fave.category}
                </h4>
                <div className="text-base font-bold text-white mb-1">
                  {fave.winner}
                </div>
                <p className="text-xs text-neutral-400 leading-tight line-clamp-2">
                  {fave.description}
                </p>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* Community Analytics - Charts */}
        <BentoCard
          className="col-span-1 md:col-span-2 lg:col-span-2 bg-[#0F0F0F] border border-neutral-800 flex flex-col"
          delay={0.7}
        >
          <div className="flex items-center gap-2 mb-4 text-blue-400">
            <TrendingUp className="w-5 h-5" />
            <h2 className="text-xl font-bold uppercase tracking-wide">
              Community Analytics
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full min-h-[250px]">
            {/* Visual 1: Time Distribution Pie */}
            <div className="bg-neutral-900/50 rounded-xl p-4 border border-white/5 flex flex-col justify-between">
              <h3 className="text-xs uppercase tracking-widest text-neutral-500 font-bold mb-4 text-center">
                Time Distribution
              </h3>
              <div className="flex-1 w-full min-h-[160px] relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={PIE_DATA}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={60}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {PIE_DATA.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={entry.color}
                          stroke="rgba(0,0,0,0)"
                        />
                      ))}
                    </Pie>
                    <RechartsTooltip
                      contentStyle={{
                        backgroundColor: "#1a1a1a",
                        border: "1px solid #333",
                        borderRadius: "8px",
                        fontSize: "12px",
                      }}
                      itemStyle={{ color: "#fff" }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Custom Legend - Explicitly separated footer */}
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4 w-full px-2">
                {PIE_DATA.map((d, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <div
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: d.color }}
                    ></div>
                    <span className="text-[10px] text-neutral-400 font-medium whitespace-nowrap">
                      {d.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual 2: Activity Bar Chart */}
            <div className="bg-neutral-900/50 rounded-xl p-4 border border-white/5 flex flex-col">
              <h3 className="text-xs uppercase tracking-widest text-neutral-500 font-bold mb-4 text-center">
                Active Hours
              </h3>
              <div className="flex-1 w-full min-h-[180px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={ACTIVITY_DATA}>
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#525252", fontSize: 12 }}
                      dy={10}
                    />
                    <RechartsTooltip
                      cursor={{ fill: "rgba(255,255,255,0.05)" }}
                      contentStyle={{
                        backgroundColor: "#1a1a1a",
                        border: "1px solid #333",
                        borderRadius: "8px",
                        fontSize: "12px",
                      }}
                    />
                    <Bar
                      dataKey="active"
                      fill="#3b82f6"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* 8. Hot Topics - Medium List */}
        <BentoCard
          className="col-span-1 md:col-span-2 lg:col-span-2 bg-white text-black"
          delay={0.6}
        >
          <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
            <h2 className="text-xl font-bold flex items-center gap-2 uppercase tracking-wide">
              <Flame className="w-5 h-5 text-red-500" />
              Hot Debates
            </h2>
            <div className="px-2 py-1 bg-gray-100 rounded text-xs font-bold text-gray-500">
              TRENDING
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
            {TOPICS.map((topic, idx) => (
              <div key={idx} className="group">
                <h4 className="font-bold text-base mb-1 group-hover:text-tech-orange transition-colors flex items-center gap-2">
                  {topic.title}
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* 9. Shoutouts - Medium List */}
        <BentoCard
          className="col-span-1 md:col-span-2 lg:col-span-2 bg-neutral-100 text-neutral-900"
          delay={0.9}
        >
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-5 h-5 text-neutral-600" />
            <h2 className="text-xl font-bold uppercase tracking-wide">
              MVP Shoutouts
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SHOUTOUTS.map((person, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow border border-transparent hover:border-gray-200"
              >
                <div
                  className={`w-8 h-8 rounded-full flex shrink-0 items-center justify-center text-sm font-bold ${
                    idx % 2 === 0
                      ? "bg-tech-orange/10 text-tech-orange"
                      : "bg-tech-pink/10 text-tech-pink"
                  }`}
                >
                  {person.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <h4 className="font-bold text-base">{person.name}</h4>
                    <span className="text-[10px] font-bold uppercase text-gray-400 tracking-wider">
                      {person.role}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5 leading-snug">
                    {person.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* 10. The Echo Chamber - Quotes */}
        <BentoCard
          className="col-span-1 md:col-span-2 lg:col-span-2 bg-[#111] border border-neutral-800 text-white"
          delay={0.95}
        >
          <div className="flex items-center gap-2 mb-4 text-purple-400">
            <MessageSquare className="w-5 h-5" />
            <h2 className="text-xl font-bold uppercase tracking-wide">
              The Echo Chamber
            </h2>
          </div>
          <div className="space-y-4">
            {QUOTES.map((quote, idx) => (
              <div
                key={idx}
                className="bg-neutral-900/50 p-3 rounded-lg border-l-2 border-purple-500/50"
              >
                <p className="text-sm text-neutral-300 italic mb-2">
                  "{quote.text}"
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-white">
                    — {quote.author}
                  </span>
                  <span className="text-[10px] text-neutral-500 uppercase tracking-wider">
                    {quote.context}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* 11. 2026 Forecast */}
        <BentoCard
          className="col-span-1 md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#0F0F0F] to-[#1a1a1a] border border-neutral-800 text-white"
          delay={1.0}
        >
          <div className="flex items-center gap-2 mb-4 text-yellow-500">
            <Zap className="w-5 h-5" />
            <h2 className="text-xl font-bold uppercase tracking-wide">
              2026 Forecast
            </h2>
          </div>
          <div className="space-y-3">
            {PREDICTIONS.map((pred, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5 hover:border-yellow-500/30 transition-colors"
              >
                <span className="text-sm font-medium text-neutral-200">
                  {pred.text}
                </span>
                <span className="text-xs font-mono font-bold text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded">
                  {pred.probability}
                </span>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* 12. Financial Stats - Replaces Command Terminal */}
        <BentoCard
          className="col-span-1 md:col-span-2 lg:col-span-2 bg-black border border-neutral-800 font-mono flex flex-col justify-center relative overflow-hidden"
          delay={1.0}
        >
          <div className="absolute top-0 left-0 w-full h-8 bg-neutral-900 flex items-center justify-between px-3 border-b border-neutral-800">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            <div className="text-[11px] text-neutral-500 font-bold tracking-widest uppercase">
              Community Economy
            </div>
          </div>
          <div className="mt-6 space-y-3">
            {COMMUNITY_FINANCIALS.map((stat, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center border-b border-neutral-800/50 pb-2 last:border-0 last:pb-0 group"
              >
                <span className="text-xs text-neutral-400 group-hover:text-white transition-colors">
                  {stat.item}
                </span>
                <div className="flex items-center gap-1">
                  <span className="text-white text-sm font-bold font-mono">
                    {stat.value}
                  </span>
                  {stat.trend === "up" && (
                    <TrendingUp className="w-3 h-3 text-green-500" />
                  )}
                  {stat.trend === "down" && (
                    <TrendingUp className="w-3 h-3 text-red-500 rotate-180" />
                  )}
                  {stat.trend === "neutral" && (
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-auto pt-4 border-t border-neutral-800/50 flex items-center gap-2 text-xs font-mono text-neutral-500">
            <span className="text-green-500">➜</span>
            <span className="text-blue-500">~</span>
            <span className="text-neutral-300">{STATS.command}</span>
            <span className="animate-pulse w-1.5 h-3 bg-neutral-300 block"></span>
          </div>
        </BentoCard>

        {/* 11. Verdict - Footer */}
        <BentoCard
          className="col-span-1 md:col-span-2 lg:col-span-3 bg-black border border-neutral-800"
          delay={1.1}
          noPadding
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-full gap-px bg-neutral-800">
            {/* Positives */}
            <div className="p-6 flex flex-col justify-start gap-4 bg-black relative">
              <div className="absolute inset-0 bg-gradient-to-b from-tech-green/10 to-transparent pointer-events-none" />
              <div className="flex items-center gap-2 text-tech-green relative z-10">
                <div className="p-1.5 bg-tech-green/10 rounded-md">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <h3 className="font-bold uppercase tracking-widest text-sm">
                  System Wins
                </h3>
              </div>
              <p className="text-neutral-300 text-base leading-relaxed font-medium relative z-10">
                {VERDICT.positives}
              </p>
            </div>

            {/* Negatives */}
            <div className="p-6 flex flex-col justify-start gap-4 bg-black relative">
              <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-transparent pointer-events-none" />
              <div className="flex items-center gap-2 text-red-500 relative z-10">
                <div className="p-1.5 bg-red-500/10 rounded-md">
                  <Skull className="w-4 h-4" />
                </div>
                <h3 className="font-bold uppercase tracking-widest text-sm">
                  System Fails
                </h3>
              </div>
              <p className="text-neutral-300 text-base leading-relaxed font-medium relative z-10">
                {VERDICT.negatives}
              </p>
            </div>

            {/* Goal */}
            <div className="p-6 flex flex-col justify-center items-center text-center bg-[#050505] relative overflow-hidden group cursor-default">
              <div className="absolute inset-0 bg-tech-orange/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative z-10">
                <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-3">
                  Next Objective
                </h3>
                <div className="text-4xl font-display font-bold text-white mb-2 tracking-tighter">
                  1,000
                </div>
                <p className="text-neutral-400 text-sm font-mono mb-4">
                  Active Members
                </p>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-tech-orange/10 border border-tech-orange/20 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-tech-orange animate-pulse"></span>
                  <span className="text-tech-orange text-xs font-bold uppercase tracking-widest">
                    Build or Die
                  </span>
                </div>
              </div>
            </div>

            {/* Join CTA - New 4th Column (Square) */}
            <div
              onClick={() =>
                window.open(
                  "https://chat.whatsapp.com/L22QvxKLTBT6Ncv2CxIzUK",
                  "_blank"
                )
              }
              className="p-6 flex flex-col justify-center items-center text-center bg-[#25D366] relative overflow-hidden group cursor-pointer hover:bg-[#20bd5a] transition-colors"
            >
              <div className="bg-black/20 p-3 rounded-full mb-3 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display font-bold uppercase tracking-widest text-lg text-white mb-1">
                Join Now
              </h3>
              <p className="text-[10px] uppercase font-bold text-white/80 tracking-wide">
                Techiepedia
              </p>
            </div>
          </div>
        </BentoCard>
      </div>

      <footer className="max-w-7xl mx-auto mt-12 mb-6 text-center text-neutral-600 text-xs font-mono uppercase tracking-widest">
        <p>Techiepedia © 2025 • End of Log</p>
        <p className="mt-2 opacity-60 text-[10px] normal-case tracking-normal">
          This was generated under strict supervision of Humans. <br />
          <span className="text-red-500 font-bold">Vibe Coded with ❤️</span>
        </p>
      </footer>
    </div>
  );
};

export default App;
