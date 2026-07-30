import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600"] });

const WIFI = {
  name: "Telenor3371mil",
  password: "Available after booking",
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

export default function WifiPage() {
  return (
    <div className="flex flex-1 flex-col bg-stone-50 dark:bg-zinc-950">
      <div className="mx-auto flex w-full flex-1 flex-col px-8 pt-6 pb-10 md:max-w-xl">
        <Link
          href="/"
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
          Network details for your stay.
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

        <div className="mt-4 rounded-3xl bg-white p-6 shadow-md shadow-black/5 dark:bg-zinc-900">
          <p className="text-xs font-semibold tracking-widest text-stone-400 dark:text-zinc-500">
            PASSWORD
          </p>
          <p className={`${playfair.className} truncate text-2xl text-zinc-900 dark:text-zinc-50`}>
            {WIFI.password}
          </p>
        </div>
      </div>
    </div>
  );
}
