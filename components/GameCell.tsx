import Link from "next/link";

import { NextImage } from "@/components/NextImage";
import { getGameSlug } from "@/services/get-game-slug.service";
import { cn } from "@/utils/cn.util";

type GameCellProps = Game & {
  locale?: string;
};

export function GameCell({ id, name, thumbnail, span = 1, locale = "", videoDemoUrl }: GameCellProps) {
  const href = `/${locale}/${getGameSlug(name)}`;

  return (
    <Link
      key={id}
      href={href}
      className={cn(
        "group/cell relative inline-block aspect-square overflow-hidden rounded-2xl bg-white shadow-mid transition-all duration-700 ease-in-out",
        "hover:-translate-y-1 hover:scale-105",
        "hover:after:absolute hover:after:size-full hover:after:bg-[linear-gradient(#0000_25%,#0000004d)] hover:after:shadow-hover",
        {
          "size-cell": span === 1,
          "col-span-2 row-span-2 size-cell-2": span === 2,
          "col-span-3 row-span-3 size-cell-3": span === 3,
        }
      )}
    >
      <NextImage src={thumbnail} alt={name} className="absolute size-full" />
      <span
        className={cn(
          "absolute bottom-0 left-0 z-20 w-full translate-y-full p-1 text-center text-white transition-all duration-700 ease-in-out",
          "group-hover/cell:translate-y-0",
          {
            "text-xs": !span,
          }
        )}
      >
        {name}
      </span>

      <video
        loop
        playsInline
        muted
        autoPlay
        src={videoDemoUrl}
        className={cn("absolute left-0 top-0 z-10 hidden size-full", "group-hover/cell:block")}
      />
    </Link>
  );
}
