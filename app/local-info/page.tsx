import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600"] });

const items = [
  { emoji: "🚌", label: "Live bus departures" },
  { emoji: "🚲", label: "Oslo City Bikes" },
  { emoji: "🛴", label: "E-scooters" },
  { emoji: "🌤️", label: "Current weather" },
  { emoji: "🛒", label: "Local shops, cafés and restaurants, including opening hours" },
];

export default function LocalInfoPage() {
  return (
    <div className="flex flex-1 flex-col bg-stone-50 dark:bg-zinc-950">
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col px-8 pt-6 pb-10">
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
          Local Info
        </h1>
        <p className="mt-3 text-base text-stone-500 dark:text-zinc-400">
          Everything you need during your stay in Kværnerbyen is available
          on the local neighbourhood website.
        </p>

        <p className="mt-6 text-sm font-medium text-zinc-900 dark:text-zinc-50">
          Here you&apos;ll find:
        </p>
        <div className="mt-3 flex flex-col gap-2">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-md shadow-black/5 dark:bg-zinc-900"
            >
              <span className="text-lg">{item.emoji}</span>
              <span className="text-sm text-stone-600 dark:text-zinc-300">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm leading-6 text-stone-600 dark:text-zinc-300">
          The information is updated automatically, making it the easiest
          way to stay up to date during your visit.
        </p>

        <a
          href="https://kvbyen.no/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-zinc-900 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Open KVBYEN →
        </a>
      </div>
    </div>
  );
}
