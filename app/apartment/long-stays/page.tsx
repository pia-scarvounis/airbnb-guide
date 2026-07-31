import ApartmentDetailLayout from "../DetailLayout";

export default function LongStaysPage() {
  return (
    <ApartmentDetailLayout title="Long Stays">
      <p>
        If you&apos;re staying for a week or longer, here are a few extra
        things that may make your stay more comfortable.
      </p>

      <p className="mt-6 font-medium text-zinc-900 dark:text-zinc-50">
        🛏️ Fresh bed linen
      </p>
      <p className="mt-2">
        A spare set of bed linen is available in the wardrobe if you&apos;d
        like to change the sheets during your stay.
      </p>

      <p className="mt-6 font-medium text-zinc-900 dark:text-zinc-50">
        🧹 Cleaning
      </p>
      <p className="mt-2">
        A handheld vacuum cleaner and a Jif mop will be available in the
        living room (where the chest of drawers is normally located).
      </p>
      <p className="mt-3">
        The dust container can easily be emptied by removing the clear dust
        compartment.
      </p>
      <p className="mt-3">
        Please feel free to use them if you&apos;d like to freshen up the
        apartment during your stay.
      </p>

      <p className="mt-6 font-medium text-zinc-900 dark:text-zinc-50">
        🌿 Plants
      </p>
      <p className="mt-2">
        I&apos;d really appreciate it if you could water the plants once a
        week or whenever they look thirsty.
      </p>
    </ApartmentDetailLayout>
  );
}
