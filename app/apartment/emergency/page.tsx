import Image from "next/image";
import ApartmentDetailLayout from "../DetailLayout";

const fireIcon = (
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M9.75 3.75h4.5M12 3.75v3M8.25 8.25h7.5l-.75 12h-6l-.75-12ZM10.5 8.25V6.75a1.5 1.5 0 0 1 3 0v1.5"
  />
);

const numbers = [
  {
    label: "Fire",
    number: "110",
    icon: fireIcon,
  },
  {
    label: "Police",
    number: "112",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3.75c2.25 1.5 4.5 1.75 7.5 1.75 0 8.25-3.75 12.75-7.5 14.75-3.75-2-7.5-6.5-7.5-14.75 3 0 5.25-.25 7.5-1.75Z"
      />
    ),
  },
  {
    label: "Ambulance",
    number: "113",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 8.25h15v10.5h-15V8.25ZM9 8.25V6a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 6v2.25M12 11.25v4.5M9.75 13.5h4.5"
      />
    ),
  },
];

export default function EmergencyPage() {
  return (
    <ApartmentDetailLayout title="Emergency">
      <div className="flex items-start gap-3 rounded-2xl bg-stone-100 p-4 dark:bg-zinc-800">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white dark:bg-zinc-900">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-stone-600 dark:text-zinc-300">
            {fireIcon}
          </svg>
        </span>
        <div>
          <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
            Fire extinguisher
          </p>
          <p className="mt-1 text-sm leading-5 text-stone-600 dark:text-zinc-300">
            You&apos;ll find it in the first wardrobe in the bedroom.
          </p>
        </div>
      </div>

      <div className="relative mt-4 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-stone-200 dark:bg-zinc-800">
        <Image
          src="/emergency-extinguisher-v2.jpg"
          alt="Fire extinguisher"
          fill
          className="object-cover object-bottom"
        />
      </div>

      <div className="mt-8 grid grid-cols-3 gap-2">
        {numbers.map((item) => (
          <a
            key={item.label}
            href={`tel:${item.number}`}
            className="flex flex-col items-center gap-2 rounded-2xl bg-white p-3 text-center shadow-md shadow-black/5 transition-colors hover:bg-stone-50 dark:bg-zinc-900 dark:hover:bg-zinc-800"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-100 dark:bg-zinc-800">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-stone-600 dark:text-zinc-300">
                {item.icon}
              </svg>
            </span>
            <span className="text-xs font-medium tracking-wide text-stone-500 dark:text-zinc-400">
              {item.label.toUpperCase()}
            </span>
            <span className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              {item.number}
            </span>
          </a>
        ))}
      </div>
    </ApartmentDetailLayout>
  );
}
