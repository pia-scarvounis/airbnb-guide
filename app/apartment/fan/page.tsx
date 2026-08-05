import Image from "next/image";
import ApartmentDetailLayout from "../DetailLayout";

export default function FanPage() {
  return (
    <ApartmentDetailLayout title="Fan">
      <p>
        During the summer months, a fan is available in the bedroom. The
        remote control can be found on the bedside table.
      </p>
      <p className="mt-4 font-medium text-zinc-900 dark:text-zinc-50">
        How to use it:
      </p>
      <ul className="mt-2 list-disc space-y-1.5 pl-5">
        <li>Press the Power button to turn the fan on or off.</li>
        <li>Use the + / − buttons to choose between 12 speed levels.</li>
        <li>
          Press the horizontal oscillation button to make the fan move
          from side to side.
        </li>
        <li>
          Press the vertical oscillation button to make the fan move up
          and down.
        </li>
        <li>Use the Timer to set the fan to turn off automatically.</li>
      </ul>

      <div className="relative mt-4 aspect-[4/5] w-full overflow-hidden rounded-2xl bg-stone-50 dark:bg-zinc-800">
        <Image src="/apartment-fan-v2.jpg" alt="Fan" fill className="object-contain p-3" />
      </div>

      <p className="mt-4">
        Please turn the fan off when you leave the apartment, and leave the
        remote control on the bedside table when you check out.
      </p>
    </ApartmentDetailLayout>
  );
}
