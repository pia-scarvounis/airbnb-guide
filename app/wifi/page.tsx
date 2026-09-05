"use client";

import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600"] });

const WIFI = {
  name: "Telenor3371mil",
  password: "Flymateriellet8Kunstlet7",
};

function WifiIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12.55a11 11 0 0 1 14 0M8.5 16.4a6 6 0 0 1 7 0M12 20h.01"
      />
    </svg>
  );
}

const MAX_PASSWORD_FONT_SIZE = 24;
const MIN_PASSWORD_FONT_SIZE = 10;

export default function WifiPage() {
  const [copied, setCopied] = useState(false);
  const passwordRowRef = useRef<HTMLDivElement>(null);
  const passwordTextRef = useRef<HTMLParagraphElement>(null);
  const [passwordFontSize, setPasswordFontSize] = useState(MAX_PASSWORD_FONT_SIZE);

  useLayoutEffect(() => {
    function fitPassword() {
      const row = passwordRowRef.current;
      const text = passwordTextRef.current;
      if (!row || !text) return;
      text.style.fontSize = `${MAX_PASSWORD_FONT_SIZE}px`;
      const available = row.clientWidth;
      const needed = text.scrollWidth;
      const size =
        needed > available
          ? Math.max(MIN_PASSWORD_FONT_SIZE, (available / needed) * MAX_PASSWORD_FONT_SIZE)
          : MAX_PASSWORD_FONT_SIZE;
      setPasswordFontSize(size);
    }
    fitPassword();
    window.addEventListener("resize", fitPassword);
    return () => window.removeEventListener("resize", fitPassword);
  }, []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(WIFI.password);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API unavailable - guest can still select and copy the text manually.
    }
  }

  return (
    <div className="flex flex-1 flex-col bg-stone-50 dark:bg-zinc-950">
      <div className="mx-auto flex w-full flex-1 flex-col px-8 pt-6 pb-10 md:max-w-xl">
        <Link
          href="/apartment"
          className="inline-flex w-fit items-center gap-1 text-sm text-stone-500 transition-colors hover:text-stone-900 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          Back
        </Link>

        <h1 className={`${playfair.className} mt-4 text-6xl text-zinc-900 dark:text-zinc-50`}>
          WiFi
        </h1>
        <p className="mt-3 text-base text-stone-500 dark:text-zinc-400">
          Tap to copy the password.
        </p>

        <div className="mt-10 flex items-center gap-3">
          <WifiIcon className="text-stone-400 dark:text-zinc-500" />
          <div>
            <p className="text-xs font-semibold tracking-widest text-stone-400 dark:text-zinc-500">
              NETWORK NAME
            </p>
            <p className={`${playfair.className} text-2xl text-zinc-900 dark:text-zinc-50`}>
              {WIFI.name}
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-4 rounded-3xl bg-white p-6 shadow-md shadow-black/5 dark:bg-zinc-900">
          <div ref={passwordRowRef} className="min-w-0">
            <p className="text-xs font-semibold tracking-widest text-stone-400 dark:text-zinc-500">
              PASSWORD
            </p>
            <p
              ref={passwordTextRef}
              style={{ fontSize: `${passwordFontSize}px` }}
              className={`${playfair.className} whitespace-nowrap text-zinc-900 dark:text-zinc-50`}
            >
              {WIFI.password}
            </p>
          </div>
          <button
            type="button"
            onClick={handleCopy}
            className="flex shrink-0 items-center gap-2 rounded-full bg-stone-500 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-600"
          >
            {copied ? (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75 9 17.25 19.5 6.75" />
                </svg>
                Copied
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 17.25v1.5a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.5-1.5v-9a1.5 1.5 0 0 1 1.5-1.5h1.5m4.5-3h7.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5h-7.5a1.5 1.5 0 0 1-1.5-1.5v-7.5a1.5 1.5 0 0 1 1.5-1.5Z"
                  />
                </svg>
                Copy
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
