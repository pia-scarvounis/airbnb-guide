import Image from "next/image";
import Link from "next/link";
import { Dancing_Script, Playfair_Display } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["700"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600"] });

type Category = {
  label: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
};

const categories: Category[] = [
  {
    label: "The Apartment",
    description: "Check-in, keys & how things work",
    href: "/apartment",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12 11.2 4.05a1.5 1.5 0 0 1 1.6 0L21.75 12M4.5 9.75V19.5a.75.75 0 0 0 .75.75h3.75v-6h6v6h3.75a.75.75 0 0 0 .75-.75V9.75"
      />
    ),
  },
  {
    label: "Local Kværnerbyen Info",
    description: "Live neighborhood info",
    href: "/local-info",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 11.25h.375a.375.375 0 0 1 .375.375v4.125m-.75-8.25h.008v.008h-.008V7.5ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    ),
  },
  {
    label: "My Oslo Favorites",
    description: "Where I actually go",
    href: "/favorites",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 4.5c-1.6-2-5.3-1.2-5.9 1.6-.5 2.4 1.6 4.5 5.9 8.4 4.3-3.9 6.4-6 5.9-8.4-.6-2.8-4.3-3.6-5.9-1.6Z"
      />
    ),
  },
];

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-1 flex-col bg-white dark:bg-black">
      <div className="mx-auto flex w-full flex-1 flex-col md:max-w-xl">
        <section className="relative flex flex-1 flex-col">
          {/* Hero */}
          <div className="relative mx-6 mt-6 min-h-[50dvh] flex-1 overflow-hidden rounded-3xl px-7 pb-20 pt-[max(2.5rem,calc(env(safe-area-inset-top)+1rem))] text-white">
            <Image
              src="/hero-courtyard.jpg"
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 100vw, 576px"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/90"
            />
            <div className="relative">
              <h1
                className={`${playfair.className} max-w-[14ch] text-4xl leading-[1.15]`}
              >
                Welcome to my home in Kværnerbyen
              </h1>
              <p className="mt-4 max-w-xs text-sm leading-6 text-zinc-200">
                Here you&apos;ll find everything you need to know about the
                apartment, from practical information to my personal
                recommendations for places to eat, drink, and explore.
              </p>
              <p className="mt-3 max-w-xs text-sm leading-6 text-zinc-200">
                Make yourself at home, and please don&apos;t hesitate to get
                in touch if you have any questions.
              </p>
              <p
                className={`${dancingScript.className} mt-8 flex items-center gap-1.5 text-2xl text-white`}
              >
                Pia
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 4.5c-1.6-2-5.3-1.2-5.9 1.6-.5 2.4 1.6 4.5 5.9 8.4 4.3-3.9 6.4-6 5.9-8.4-.6-2.8-4.3-3.6-5.9-1.6Z"
                  />
                </svg>
              </p>
            </div>
          </div>

          {/* Quick access row - overlaps the hero */}
          <div className="relative z-10 -mt-12 mx-6 shrink-0 mb-[max(2.5rem,calc(env(safe-area-inset-bottom)+1rem))] rounded-3xl bg-white p-5 shadow-xl shadow-black/10 ring-1 ring-black/5 dark:bg-zinc-950 dark:ring-white/10">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-4">
            {categories.map((category) => {
              const className =
                "flex w-16 flex-col items-center gap-2 text-center";
              const content = (
                <>
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-100 transition-colors group-hover:bg-zinc-200 dark:bg-zinc-800 dark:group-hover:bg-zinc-700">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      className="text-zinc-900 dark:text-zinc-50"
                    >
                      {category.icon}
                    </svg>
                  </span>
                  <span className="text-xs font-medium leading-4 text-zinc-600 dark:text-zinc-300">
                    {category.label}
                  </span>
                </>
              );

              return category.href ? (
                <Link key={category.label} href={category.href} className={`group ${className}`}>
                  {content}
                </Link>
              ) : (
                <button key={category.label} type="button" className={`group ${className}`}>
                  {content}
                </button>
              );
            })}
          </div>
          </div>
        </section>
      </div>
    </div>
  );
}
