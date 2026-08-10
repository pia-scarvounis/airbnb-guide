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
  recommendations?: { name: string; description: string; mapsQuery?: string }[];
  tip?: string;
  image?: string;
  images?: string[];
  imagePosition?: string;
  mapsQuery?: string;
  website?: string;
};

const places: Place[] = [
  {
    name: "Kraft",
    category: "Restaurants",
    image: "/favorites-kraft-v2.jpg",
    mapsQuery: "Kraft Restaurant Oslo",
    directions: ["🚶 3–4 min walk"],
    description:
      "Kraft is a cozy neighbourhood restaurant just a few minutes from the apartment. It's a great choice for lunch or dinner, serving seasonal dishes made with fresh ingredients in a relaxed atmosphere. The menu changes regularly and often features traditional Norwegian home-style cooking alongside lighter lunch options. If you're looking for a good meal close to home, this is my favourite local restaurant.",
  },
  {
    name: "ZZ Pizza",
    category: "Restaurants",
    image: "/favorites-zz-pizza.jpg",
    mapsQuery: "ZZ Pizza Oslo",
    directions: [
      "🚶 10 min walk",
      "🚌 Take bus 54 towards Kjelsås stasjon, get off at St. Halvards gate (1 stop).",
    ],
    description:
      "ZZ Pizza is one of my favourite pizza places in Oslo, serving authentic Neapolitan-style pizzas with airy, wood-fired crusts and high-quality ingredients. If you're not sure what to order, I highly recommend the Pancetta & Blue Cheese pizza or the Mushroom pizza - they're both favourites of mine. It's a great spot for lunch or dinner if you're craving authentic Italian pizza.",
  },
  {
    name: "Smia Galleri",
    category: "Restaurants",
    image: "/favorites-smia-galleri.jpg",
    mapsQuery: "Smia Galleri Oslo",
    directions: ["🚶 10 min walk"],
    description:
      "Smia Galleri is one of my favourite neighbourhood restaurants, set in a beautifully restored former blacksmith's workshop. It's known for seasonal Nordic cuisine, a warm atmosphere and a charming courtyard that's especially lovely in the summer. Whether you're stopping by for lunch, dinner or a glass of wine, it's a hidden gem just a short walk from the apartment.",
  },
  {
    name: "Madonna",
    category: "Restaurants",
    image: "/favorites-madonna.jpg",
    mapsQuery: "Madonna Oslo",
    directions: [
      "🚶 25 min walk",
      "🚌 Take bus 54 towards Kjelsås stasjon, get off at Bjørvika, then walk about 3 minutes.",
    ],
    description:
      "Madonna is one of my favourite restaurants in Oslo, located right next to the MUNCH Museum in Bjørvika. This modern bistro serves creative dishes inspired by flavours from around the world, using seasonal ingredients in a relaxed and welcoming setting. It's featured in the Michelin Guide, but still feels unpretentious and perfect for a long dinner with friends. In the summer, the outdoor seating is a great place to enjoy the evening.",
  },
  {
    name: "Delicatessen",
    category: "Restaurants",
    image: "/favorites-delicatessen.jpg",
    mapsQuery: "Delicatessen Oslo",
    directions: [
      "🚶 40 min walk",
      "🚌 Take bus 54 towards Kjelsås stasjon, get off at Jakob kirke, then walk about 3 minutes.",
    ],
    description:
      "Delicatessen is one of Oslo's most popular tapas restaurants and a great place to share a meal with friends or family. The menu features a wide selection of authentic Spanish tapas, from classic favourites to seasonal specials, all served in a lively and relaxed atmosphere. It's especially popular in the evenings, so booking a table in advance is recommended.",
  },
  {
    name: "Fuglen Coffee Roasters",
    category: "Cafés",
    image: "/favorites-fuglen.jpg",
    directions: [
      "🚶 10 min walk",
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
      "🚶 15 min walk",
      "🚌 Take bus 54 towards Kjelsås stasjon, get off at St Halvards gate, then walk 4–5 minutes.",
    ],
    description:
      "Only 15 minutes from the apartment, Galgen is one of my favorite nearby places. It's perfect for lunch or dinner, a drink on the outdoor terrace in the summer, or a cozy hot chocolate during the winter.",
  },
  {
    name: "Kruttverket",
    category: "Cafés",
    images: ["/favorites-kroloftet.jpg", "/favorites-kruttverket-v2.jpg"],
    mapsQuery: "Kruttverket Oslo",
    directions: [
      "🚶 Walk through Svartdalsparken for about 15 minutes. The scenic path follows the river all the way to Kruttverket.",
    ],
    description:
      "Kruttverket is one of my favourite local spots and well worth the walk through Svartdalsparken. During the day, it's a cozy café serving excellent coffee and freshly baked pastries, while in the evenings it becomes a relaxed bar and cultural venue. They host live music, talks, workshops and community events throughout the year, including live jazz on many Sunday evenings. You can also book a sauna by the river, making it a perfect place to spend an afternoon or evening. For upcoming events and more information, visit their website.",
  },
  {
    name: "Tim Wendelboe",
    category: "Cafés",
    image: "/favorites-tim-wendelboe.jpg",
    mapsQuery: "Tim Wendelboe Oslo",
    directions: ["🚌 Take bus 54 to Møllerveien, then walk 10 minutes."],
    description:
      "If you're serious about coffee, this is one of the best places to visit in Oslo. Tim Wendelboe is world-renowned for its award-winning coffee and relaxed, minimalist atmosphere. It's a small café with a big reputation, perfect for a carefully brewed filter coffee or espresso.",
  },
  {
    name: "Håndbakt",
    category: "Cafés",
    image: "/favorites-handbakt-v2.jpg",
    mapsQuery: "Håndbakt Oslo",
    directions: ["🚶 20 min walk"],
    description:
      "A cosy artisan bakery tucked away in Kjølberggata, serving excellent coffee, freshly baked bread and pastries. They offer a great selection of vegan baked goods, and their weekend brunch is well worth a visit. It's a bit hidden away, but definitely worth seeking out.",
  },
  {
    name: "KUMI",
    category: "Cafés",
    image: "/favorites-kumi.jpg",
    mapsQuery: "KUMI Oslobukta",
    directions: [
      "🚶 20–25 min walk",
      "🚌 Take bus 54 towards Kjelsås stasjon, get off at Bjørvika, then walk about 5 minutes.",
    ],
    description:
      "KUMI is a beautiful organic café and restaurant serving modern vegetarian and vegan comfort food inspired by Japanese and Nordic flavours. It's one of my favourite places for brunch or lunch, with excellent coffee, fresh juices, mocktails and a carefully selected menu of wine, beer and cocktails. The bright interior and sunny outdoor seating in Oslobukta make it a perfect place to relax after exploring the Opera House and MUNCH Museum.",
  },
  {
    name: "Hakone",
    category: "Cafés",
    image: "/favorites-hakone.jpg",
    mapsQuery: "Hakone Coffee Oslo",
    directions: [
      "🚶 40 min walk",
      "🚌 Take bus 54 towards Jernbanetorget and get off at Storgata or Jernbanetorget. The nearest Hakone is just a short walk from both stops.",
    ],
    description:
      "Hakone is one of my favourite coffee chains in Oslo, with several locations across the city. Inspired by Japanese coffee culture, it combines minimalist design with excellent specialty coffee and high-quality pastries. If you're looking for a quick coffee to go or a peaceful place to take a break, Hakone is always a great choice. Don't miss their popular pistachio croissant if it's available!",
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
    name: "BLÅ",
    category: "Bars",
    image: "/favorites-bla-v2.jpg",
    mapsQuery: "Blå Oslo",
    directions: [
      "🚶 45 min walk",
      "🚌 Take bus 54 towards Kjelsås stasjon, get off at Møllerveien, then walk about 3 minutes.",
    ],
    description:
      "BLÅ is one of Oslo's most iconic live music venues, located along the Akerselva river. It's known for its diverse concert programme, featuring everything from jazz and electronic music to hip-hop and international artists. On Sundays, they host live concerts, and the surrounding area often comes alive with markets, food stalls and a lively atmosphere. It's the perfect place to experience Oslo's creative and alternative side, whether you're stopping by for a drink or a night of live music.",
  },
  {
    name: "Oslo Islands",
    category: "Activities",
    image: "/favorites-oslo-islands-v2.jpg",
    mapsQuery: "Aker Brygge, Oslo",
    directions: [
      "🚌 Take bus 70 from Kværner to Nationaltheatret, then walk about 5 minutes to Aker Brygge, where the island ferries depart.",
    ],
    description:
      "One of my favourite things to do in Oslo is visiting the islands in the Oslo Fjord. They're perfect for a relaxing day surrounded by nature, whether you want to go for a walk, have a picnic, swim, or simply enjoy the peaceful atmosphere. They're worth visiting from spring through autumn. The island ferries are part of the Ruter public transport system, so you can use a regular bus ticket - no extra ferry ticket is needed. You can also hop on and off the ferries to explore several islands in one day.",
    recommendations: [
      {
        name: "Hovedøya",
        mapsQuery: "Hovedøya, Oslo",
        description:
          "Beautiful walking trails, historic ruins, swimming spots and a cosy café.",
      },
      {
        name: "Gressholmen",
        mapsQuery: "Gressholmen, Oslo",
        description:
          "Peaceful island with scenic walking paths and a charming waterfront café/restaurant.",
      },
      {
        name: "Langøyene",
        mapsQuery: "Langøyene, Oslo",
        description:
          "A large island with one of Oslo's best sandy beaches, plenty of space and great for families with children.",
      },
    ],
  },
  {
    name: "Botanical Garden",
    category: "Activities",
    image: "/favorites-botanical-garden.jpg",
    mapsQuery: "Botanical Garden Oslo",
    directions: [
      "🚶 30 min walk",
      "🚌 Walk about 10 minutes to Galgeberg, then take bus 20 to Tøyenparken.",
    ],
    description:
      "Botanical Garden is one of Oslo's most beautiful green spaces and a perfect place for a relaxing walk. With thousands of plants from around the world, peaceful ponds and colourful seasonal flowers, it's a lovely escape from the city. Entry is free all year round.",
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
    name: "Ekebergparken",
    category: "Activities",
    image: "/favorites-ekebergparken.jpg",
    mapsQuery: "Ekebergparken Oslo",
    directions: [
      "🚶 30–35 min walk",
      "🚌 Walk about 5 minutes to Kværner, then take bus 34 to Ekeberg Camping.",
    ],
    description:
      "Ekebergparken is one of Oslo's most beautiful places for a walk, combining nature, contemporary art and spectacular views over the city and the Oslofjord. Along the trails you'll discover sculptures by internationally renowned artists, peaceful forest paths and panoramic viewpoints. If you're visiting in the evening, don't miss the impressive underground light installations by James Turrell. Best of all, the park is free to visit and open all year round.",
  },
  {
    name: "Korketrekkeren",
    category: "Activities",
    image: "/favorites-korketrekkeren-v2.jpg",
    mapsQuery: "Korketrekkeren Oslo",
    directions: [
      "🚌 Take bus 54 towards Jernbanetorget. From Jernbanetorget, take Metro Line 1 to Frognerseteren. The toboggan run starts just below the metro station.",
    ],
    description:
      "A winter favourite! Korketrekkeren is one of Oslo's most popular winter activities. Rent a sled (or bring your own) and enjoy a thrilling 2 km ride through the forest down to Midtstuen. From there, simply take the metro back to Frognerseteren and do it all over again. Sleds and helmets can be rented near Frognerseteren station, and it's completely free if you bring your own sled. The run is open whenever there's enough snow, making it a fun experience for both families and adults.",
  },
  {
    name: "Vigelandsparken",
    category: "Activities",
    image: "/favorites-vigelandsparken.jpg",
    mapsQuery: "Vigelandsparken Oslo",
    directions: [
      "🚌 Walk about 10 minutes to Galgeberg, then take bus 20 towards Skøyen to Vigelandsparken. The journey takes about 25 minutes.",
    ],
    description:
      "One of Oslo's most famous attractions, featuring more than 200 sculptures by Gustav Vigeland set within the beautiful Frogner Park. It's the perfect place for a relaxing walk, a picnic, or simply enjoying one of the city's most beautiful green spaces.",
    tip: "After your visit, explore Bogstadveien for shopping or wander through Frogner, one of Oslo's most charming neighbourhoods, known for its cafés, beautiful architecture and boutique shops.",
  },
  {
    name: "Bygdøy",
    category: "Activities",
    image: "/favorites-bygdoy.jpg",
    imagePosition: "80% center",
    mapsQuery: "Bygdøy Oslo",
    directions: [
      "🚌 Take bus 54 to Jernbanetorget, then bus 30 to Ro. The journey takes about 45 minutes in total.",
    ],
    description:
      "Bygdøy is one of my favourite areas in Oslo. Often called \"Museum Island\", it's home to some of Norway's most popular museums, including the Fram Museum, Kon-Tiki Museum and the Norwegian Museum of Cultural History. The peninsula also offers beautiful walking trails, beaches and cafés, making it easy to spend an entire day there.",
  },
  {
    name: "Oslo Summer Park (Skimore Oslo Climbing Park)",
    category: "Activities",
    image: "/favorites-oslo-summer-park.jpg",
    mapsQuery: "Skimore Oslo Climbing Park",
    directions: [
      "🚌 Take bus 54 to Jernbanetorget, then Metro Line 1 (Frognerseteren) to Voksenkollen or Tryvann, followed by a short walk.",
    ],
    description:
      "Climbing park in Tryvann and one of Scandinavia's largest, with nine courses and over 150 obstacles high up in the trees. Whether you're visiting with family or looking for a fun challenge, you'll find everything from beginner courses to thrilling zip-lines and routes up to 20 metres above the ground.",
  },
  {
    name: "Oslo Winter Park (Skimore Oslo)",
    category: "Activities",
    image: "/favorites-oslo-winter-park.jpg",
    mapsQuery: "Skimore Oslo",
    directions: [
      "🚌 Take bus 54 to Jernbanetorget, then Metro Line 1 (Frognerseteren) to Voksenkollen or Tryvann, followed by a short walk.",
      "❄️ In winter, a connecting Ruter bus runs from Voksenkollen metro station up to Skimore Oslo (Tryvann) - every other train on weekdays, every train on weekends. Without the bus, it's about a 15-minute walk up to the resort.",
    ],
    description:
      "Ski resort in Tryvann and Oslo's largest, with 18 slopes and 11 lifts offering runs for both beginners and experienced skiers. Many slopes are floodlit in the evenings, making it a great place for night skiing. Ski and snowboard equipment can be rented on-site.",
  },
];

