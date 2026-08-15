"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["600"] });

export default function BackToTop() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/qr") return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`group fixed right-5 z-40 transition-all duration-500 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
      style={{
        bottom: "max(1.5rem, calc(env(safe-area-inset-bottom) + 1rem))",
      }}
    >
      <span className="relative flex h-20 w-20 items-center justify-center rounded-full border border-amber-200/80 bg-[#FBF6EE] text-zinc-800 shadow-sm shadow-black/5 transition-transform duration-300 ease-out group-hover:scale-105 sm:h-24 sm:w-24 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
        <svg
          width="26"
          height="26"
          viewBox="0 0 40 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="absolute -left-2 -top-2 text-amber-300 dark:text-zinc-600"
        >
          <line x1="26" y1="24" x2="22" y2="7" />
          <line x1="20" y1="26" x2="4" y2="17" />
          <line x1="23" y1="29" x2="10" y2="34" />
          <line x1="28" y1="21" x2="35" y2="9" />
        </svg>

        <span className="flex flex-col items-center gap-1">
          <span className={`${dancingScript.className} text-center text-base leading-[1.05] sm:text-lg`}>
            take me
            <br />
            back up
          </span>
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            className="transition-transform duration-300 ease-out group-hover:-translate-y-0.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5M6 11l6-6 6 6" />
          </svg>
        </span>
      </span>
    </button>
  );
}
