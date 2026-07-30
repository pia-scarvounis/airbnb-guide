import Image from "next/image";
import ApartmentDetailLayout from "../DetailLayout";

const steps = [
  {
    title: "Turn it on",
    description: "Press the button by the power outlet to turn the machine on.",
  },
  {
    title: "Power on the machine",
    description: "Press the power button on the machine itself to switch it on.",
  },
  {
    title: "Fill water",
    description:
      "Pull out or open the rear tank and fill it with fresh, cold water.",
  },
  {
    title: "Add coffee",
    description:
      "Snap the single or double filter basket into the portafilter arm, add finely ground coffee, and pack it down flat with the tamper scoop.",
  },
  {
    title: "Lock in",
    description:
      "Align the portafilter with the machine's arrow icon, insert it, and twist the handle firmly to the right/center until secure.",
  },
  {
    title: "Brew",
    description: "Place your cup on the tray and press the single or double cup button.",
  },
  {
    title: "Steam milk",
    description:
      "Fill the milk pitcher with cold milk. Press the steam button and wait until the light stays on steadily. Then open the steam valve.",
  },
];

export default function CoffeeMachinePage() {
  return (
    <ApartmentDetailLayout title="Coffee Machine">
      <ol className="space-y-4">
        {steps.map((step, i) => (
          <li key={step.title} className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-200 text-xs font-semibold text-stone-600 dark:bg-zinc-800 dark:text-zinc-300">
              {i + 1}
            </span>
            <p>
              <span className="font-medium text-zinc-900 dark:text-zinc-50">
                {step.title}:
              </span>{" "}
              {step.description}
            </p>
          </li>
        ))}
      </ol>

      <div className="relative mt-4 aspect-[4/5] w-full overflow-hidden rounded-2xl bg-stone-50 dark:bg-zinc-800">
        <Image
          src="/apartment-coffee.jpg"
          alt="Coffee machine"
          fill
          className="object-contain p-10"
        />
      </div>

      <div className="mt-6 rounded-xl bg-stone-100 p-3 text-sm text-stone-600 dark:bg-zinc-800 dark:text-zinc-300">
        ☕ Buy coffee ground on the second-finest setting - Fuglen and most
        other cafés around town can grind it for you.
      </div>
    </ApartmentDetailLayout>
  );
}