function PlaceCard({ place }: { place: Place }) {
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    place.mapsQuery ?? place.name
  )}`;

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-md shadow-black/5 dark:bg-zinc-900">
      <div className="relative flex aspect-[4/3] w-full gap-0.5 bg-gradient-to-br from-stone-200 to-stone-300 dark:from-zinc-800 dark:to-zinc-900">
        {place.images ? (
          place.images.map((src) => (
            <div key={src} className="relative h-full flex-1">
              <Image src={src} alt={place.name} fill className="object-cover" />
            </div>
          ))
        ) : (
          place.image && (
            <Image
              src={place.image}
              alt={place.name}
              fill
              className="object-cover"
              style={place.imagePosition ? { objectPosition: place.imagePosition } : undefined}
            />
          )
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

        {place.recommendations && (
          <div className="mt-4">
            <p className="text-xs font-semibold tracking-widest text-stone-400 dark:text-zinc-500">
              MY RECOMMENDATIONS
            </p>
            <ul className="mt-2 space-y-2">
              {place.recommendations.map((rec) => (
                <li key={rec.name} className="text-sm leading-6 text-stone-600 dark:text-zinc-300">
                  <span className="font-medium text-zinc-900 dark:text-zinc-50">
                    {rec.name}
                  </span>{" "}
                  - {rec.description}
                  {rec.mapsQuery && (
                    <>
                      {" "}
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(rec.mapsQuery)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whitespace-nowrap font-medium text-zinc-900 underline underline-offset-2 dark:text-zinc-50"
                      >
                        View on map
                      </a>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {place.tip && (
          <div className="mt-4 flex items-start gap-3 rounded-xl bg-stone-100 p-3 dark:bg-zinc-800">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white dark:bg-zinc-900">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-rose-400">
                <path d="M11.25 4.5c-1.6-2-5.3-1.2-5.9 1.6-.5 2.4 1.6 4.5 5.9 8.4 4.3-3.9 6.4-6 5.9-8.4-.6-2.8-4.3-3.6-5.9-1.6Z" />
              </svg>
            </span>
            <p className="text-sm leading-5 text-stone-600 dark:text-zinc-300">
              <span className="font-medium text-zinc-900 dark:text-zinc-50">
                Tip:
              </span>{" "}
              {place.tip}
            </p>
          </div>
        )}

        {!place.recommendations && (
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
        )}

        {place.website && (
          <a
            href={place.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-full border border-stone-200 py-3 text-sm font-medium text-zinc-900 transition-colors hover:bg-stone-50 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM3.6 9h16.8M3.6 15h16.8M11.5 3a15.3 15.3 0 0 0 0 18M12.5 3a15.3 15.3 0 0 1 0 18"
              />
            </svg>
            Visit Website
          </a>
        )}
      </div>
    </div>
  );
}

export default function FavoritesPage() {
  const [active, setActive] = useState<Filter>("All");
  const visible = places.filter((p) => active === "All" || p.category === active);

  return (
    <div className="flex flex-1 flex-col bg-stone-50 dark:bg-zinc-950">
      <div className="mx-auto flex w-full flex-1 flex-col px-6 pt-6 pb-10 md:max-w-xl">
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
          Where I actually go - restaurants, cafés, bars and a few things
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
