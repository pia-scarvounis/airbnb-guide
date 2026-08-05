"use client";

import Link from "next/link";
import { useState } from "react";
import ApartmentDetailLayout from "../DetailLayout";

const bold = "font-medium text-zinc-900 dark:text-zinc-50";

const steps = [
  "Press Power.",
  "Select a cooking zone.",
  "Choose a heat level (1–9).",
];

const clockIcon = (
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M12 6.75V12l3.75 2.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  />
);

export default function EssentialsPage() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const items = [
    {
      title: "Check-in & Check-out",
      bg: "bg-violet-100 dark:bg-violet-900/30",
      fg: "text-violet-700 dark:text-violet-300",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
        />
      ),
      body: (
        <>
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="text-violet-500 dark:text-violet-300">
              {clockIcon}
            </svg>
            <span className="font-semibold text-violet-700 dark:text-violet-300">
              Check-in
            </span>
          </div>
          <p className="mt-1 pl-6">From 3:00 PM.</p>

          <div className="mt-4 flex items-center gap-2 border-t border-stone-100 pt-4 dark:border-zinc-800">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="text-violet-500 dark:text-violet-300">
              {clockIcon}
            </svg>
            <span className="font-semibold text-violet-700 dark:text-violet-300">
              Check-out
            </span>
          </div>
          <p className="mt-1 pl-6">
            Before 11:00 AM, unless we&apos;ve agreed otherwise.
          </p>

          <button
            type="button"
            onClick={() => setCheckoutOpen(true)}
            className="mt-4 flex items-center gap-1 border-t border-stone-100 pt-4 font-medium text-violet-700 dark:border-zinc-800 dark:text-violet-300"
          >
            View check-out instructions
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </>
      ),
    },
    {
      title: "Private belongings",
      bg: "bg-amber-100 dark:bg-amber-900/30",
      fg: "text-amber-700 dark:text-amber-300",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 3.75h15v16.5h-15V3.75ZM12 3.75v16.5M9 12v.01M15 12v.01"
        />
      ),
      body: (
        <>
          <p>I live here myself, so a few areas are set aside for personal items.</p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5">
            <li>
              <strong className={bold}>Yellow tape</strong> marks private
              cupboards and drawers.
            </li>
            <li>
              You may notice some of my groceries in the fridge and kitchen
              cupboards. Please feel free to use any basic ingredients if
              you need them.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Shoes indoors",
      bg: "bg-rose-100 dark:bg-rose-900/30",
      fg: "text-rose-700 dark:text-rose-300",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 16.5h16.5v2.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V16.5ZM3.75 16.5c0-3 1.5-4.5 3.75-6 1.5-1 2.25-2.25 2.625-3.375.198-.594.897-.816 1.42-.463C13.313 7.85 15 9.276 15 10.5c1.5 0 3.75.75 5.25 3v3"
        />
      ),
      body: (
        <>
          <p>
            In Norway, it&apos;s customary to remove your shoes when entering
            a home.
          </p>
          <p className="mt-2">
            This helps keep the apartment clean and protects the wooden
            floors - thank you for helping me take care of my home.
          </p>
        </>
      ),
    },
    {
      title: "Bathroom",
      bg: "bg-emerald-100 dark:bg-emerald-900/30",
      fg: "text-emerald-700 dark:text-emerald-300",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.75h4.5M10.5 3.75v2.25L9 7.5v11.25a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5V7.5L13.5 6V3.75"
        />
      ),
      body: (
        <>
          <p>
            You&apos;re welcome to use the soaps, shampoo and other
            toiletries in the bathroom.
          </p>
          <p className="mt-3">
            Staying for a few days? Feel free to grab extra towels from
            under the sink if you need them.
          </p>
        </>
      ),
    },
    {
      title: "Windows",
      bg: "bg-sky-100 dark:bg-sky-900/30",
      fg: "text-sky-700 dark:text-sky-300",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 3.75h15v16.5h-15V3.75ZM4.5 12h15M12 3.75v16.5"
        />
      ),
      body: (
        <>
          <p>The windows have a child safety catch.</p>
          <p className="mt-2">
            To open them fully, gently lift the small{" "}
            <strong className={bold}>black metal latch</strong> on the
            right-hand side of the window while opening it. Once released,
            the window can open all the way.
          </p>
        </>
      ),
    },
    {
      title: "Cooking",
      bg: "bg-orange-100 dark:bg-orange-900/30",
      fg: "text-orange-700 dark:text-orange-300",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12a6 6 0 1 0 12 0 6 6 0 0 0-12 0ZM16.5 12h4.5"
        />
      ),
      body: (
        <>
          <p>
            The kitchen has an induction hob, so you can boil water
            directly in a saucepan - there&apos;s no kettle.
          </p>

          <p className={`mt-5 ${bold}`}>Pots & Pans</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5">
            <li>
              Frying pans are <strong className={bold}>inside the oven</strong>.
            </li>
            <li>Extra cookware is under the sink.</li>
            <li>
              Please wash frying pans <strong className={bold}>by hand</strong>.
            </li>
          </ul>

          <p className={`mt-5 ${bold}`}>Frying Pan Tip</p>
          <div className="mt-2 rounded-xl bg-orange-50 p-3 dark:bg-orange-900/20">
            <div className="flex items-center gap-1.5">
              <span className="text-base">💡</span>
              <span className={bold}>Pro tip</span>
            </div>
            <p className="mt-1">
              Let the pan heat up for about 1 minute before adding food.
              This helps prevent food from sticking and gives the best
              cooking results.
            </p>
          </div>

          <p className={`mt-5 ${bold}`}>Using the Induction Hob</p>
          <ol className="mt-2 space-y-2">
            {steps.map((step, i) => (
              <li key={step} className="flex items-center gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-stone-200 text-xs font-semibold text-stone-600 dark:bg-zinc-800 dark:text-zinc-300">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </>
      ),
    },
    {
      title: "TV & Streaming",
      bg: "bg-slate-100 dark:bg-zinc-800",
      fg: "text-slate-700 dark:text-zinc-300",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3.75h16.5v10.5H3.75zM8.25 21h7.5M12 14.25V21"
        />
      ),
      body: (
        <>
          <p>
            The TV is connected to <strong className={bold}>Apple TV</strong>.
          </p>
          <p className="mt-2">
            Use my streaming services, or sign in with your own - just
            remember to sign out before you leave.
          </p>
        </>
      ),
    },
    {
      title: "Tap water",
      bg: "bg-cyan-100 dark:bg-cyan-900/30",
      fg: "text-cyan-700 dark:text-cyan-300",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3.75c3 3.75 6 7.386 6 10.875a6 6 0 1 1-12 0c0-3.489 3-7.125 6-10.875Z"
        />
      ),
      body: (
        <>
          <p>
            <strong className={bold}>Norwegian tap water</strong> is among the
            cleanest in the world.
          </p>
          <p className="mt-2">💙 Refill your bottle anytime, straight from the tap.</p>
        </>
      ),
    },
    {
      title: "Smoking",
      bg: "bg-emerald-100 dark:bg-emerald-900/30",
      fg: "text-emerald-700 dark:text-emerald-300",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 15.75h13.5v2.25H3v-2.25ZM18 15.75h3v2.25h-3v-2.25ZM9 9.75c1.125-1.125-.375-1.875.75-3M13.5 9.75c1.125-1.125-.375-1.875.75-3"
        />
      ),
      body: (
        <>
          <p>Smoking is not permitted inside the apartment.</p>
          <p className="mt-2">
            You&apos;re welcome to smoke on the{" "}
            <strong className={bold}>balcony</strong>. Please dispose of
            cigarette butts in the bin.
          </p>
        </>
      ),
    },
  ];

  return (
    <ApartmentDetailLayout title="Home Essentials">
      <p>
        Everything you need to know to make the most of your stay,
        including practical information and a few helpful house
        guidelines.
      </p>

      <div className="mt-6 flex flex-col gap-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex gap-4 rounded-2xl bg-white p-5 shadow-md shadow-black/5 dark:bg-zinc-900"
          >
            <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${item.bg}`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={item.fg}>
                {item.icon}
              </svg>
            </span>
            <div className="min-w-0 text-sm leading-6 text-stone-600 dark:text-zinc-300">
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                {item.title}
              </p>
              <div className="mt-2">{item.body}</div>
            </div>
          </div>
        ))}
      </div>

      {checkoutOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-0 sm:items-center sm:p-6"
          onClick={() => setCheckoutOpen(false)}
        >
          <div
            className="max-h-[85vh] w-full max-w-md overflow-y-auto rounded-t-3xl bg-white p-6 shadow-2xl sm:rounded-3xl dark:bg-zinc-900"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-50 dark:bg-amber-900/20">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-amber-700 dark:text-amber-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 3.75h6v16.5H6zM12 12h6M15.75 9l3 3-3 3" />
                  </svg>
                </span>
                <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  Check-out
                </p>
              </div>
              <button
                type="button"
                onClick={() => setCheckoutOpen(false)}
                aria-label="Close"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-stone-400 transition-colors hover:bg-stone-100 dark:text-zinc-500 dark:hover:bg-zinc-800"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>
            </div>

            <p className="mt-3 pl-14 text-sm leading-6 text-stone-500 dark:text-zinc-400">
              Before you leave, please:
            </p>

            <div className="mt-4 flex flex-col">
              {[
                {
                  title: "Take out the rubbish",
                  description:
                    "If you've stayed for 3 nights or more, I'd really appreciate it if you could take out the rubbish before checking out.",
                  bg: "bg-emerald-50 dark:bg-emerald-900/20",
                  fg: "text-emerald-700 dark:text-emerald-300",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 7.5h15M9.75 7.5V5.25A1.5 1.5 0 0 1 11.25 3.75h1.5a1.5 1.5 0 0 1 1.5 1.5V7.5M6.75 7.5v11.25a1.5 1.5 0 0 0 1.5 1.5h7.5a1.5 1.5 0 0 0 1.5-1.5V7.5"
                    />
                  ),
                  link: { label: "Recycling & Trash", href: "/apartment/recycling" },
                },
                {
                  title: "Used towels",
                  description: "Leave used towels on the bathroom floor.",
                  bg: "bg-amber-50 dark:bg-amber-900/20",
                  fg: "text-amber-700 dark:text-amber-300",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 3.75h10.5v15a1.5 1.5 0 0 1-1.5 1.5H7.5A1.5 1.5 0 0 1 6 18.75V3.75ZM16.5 6.75h1.5a1.5 1.5 0 0 1 1.5 1.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-1.5"
                    />
                  ),
                },
                {
                  title: "Windows",
                  description: "Close all windows.",
                  bg: "bg-sky-50 dark:bg-sky-900/20",
                  fg: "text-sky-700 dark:text-sky-300",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 3.75h15v16.5h-15V3.75ZM4.5 12h15M12 3.75v16.5"
                    />
                  ),
                },
                {
                  title: "Balcony door",
                  description: "Lock the balcony door.",
                  bg: "bg-amber-50 dark:bg-amber-900/20",
                  fg: "text-amber-700 dark:text-amber-300",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3.75h9v16.5h-9zM15.75 12h1.5"
                    />
                  ),
                },
                {
                  title: "Apartment door",
                  description: "Lock the apartment door.",
                  bg: "bg-slate-50 dark:bg-zinc-800",
                  fg: "text-slate-700 dark:text-zinc-300",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 10.5V7.5a5.25 5.25 0 0 1 10.5 0v3M5.25 10.5h13.5v9H5.25v-9Z"
                    />
                  ),
                },
                {
                  title: "Key",
                  description:
                    'Leave the key in mailbox no. 7 (bottom row, U1), floor -1. The label says "Pia Christina Scarvounis". Please check out in the Airbnb app or send me a quick message when you\'ve left.',
                  bg: "bg-emerald-50 dark:bg-emerald-900/20",
                  fg: "text-emerald-700 dark:text-emerald-300",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                    />
                  ),
                },
              ].map((step, i, arr) => (
                <div
                  key={step.title}
                  className={`flex gap-3 py-4 ${i < arr.length - 1 ? "border-b border-stone-100 dark:border-zinc-800" : ""} ${i === 0 ? "pt-3" : ""}`}
                >
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${step.bg}`}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={step.fg}>
                      {step.icon}
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                      {step.title}
                    </p>
                    <p className="mt-0.5 text-sm leading-6 text-stone-600 dark:text-zinc-300">
                      {step.description}
                    </p>
                    {step.link && (
                      <Link
                        href={step.link.href}
                        className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-800 transition-colors hover:bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-300"
                      >
                        {step.link.label}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-3 rounded-2xl bg-amber-50 p-4 dark:bg-amber-900/20">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="shrink-0 text-amber-700 dark:text-amber-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5c-1.6-2-5.3-1.2-5.9 1.6-.5 2.4 1.6 4.5 5.9 8.4 4.3-3.9 6.4-6 5.9-8.4-.6-2.8-4.3-3.6-5.9-1.6Z" />
              </svg>
              <p className="text-sm leading-6 text-stone-700 dark:text-zinc-300">
                Thank you, and I hope you had a wonderful stay!
              </p>
            </div>
          </div>
        </div>
      )}
    </ApartmentDetailLayout>
  );
}
