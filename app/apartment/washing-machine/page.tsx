import ApartmentDetailLayout from "../DetailLayout";

const steps = [
  {
    title: "Load",
    description: <>Load your laundry and close the door.</>,
  },
  {
    title: "Add detergent",
    description: (
      <>
        Add <strong className="font-medium text-zinc-900 dark:text-zinc-50">liquid detergent</strong> to
        the <strong className="font-medium text-zinc-900 dark:text-zinc-50">main wash compartment (II)</strong> in
        the detergent drawer.
      </>
    ),
  },
  {
    title: "Select program",
    description: (
      <>
        Turn the dial and select{" "}
        <strong className="font-medium text-zinc-900 dark:text-zinc-50">MixLoad 69 min</strong>{" "}
        (recommended for most everyday laundry).
      </>
    ),
  },
  {
    title: "Start",
    description: (
      <>
        Press the <strong className="font-medium text-zinc-900 dark:text-zinc-50">Start/Pause</strong> button
        to begin the cycle.
      </>
    ),
  },
];

export default function WashingMachinePage() {
  return (
    <ApartmentDetailLayout
      title="Washing Machine"
      image="/apartment-washing-machine.jpg"
      imageFit="contain"
    >
      <p>The washing machine is located in the bathroom.</p>

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

      <p className="mt-4">
        A drying rack is available on the{" "}
        <strong className="font-medium text-zinc-900 dark:text-zinc-50">balcony</strong> if
        you would like to air-dry your clothes.
      </p>

      <div className="mt-6 rounded-xl bg-stone-100 p-3 text-sm text-stone-600 dark:bg-zinc-800 dark:text-zinc-300">
        When the cycle has finished, please leave the door and detergent
        drawer slightly open to allow the machine to dry and prevent
        moisture build-up.
      </div>
    </ApartmentDetailLayout>
  );
}
