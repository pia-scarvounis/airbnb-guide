"use client";

import QRCode from "react-qr-code";
import { Dancing_Script, Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600"] });
const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["700"] });

const GUIDE_URL = "https://pias-guest-guide.netlify.app";

export default function QrPage() {
  return (
    <div className="flex min-h-dvh flex-col items-center bg-stone-100 px-6 py-12 print:min-h-0 print:bg-white print:p-0">
      <style>{`
        @page {
          size: A4;
          margin: 0;
        }
      `}</style>

      <button
        type="button"
        onClick={() => window.print()}
        className="mb-10 flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 print:hidden"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 8.25V4.5a1.5 1.5 0 0 1 1.5-1.5h7.5a1.5 1.5 0 0 1 1.5 1.5v3.75M6.75 18h-1.5a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5h13.5a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-1.5M6.75 14.25h10.5v6a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75v-6Z"
          />
        </svg>
        Print / Save as PDF
      </button>

      <div className="flex w-[210mm] min-h-[297mm] flex-col items-center justify-center bg-white p-16 text-center shadow-2xl shadow-black/10 print:h-[297mm] print:min-h-0 print:w-full print:p-16 print:shadow-none">
        <p className="text-xs font-semibold tracking-[0.25em] text-stone-400">
          GUEST GUIDE
        </p>
        <h1 className={`${playfair.className} mt-5 max-w-sm text-4xl leading-tight text-zinc-900`}>
          Welcome to my home in Kværnerbyen
        </h1>
        <p className="mt-4 max-w-xs text-base leading-7 text-stone-500">
          Scan the code below to open your guest guide - WiFi, house
          essentials, and my personal recommendations for the neighbourhood.
        </p>

        <div className="mt-14 rounded-[2rem] border border-stone-200 bg-white p-10">
          <QRCode
            value={GUIDE_URL}
            size={260}
            fgColor="#000000"
            bgColor="#ffffff"
          />
        </div>

        <p className="mt-8 text-sm tracking-wide text-stone-400">
          {GUIDE_URL}
        </p>

        <p className={`${dancingScript.className} mt-16 text-3xl text-zinc-900`}>
          Pia ♡
        </p>
      </div>
    </div>
  );
}
