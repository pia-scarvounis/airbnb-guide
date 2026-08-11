import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600"] });

const items = [
  {
    label: "Bus departures",
    description: "See live bus times near you.",
    fg: "text-rose-500 dark:text-rose-300",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 6.75A2.25 2.25 0 0 1 6.75 4.5h10.5a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25H6.75a2.25 2.25 0 0 1-2.25-2.25v-9ZM4.5 12h15M8.25 18v1.5M15.75 18v1.5M7.5 8.25h2.25M14.25 8.25h2.25"
      />
    ),
  },
  {
    label: "Oslo City Bikes",
    description: "Check bike availability and stations.",
    fg: "text-emerald-500 dark:text-emerald-300",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.25 17a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM18.75 17a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM5.25 14.5 9 8.25h4.5l3 5.25M9 8.25 7.5 6H6M13.5 8.25l2.25 4"
      />
    ),
  },
  {
    label: "E-scooters",
    description: "Find available e-scooters nearby.",
    fg: "text-violet-500 dark:text-violet-300",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 19.5h4.5M6.75 19.5V16.5a1.5 1.5 0 0 1 1.5-1.5h6.75V6.75a1.5 1.5 0 0 1 1.5-1.5h1.5M9 19.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM15.75 16.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z"
      />
    ),
  },
  {
    label: "Current weather",
    description: "See the latest weather forecast in Oslo.",
    fg: "text-amber-500 dark:text-amber-300",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 6.75a3.75 3.75 0 0 1 7.34-1.144A3 3 0 0 1 15.75 11.5H8.25a3 3 0 0 1-.75-5.905A3.75 3.75 0 0 1 9 6.75ZM6 15.75v1.5M10.5 15.75v1.5M15 15.75v1.5"
      />
    ),
  },
  {
    label: "Nearby shops",
    description: "Check opening hours for shops near you.",
    fg: "text-stone-500 dark:text-zinc-300",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 7.5V6a3 3 0 0 1 6 0v1.5M3.75 7.5h13.5l-.9 11.25a1.5 1.5 0 0 1-1.5 1.35H6.15a1.5 1.5 0 0 1-1.5-1.35L3.75 7.5Z"
      />
    ),
  },
];

export default function LocalInfoPage() {
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
          Getting Around & Local Info
        </h1>
        <p className="mt-3 text-base text-stone-500 dark:text-zinc-400">
          This local website provides real-time information throughout
          your stay in Kværnerbyen.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="h-px flex-1 bg-stone-200 dark:bg-zinc-800" />
          <span className="text-xs font-semibold tracking-widest text-stone-400 dark:text-zinc-500">
            LOCAL INFO AT A GLANCE
          </span>
          <span className="h-px flex-1 bg-stone-200 dark:bg-zinc-800" />
        </div>

        <div className="mt-6 grid grid-cols-5 gap-x-2 gap-y-4">
          {items.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2 text-center">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={item.fg}>
                {item.icon}
              </svg>
              <span className="text-xs font-semibold leading-4 text-zinc-800 dark:text-zinc-100">
                {item.label}
              </span>
              <span className="text-[11px] leading-4 text-stone-500 dark:text-zinc-400">
                {item.description}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-2xl bg-stone-100 p-4 dark:bg-zinc-800">
          <span className="text-lg">💡</span>
          <div>
            <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              Transport Tip
            </p>
            <p className="mt-1 text-sm leading-6 text-stone-600 dark:text-zinc-300">
              Download the Ruter app (
              <a
                href="https://apps.apple.com/no/app/ruter/id993620197?l=nb"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-zinc-900 underline underline-offset-2 dark:text-zinc-50"
              >
                iOS
              </a>{" "}
              /{" "}
              <a
                href="https://play.google.com/store/apps/details?id=no.ruter.reise"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-zinc-900 underline underline-offset-2 dark:text-zinc-50"
              >
                Android
              </a>
              ) to buy tickets, plan your journey and check live departures.
            </p>
            <p className="mt-3 text-sm leading-6 text-stone-600 dark:text-zinc-300">
              Travelling to or from Oslo Airport (Gardermoen)? I recommend
              taking the Vy local train instead of the Airport Express
              (Flytoget). It usually costs less than half the price and
              takes the same amount of time.
            </p>
          </div>
        </div>

        <a
          href="https://kvbyen.no/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-zinc-900 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Open KVBYEN
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5h6v6M19.5 4.5 10 14M6 6H4.5v13.5H18V18" />
          </svg>
        </a>
      </div>
    </div>
  );
}
