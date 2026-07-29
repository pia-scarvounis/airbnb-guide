import ApartmentDetailLayout from "../DetailLayout";

export default function FanPage() {
  return (
    <ApartmentDetailLayout title="Fan" image="/apartment-fan.jpg" imageFit="cover">
      <p>
        During the summer months, a fan is available in the bedroom. The
        remote control can be found on the bedside table.
      </p>
      <p className="mt-4 font-medium text-zinc-900 dark:text-zinc-50">
        How to use it:
      </p>
      <ul className="mt-2 list-disc space-y-1.5 pl-5">
        <li>Press Power to turn the fan on or off.</li>
        <li>Adjust the airflow using the + / − buttons (12 speed levels).</li>
        <li>
          Press the Horizontal or Vertical Oscillation buttons to make the
          fan move from side to side or up and down.
        </li>
        <li>
          Press ECO to let the fan automatically adjust its speed based on
          the room temperature.
        </li>
        <li>
          Use the Timer if you would like the fan to turn off automatically
          after a set number of hours.
        </li>
      </ul>
      <p className="mt-4">
        Please turn the fan off when you leave the apartment, and leave the
        remote control on the bedside table when you check out.
      </p>
    </ApartmentDetailLayout>
  );
}
