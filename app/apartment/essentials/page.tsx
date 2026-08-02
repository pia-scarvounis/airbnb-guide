import ApartmentDetailLayout from "../DetailLayout";

const bold = "font-medium text-zinc-900 dark:text-zinc-50";

const steps = [
  "Press Power.",
  "Select the cooking zone.",
  "Choose a heat level between 1–9.",
];

const items = [
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
            The <strong className={bold}>top shelf</strong> of the fridge is
            mine too.
          </li>
          <li>Everything else is yours, including basic staples in the kitchen.</li>
        </ul>
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
        <p className="mt-2">
          Please don&apos;t force the window if it doesn&apos;t open
          immediately - the latch needs to be lifted first.
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
        <p className={bold}>Pots & pans</p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5">
          <li>
            Frying pans and saucepans are{" "}
            <strong className={bold}>inside the oven</strong>.
          </li>
          <li>Extra cookware is under the sink.</li>
          <li>
            Please wash frying pans <strong className={bold}>by hand</strong> -
            not in the dishwasher.
          </li>
        </ul>

        <p className={`mt-5 ${bold}`}>Using the frying pan</p>
        <p className="mt-2">
          Let it heat up first. Just a minute makes all the difference -
          food won&apos;t stick.
        </p>

        <p className={`mt-5 ${bold}`}>Boiling water</p>
        <p className="mt-2">Use a saucepan on the induction hob.</p>
        <ol className="mt-3 space-y-2">
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
    title: "Wooden coffee table",
    bg: "bg-teal-100 dark:bg-teal-900/30",
    fg: "text-teal-700 dark:text-teal-300",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 9h16.5M6 9v10.5M18 9v10.5M3 20.25h18M9 4.5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 4.5V9H9V4.5Z"
      />
    ),
    body: (
      <p>
        Please use coasters or placemats on the wooden table in the living
        room to help protect the surface.
      </p>
    ),
  },
];

export default function EssentialsPage() {
  return (
    <ApartmentDetailLayout title="Home Essentials">
      <p>
        Good to know information to help you feel at home and make the most
        of your stay.
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
    </ApartmentDetailLayout>
  );
}
