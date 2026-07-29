import ApartmentDetailLayout from "../DetailLayout";

const steps = [
  {
    title: "Load",
    description: "Load your dishes into the dishwasher.",
  },
  {
    title: "Add tablet",
    description:
      "Place one dishwasher tablet directly in the bottom of the dishwasher. Please do not use the detergent compartment on the inside of the door, as it does not open during the wash cycle.",
  },
  {
    title: "Start",
    description:
      "Close the door and press the Start button (the button furthest to the left on the control panel).",
  },
];

export default function DishwasherPage() {
  return (
    <ApartmentDetailLayout
      title="Dishwasher"
      image="/apartment-dishwasher-tablets.jpg"
      imageFit="contain"
    >
      <p>
        The dishwasher tablets are located in the cupboard above the oven.
      </p>

      <ol className="mt-4 space-y-4">
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

      <div className="mt-6 rounded-xl bg-stone-100 p-3 text-sm text-stone-600 dark:bg-zinc-800 dark:text-zinc-300">
        When the cycle has finished, I usually leave the door slightly open
        for a little while to let the dishes air-dry before unloading.
      </div>
    </ApartmentDetailLayout>
  );
}
