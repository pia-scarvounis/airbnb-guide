import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600"] });

export default function ApartmentDetailLayout({
  title,
  image,
  imageFit = "cover",
  imagePosition = "top",
  children,
}: {
  title: string;
  image?: string;
  imageFit?: "cover" | "contain";
  imagePosition?: "top" | "bottom" | "center";
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col bg-stone-50 dark:bg-zinc-950">
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col px-8 pt-6 pb-10">
        <Link
          href="/apartment"
          className="inline-flex w-fit items-center gap-1 text-sm text-stone-500 transition-colors hover:text-stone-900 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          Back
        </Link>

        {image && (
          <div
            className={`relative mt-6 w-full overflow-hidden rounded-3xl ${
              imageFit === "contain" ? "aspect-[4/5] bg-white" : "aspect-[4/3] bg-stone-200"
            }`}
          >
            <Image
              src={image}
              alt={title}
              fill
              className={
                imageFit === "contain"
                  ? "object-contain p-10"
                  : `object-cover ${
                      imagePosition === "bottom"
                        ? "object-bottom"
                        : imagePosition === "center"
                          ? "object-center"
                          : "object-top"
                    }`
              }
            />
          </div>
        )}

        <h1 className={`${playfair.className} mt-6 text-4xl text-zinc-900 dark:text-zinc-50`}>
          {title}
        </h1>

        <div className="mt-6 text-sm leading-6 text-stone-600 dark:text-zinc-300">
          {children}
        </div>
      </div>
    </div>
  );
}
