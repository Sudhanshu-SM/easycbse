"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "features", label: "Features" },
  { id: "classes", label: "All Classes" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [bubbleStyle, setBubbleStyle] = useState({ left: 0, width: 0, opacity: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  const isHomepage = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let currentId = "home";
    if (pathname.includes("/class")) currentId = "classes";
    setActiveTab(currentId);
    setHoveredTab(null);
    setTimeout(() => updateBubblePosition(currentId), 50);
  }, [pathname]);

  const updateBubblePosition = (id: string) => {
    const target = itemsRef.current[id];
    const container = containerRef.current;
    if (!target || !container) return;
    const cRect = container.getBoundingClientRect();
    const tRect = target.getBoundingClientRect();
    setBubbleStyle({ left: tRect.left - cRect.left, width: tRect.width, opacity: 1 });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const getHref = (id: string) => {
    switch (id) {
      case "home":
        return "/";
      case "features":
        return isHomepage ? "#features-stack" : "/#features-stack";
      case "classes":
        return isHomepage ? "#hero" : "/#hero";
      default:
        return "/";
    }
  };

  const isHashLink = (id: string) => isHomepage && (id === "features" || id === "classes");

  const handleNav = (id: string, e: React.MouseEvent) => {
    if (isHashLink(id)) {
      e.preventDefault();
      scrollTo(id === "features" ? "features-stack" : "hero");
    } else if (id === "home" && isHomepage) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setActiveTab(id);
    setHoveredTab(null);
    setMenuOpen(false);
    updateBubblePosition(id);
  };

  const desktopPill = "relative z-10 px-5 py-2 font-body text-xs font-bold uppercase tracking-wider rounded-full transition-colors duration-200 select-none cursor-pointer";
  const mobilePill = "cursor-pointer rounded-lg border px-4 py-3 font-body text-xs font-bold uppercase tracking-wider transition-all duration-200 text-center select-none";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] isolate w-full border-b border-[#2A0F14]/10 bg-[#FAF9F5] transition-all duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 select-none cursor-pointer" aria-label="EasyCBSE home">
          <span className="font-heading text-2xl font-extrabold tracking-tight text-[#2A0F14]">
            EasyCBSE
          </span>
          <span className="rounded-full border border-[#FF007A]/20 bg-[#FF007A]/10 px-2 py-0.5 font-body text-[10px] font-bold uppercase tracking-wider text-[#FF007A]">
            FREE
          </span>
        </Link>

        <nav className="hidden md:flex items-center">
          <div
            ref={containerRef}
            className="relative flex bg-[#2A0F14] border-2 border-[#2A0F14] rounded-full p-1 items-center shadow-[0_3px_0_rgba(42,15,20,0.15)]"
          >
            <div
              className="absolute top-1 bottom-1 bg-[#FFFFFF] rounded-full transition-all duration-200 ease-out pointer-events-none shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
              style={{
                left: `${bubbleStyle.left}px`,
                width: `${bubbleStyle.width}px`,
                opacity: bubbleStyle.opacity,
              }}
            />

            {navItems.map((item) => {
              const href = getHref(item.id);
              const isActive = activeTab === item.id;
              const isCurrentlyTargeted = hoveredTab ? hoveredTab === item.id : isActive;
              const commonProps = {
                ref: (el: any) => { itemsRef.current[item.id] = el; },
                className: `${desktopPill} ${isCurrentlyTargeted ? "text-[#2A0F14]" : "text-[#FAF9F5]"}`,
                onClick: (e: React.MouseEvent) => handleNav(item.id, e),
                onMouseEnter: () => {
                  setHoveredTab(item.id);
                  updateBubblePosition(item.id);
                },
                onMouseLeave: () => {
                  setHoveredTab(null);
                  updateBubblePosition(activeTab);
                },
                style: { cursor: "pointer" },
              };

              return isHashLink(item.id) ? (
                <button key={item.id} {...commonProps}>{item.label}</button>
              ) : (
                <Link key={item.id} href={href} {...commonProps}>{item.label}</Link>
              );
            })}
          </div>
        </nav>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-lg md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2A0F14" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[#2A0F14]/10 bg-[#FAF9F5] px-6 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-2 rounded-xl border-2 border-[#2A0F14] bg-[#2A0F14] p-2">
            {navItems.map((item) => {
              const href = getHref(item.id);
              const isActive = activeTab === item.id;
              const cls = `${mobilePill} ${
                isActive
                  ? "bg-[#FFFFFF] text-[#2A0F14] border-[#2A0F14] shadow-[0_2px_0_rgba(0,0,0,0.1)]"
                  : "bg-transparent text-[#FAF9F5] border-transparent hover:bg-[#FFFFFF] hover:text-[#2A0F14]"
              }`;

              return isHashLink(item.id) ? (
                <button
                  key={item.id}
                  className={cls}
                  onClick={(e) => handleNav(item.id, e)}
                  style={{ cursor: "pointer" }}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.id}
                  href={href}
                  className={cls}
                  onClick={(e) => handleNav(item.id, e)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
