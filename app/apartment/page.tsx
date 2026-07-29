import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600"] });

type Category = {
  label: string;
  icon: React.ReactNode;
  href: string;
  bg: string;
  fg: string;
};

const categories: Category[] = [
  {
    label: "Recycling & Trash",
    href: "/apartment/recycling",
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
    fg: "text-emerald-600 dark:text-emerald-300",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 7.5h15M9.75 7.5V5.25A1.5 1.5 0 0 1 11.25 3.75h1.5a1.5 1.5 0 0 1 1.5 1.5V7.5M6.75 7.5v11.25a1.5 1.5 0 0 0 1.5 1.5h7.5a1.5 1.5 0 0 0 1.5-1.5V7.5M10.5 11.25v6M13.5 11.25v6"
      />
    ),
  },
  {
    label: "Home Essentials",
    href: "/apartment/essentials",
    bg: "bg-stone-200 dark:bg-zinc-800",
    fg: "text-stone-600 dark:text-zinc-300",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12 11.2 4.05a1.5 1.5 0 0 1 1.6 0L21.75 12M4.5 9.75V19.5a.75.75 0 0 0 .75.75h3.75v-6h6v6h3.75a.75.75 0 0 0 .75-.75V9.75"
      />
    ),
  },
  {
    label: "Fan",
    href: "/apartment/fan",
    bg: "bg-sky-100 dark:bg-sky-900/30",
    fg: "text-sky-600 dark:text-sky-300",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 8h9a2.25 2.25 0 1 0-2.25-2.25M4 12h13a2.25 2.25 0 1 1-2.25 2.25M4 16h7a2.25 2.25 0 1 0-2.25 2.25"
      />
    ),
  },
  {
    label: "Coffee Machine",
    href: "/apartment/coffee-machine",
    bg: "bg-amber-100 dark:bg-amber-900/30",
    fg: "text-amber-800 dark:text-amber-300",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8.25h13.5v6a4.5 4.5 0 0 1-4.5 4.5H7.5A4.5 4.5 0 0 1 3 14.25v-6ZM16.5 9.75H18a2.25 2.25 0 0 1 0 4.5h-1.5M6 3.75c0 .621.504 1.125 1.125 1.125S8.25 4.371 8.25 3.75M9.75 3.75c0 .621.504 1.125 1.125 1.125S12 4.371 12 3.75"
      />
    ),
  },
  {
    label: "Dishwasher",
    href: "/apartment/dishwasher",
    bg: "bg-gray-100 dark:bg-zinc-800",
    fg: "text-gray-600 dark:text-zinc-300",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 3.75h15v16.5h-15V3.75ZM7.5 6.75h.008M9.75 6.75h.008M12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
      />
    ),
  },
  {
    label: "Washing Machine",
    href: "/apartment/washing-machine",
    bg: "bg-violet-100 dark:bg-violet-900/30",
    fg: "text-violet-600 dark:text-violet-300",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 3.75h15v16.5h-15V3.75ZM7.5 6.75h.008M9.75 6.75h9.75M12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
      />
    ),
  },
];

const emergency: Category & { description: string } = {
  label: "Emergency",
  href: "/apartment/emergency",
  bg: "bg-red-50 dark:bg-red-950/40",
  fg: "text-red-400 dark:text-red-400",
  description: "Important information and emergency numbers.",
  icon: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.75 3.75h4.5M12 3.75v3M8.25 8.25h7.5l-.75 12h-6l-.75-12ZM10.5 8.25V6.75a1.5 1.5 0 0 1 3 0v1.5"
    />
  ),
};

function Tile({ category }: { category: Category }) {
  return (
    <Link
      href={category.href}
      className="group relative flex flex-col gap-3 rounded-2xl border border-stone-200/70 bg-white p-4 text-left transition-colors hover:bg-stone-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
    >
      <span className={`flex h-11 w-11 items-center justify-center rounded-full ${category.bg}`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={category.fg}>
          {category.icon}
        </svg>
      </span>
      <span className="text-sm font-medium leading-4 text-zinc-800 dark:text-zinc-100">
        {category.label}
      </span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        className="absolute bottom-4 right-4 text-stone-300 transition-transform group-hover:translate-x-0.5 dark:text-zinc-600"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
      </svg>
    </Link>
  );
}

export default function ApartmentPage() {
  return (
    <div className="flex flex-1 flex-col bg-stone-50 dark:bg-zinc-950">
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col px-6 pt-6 pb-10">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-1 text-sm text-stone-500 transition-colors hover:text-stone-900 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          Back
        </Link>

        <h1 className={`${playfair.className} mt-6 text-5xl text-zinc-900 dark:text-zinc-50`}>
          The Apartment
        </h1>
        <p className="mt-3 text-base text-stone-500 dark:text-zinc-400">
          Everything you need to know to make yourself at home.
        </p>

        <div className="mt-8 grid grid-cols-3 gap-3">
          {categories.map((category) => (
            <Tile key={category.label} category={category} />
          ))}
        </div>

        <Link
          href={emergency.href}
          className={`group relative mt-3 flex items-center gap-4 rounded-2xl p-4 pr-10 transition-colors ${emergency.bg}`}
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white dark:bg-zinc-900">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={emergency.fg}>
              {emergency.icon}
            </svg>
          </span>
          <div>
            <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              {emergency.label}
            </p>
            <p className="mt-0.5 text-sm leading-5 text-stone-600 dark:text-zinc-300">
              {emergency.description}
            </p>
          </div>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-300 transition-transform group-hover:translate-x-0.5 dark:text-zinc-600"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </Link>

        <div className="mt-4 flex items-center gap-3 rounded-2xl border border-stone-200/70 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-stone-100 dark:bg-zinc-800">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-stone-500 dark:text-zinc-400">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 10.5h7.5M8.25 13.5h4.5M21 12c0 4.556-4.03 8.25-9 8.25a9.76 9.76 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.4-.1-.806-.443-1.032A8.161 8.161 0 0 1 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
              />
            </svg>
          </span>
          <div>
            <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              Questions?
            </p>
            <p className="text-sm leading-5 text-stone-600 dark:text-zinc-300">
              If you need help or can&apos;t find something, just send me a
              message.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
