import ApartmentDetailLayout from "../DetailLayout";

const items = [
  {
    title: "Private belongings",
    description:
      "Some cupboards and drawers are marked with yellow tape and contain my personal belongings. Everything else is available for you to use.",
    bg: "bg-amber-100 dark:bg-amber-900/30",
    fg: "text-amber-700 dark:text-amber-300",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 3.75h15v16.5h-15V3.75ZM12 3.75v16.5M9 12v.01M15 12v.01"
      />
    ),
  },
  {
    title: "Soaps & toiletries",
    description:
      "Feel free to use the shampoo, conditioner, shower gel and hand soap in the bathroom.",
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
    fg: "text-emerald-700 dark:text-emerald-300",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 3.75h4.5M10.5 3.75v2.25L9 7.5v11.25a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5V7.5L13.5 6V3.75"
      />
    ),
  },
  {
    title: "Towels",
    description:
      "If you're staying for several days, you're welcome to use additional towels if needed.",
    bg: "bg-sky-100 dark:bg-sky-900/30",
    fg: "text-sky-700 dark:text-sky-300",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 8.25h15M4.5 12h15M4.5 15.75h15"
      />
    ),
  },
  {
    title: "Pots & pans",
    description:
      "Frying pans and saucepans are stored inside the oven, with extra cookware in the cupboard to the left of the sink.",
    bg: "bg-violet-100 dark:bg-violet-900/30",
    fg: "text-violet-700 dark:text-violet-300",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12a6 6 0 1 0 12 0 6 6 0 0 0-12 0ZM16.5 12h4.5"
      />
    ),
  },
  {
    title: "Boiling water",
    description:
      "Use a saucepan on the induction hob: press the power button, select the cooking zone, and choose a heat level from 1–9.",
    bg: "bg-orange-100 dark:bg-orange-900/30",
    fg: "text-orange-700 dark:text-orange-300",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 10.5h15v6a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-6ZM8.25 10.5V8.25M12 10.5V6.75M15.75 10.5V8.25"
      />
    ),
  },
  {
    title: "TV & streaming",
    description:
      "The TV is connected to Apple TV. Feel free to use my streaming services, or sign in to your own — just remember to sign out before you check out.",
    bg: "bg-slate-100 dark:bg-zinc-800",
    fg: "text-slate-700 dark:text-zinc-300",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 3.75h16.5v10.5H3.75zM8.25 21h7.5M12 14.25V21"
      />
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

      <div className="mt-4 flex flex-col gap-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex gap-3 rounded-2xl bg-white p-4 shadow-md shadow-black/5 dark:bg-zinc-900"
          >
            <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${item.bg}`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={item.fg}>
                {item.icon}
              </svg>
            </span>
            <div>
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                {item.title}
              </p>
              <p className="mt-0.5 text-sm leading-5 text-stone-600 dark:text-zinc-300">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </ApartmentDetailLayout>
  );
}
