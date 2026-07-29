"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600"] });

const filters = [
  "All",
  "Restaurants",
  "Cafés",
  "Bars",
  "Activities",
] as const;

type Filter = (typeof filters)[number];

type Place = {
  name: string;
  category: Exclude<Filter, "All">;
  time?: string;
  directions?: string[];
  description: string;
  tip?: string;
  image?: string;
  mapsQuery?: string;
};

const places: Place[] = [
  {
    name: "Fuglen Coffee Roasters",
    category: "Cafés",
    image: "/favorites-fuglen.jpg",
    directions: [
      "🚶 7–10 min walk",
      "🚌 Take bus 54 towards Kjelsås stasjon, get off at St Halvards gate. Fuglen is right next to the bus stop.",
    ],
    description:
      "Fuglen is one of Oslo's most iconic coffee shops, known for its excellent specialty coffee and stylish 1950s- and 1960s-inspired Scandinavian interior. During the day, it's a great place for coffee and something sweet, while in the evenings it transforms into a cozy cocktail bar. In the colder months, they often light a fire outside, and in summer the large sunny outdoor terrace is one of the best places to relax with a coffee or drink.",
  },
  {
    name: "Galgen",
    category: "Cafés",
    image: "/favorites-galgen.jpg",
    directions: [
      "🚶 12 min walk",
      "🚌 Take bus 54 towards Kjelsås stasjon, get off at St Halvards gate, then walk 4–5 minutes.",
    ],
    description:
      "Only 12 minutes from the apartment, Galgen is one of my favorite nearby places. It's perfect for lunch or dinner, a drink on the outdoor terrace in the summer, or a cozy hot chocolate during the winter.",
  },
  {
    name: "Oslofjord Sauna",
    category: "Activities",
    image: "/favorites-oslofjord-sauna.jpg",
    mapsQuery: "Oslofjord Sauna, Sukkerbiten, Oslo",
    directions: [
      "🚶 30–35 min walk",
      "🚌 Take bus 54 towards Kjelsås stasjon, get off at Bjørvika. The sauna is a few minutes' walk from the bus stop.",
    ],
    description:
      "Oslofjord Sauna is one of Oslo's most unique experiences. Relax in a floating sauna before taking a refreshing dip in the Oslofjord. It's popular all year round, but especially during the winter months when the contrast between the hot sauna and the icy water is unforgettable. Remember to book in advance, especially on weekends.",
  },
  {
    name: "Hammerhai",
    category: "Bars",
    image: "/favorites-hammerhai.jpg",
    mapsQuery: "Hammerhai Oslo",
    directions: [
      "🚶 30–35 min walk",
      "🚌 Take bus 54 towards Kjelsås stasjon, get off at Bjørvika, then walk about 5 minutes.",
    ],
    description:
      "Hammerhai is one of my favourite waterfront bars in Oslo. It's known for creative cocktails, colourful interiors and a relaxed atmosphere. During the summer, the outdoor seating by the Oslofjord is a great place for a drink in the sun, while evenings often feature DJs and a lively crowd.",
  },
  {
    name: "Himkok",
    category: "Bars",
    image: "/favorites-himkok.jpg",
    mapsQuery: "Himkok Oslo",
    directions: [
      "🚶 35–40 min walk",
      "🚌 Take bus 54 towards Kjelsås stasjon, get off at Storgata, then walk about 2 minutes.",
    ],
    description:
      "Himkok is one of Oslo's most iconic cocktail bars and regularly ranked among the best in the world. The award-winning Distillery Bar on the ground floor serves cocktails made with spirits distilled on-site. It's very popular, so booking a table in advance is recommended. Upstairs, you'll find a larger bar with a livelier atmosphere that turns into more of a nightclub later in the evening.",
  },
  {
    name: "Angst",
    category: "Bars",
    image: "/favorites-angst-v2.jpg",
    mapsQuery: "Angst Bar Oslo",
    directions: [
      "🚶 30–35 min walk",
      "🚌 Take bus 54 towards Kjelsås stasjon, get off at Storgata, then walk about 3 minutes.",
    ],
    description:
      "Angst is one of my favourite bars in Oslo, known for its cozy atmosphere and laid-back vibe. It's a great place to start the evening with a drink, meet friends or simply enjoy the music and lively crowd. The outdoor seating is especially popular on warm summer evenings.",
  },
];

function PlaceCard({ place }: { place: Place }) {
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    place.mapsQuery ?? place.name
  )}`;

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-md shadow-black/5 dark:bg-zinc-900">
      <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-stone-200 to-stone-300 dark:from-zinc-800 dark:to-zinc-900">
        {place.image && (
          <Image src={place.image} alt={place.name} fill className="object-cover" />
        )}
      </div>
      <div className="p-6">
        <h2 className={`${playfair.className} text-3xl text-zinc-900 dark:text-zinc-50`}>
          {place.name}
        </h2>

        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600 dark:bg-zinc-800 dark:text-zinc-300">
            {place.category}
          </span>
          {place.time && (
            <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600 dark:bg-zinc-800 dark:text-zinc-300">
              {place.time}
            </span>
          )}
        </div>

        {place.directions && (
          <div className="mt-4">
            <p className="text-xs font-semibold tracking-widest text-stone-400 dark:text-zinc-500">
              GETTING THERE
            </p>
            <ul className="mt-2 space-y-1">
              {place.directions.map((line) => (
                <li key={line} className="text-sm leading-6 text-stone-600 dark:text-zinc-300">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-4">
          <p className="text-xs font-semibold tracking-widest text-stone-400 dark:text-zinc-500">
            ABOUT
          </p>
          <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-zinc-300">
            {place.description}
          </p>
        </div>

        {place.tip && (
          <div className="mt-4 flex items-start gap-3 rounded-xl bg-stone-100 p-3 dark:bg-zinc-800">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white dark:bg-zinc-900">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-rose-400">
                <path d="M11.25 4.5c-1.6-2-5.3-1.2-5.9 1.6-.5 2.4 1.6 4.5 5.9 8.4 4.3-3.9 6.4-6 5.9-8.4-.6-2.8-4.3-3.6-5.9-1.6Z" />
              </svg>
            </span>
            <p className="text-sm leading-5 text-stone-600 dark:text-zinc-300">
              <span className="font-medium text-zinc-900 dark:text-zinc-50">
                Pia&apos;s tip:
              </span>{" "}
              {place.tip}
            </p>
          </div>
        )}

        <a
          href={mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-zinc-900 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 6-7.5 10.5-7.5 10.5S4.5 16.5 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          Open in Google Maps
        </a>
      </div>
    </div>
  );
}

export default function FavoritesPage() {
  const [active, setActive] = useState<Filter>("All");
  const visible = places.filter((p) => active === "All" || p.category === active);

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
          My Oslo Favorites
        </h1>
        <p className="mt-3 text-base text-stone-500 dark:text-zinc-400">
          Where I actually go — restaurants, cafés, bars and a few things
          worth doing while you&apos;re here.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === filter
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                  : "bg-white text-stone-600 ring-1 ring-stone-200 hover:bg-stone-100 dark:bg-zinc-900 dark:text-zinc-300 dark:ring-zinc-800 dark:hover:bg-zinc-800"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-5">
          {visible.length === 0 ? (
            <p className="mt-6 text-center text-sm text-stone-400 dark:text-zinc-500">
              {active === "All"
                ? "Recommendations coming soon."
                : `No ${active.toLowerCase()} added yet.`}
            </p>
          ) : (
            visible.map((place) => <PlaceCard key={place.name} place={place} />)
          )}
        </div>
      </div>
    </div>
  );
}
