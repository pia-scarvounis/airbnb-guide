import Image from "next/image";
import ApartmentDetailLayout from "../DetailLayout";

const bins = [
  {
    name: "General waste",
    description: "Regular household trash.",
    dot: "bg-zinc-400",
  },
  {
    name: "Green container",
    description: "Food waste.",
    dot: "bg-emerald-500",
  },
  {
    name: "Purple bag",
    description: "Plastic packaging.",
    dot: "bg-violet-400",
  },
];

const directions = [
  "Go down one floor.",
  "Walk through the backyard.",
  "Follow the path past the playground to the right.",
  "Then turn left.",
  'The door is marked "Avfall Pelton BRL".',
];

export default function RecyclingPage() {
  return (
    <ApartmentDetailLayout title="Recycling & Trash">
      <p>Under the kitchen sink you&apos;ll find three waste containers:</p>

      <div className="mt-4 flex flex-col gap-3">
        {bins.map((bin) => (
          <div
            key={bin.name}
            className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-md shadow-black/5 dark:bg-zinc-900"
          >
            <span className={`h-3 w-3 shrink-0 rounded-full ${bin.dot}`} />
            <div>
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                {bin.name}
              </p>
              <p className="text-sm text-stone-600 dark:text-zinc-300">
                {bin.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4">
        Please rinse plastic packaging before throwing it away, and thank
        you for helping sort the waste.
      </p>

      <div className="relative mt-4 aspect-[3/4] w-full overflow-hidden rounded-2xl bg-stone-200 dark:bg-zinc-800">
        <Image
          src="/recycling-bins.jpg"
          alt="Waste containers under the kitchen sink"
          fill
          className="object-cover"
        />
      </div>

      <p className="mt-8 font-medium text-zinc-900 dark:text-zinc-50">
        Where do you take out the trash?
      </p>
      <p className="mt-2">The waste room is located on Freserveien.</p>

      <p className="mt-4 font-medium text-zinc-900 dark:text-zinc-50">
        How to get there:
      </p>
      <ol className="mt-2 space-y-2">
        {directions.map((step, i) => (
          <li key={step} className="flex items-center gap-2">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-stone-200 text-xs font-semibold text-stone-600 dark:bg-zinc-800 dark:text-zinc-300">
              {i + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>

      <div className="mt-4 grid grid-cols-3 gap-2">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-stone-200 dark:bg-zinc-800">
          <Image
            src="/recycling-directions-1.jpg"
            alt="Follow the path through the backyard"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-stone-200 dark:bg-zinc-800">
          <Image
            src="/recycling-directions-2.jpg"
            alt="Turn left at the path junction"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-stone-200 dark:bg-zinc-800">
          <Image
            src="/recycling-directions-3.jpg"
            alt='The door marked "Avfall Pelton BRL"'
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-4 rounded-xl bg-stone-100 p-3 text-sm text-stone-600 dark:bg-zinc-800 dark:text-zinc-300">
        Remember to bring the key — the door is locked.
      </div>

      <p className="mt-8 font-medium text-zinc-900 dark:text-zinc-50">
        Deposit (Pant)
      </p>
      <p className="mt-2">You can either:</p>
      <ul className="mt-2 list-disc space-y-1.5 pl-5">
        <li>
          Return bottles and cans for deposit at the store yourself (keep
          the money or donate it), or
        </li>
        <li>
          Leave the deposit items in the kitchen, or collect them in a bag
          — and I&apos;ll take care of the rest.
        </li>
      </ul>
    </ApartmentDetailLayout>
  );
}
