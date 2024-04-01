import IconFullscreen from "@/assets/icons/fullscreen.svg";
import IconReport from "@/assets/icons/report.svg";
import IconThumbUp from "@/assets/icons/thumb-up.svg";
import { NextImage } from "@/components/NextImage";
import type { Game } from "@/types/app.type";
import { cn } from "@/utils/cn.util";

type GamePlayProps = Game & {
  className?: string;
};

export function GamePlay({ className, name, thumbnail }: GamePlayProps) {
  return (
    <div className={cn("flex flex-col overflow-hidden rounded-2xl bg-white shadow-mid", className)}>
      <div className="grow bg-blue-poki" />

      <div className="flex h-16 justify-between p-3 shadow-mid">
        <div className="flex gap-2">
          <NextImage alt={name} className="size-10 rounded-lg" src={thumbnail} />
          <div className="flex flex-col justify-between">
            <span className="text-sm font-bold text-blue-denim">{name}</span>
            <span className="text-xs">Author</span>
          </div>
        </div>

        <div className="mr-6 flex gap-8">
          <ActionButton label="Like" icon={<IconThumbUp className="size-6" />} value={123} />
          <ActionButton label="Dislike" icon={<IconThumbUp className="size-6 rotate-180" />} value={123} />
          <ActionButton label="Report a bug" icon={<IconReport className="size-6" />} />
          <ActionButton label="Fullscreen" icon={<IconFullscreen className="size-6" />} />
        </div>
      </div>
    </div>
  );
}

type ActionButtonProps = {
  onClick?: () => void;
  icon?: JSX.Element;
  label?: string;
  value?: string | number;
};

function ActionButton({ onClick, icon, value = "-", label }: ActionButtonProps) {
  return (
    <button className="group/btn relative flex items-center fill-blue-poki pb-2 transition-all" onClick={onClick}>
      <div className="rounded-full p-1 group-hover/btn:-rotate-6 group-hover/btn:bg-grey-7">{icon}</div>

      <span
        className={cn(
          "absolute -bottom-px left-1/2 line-clamp-1 w-max -translate-x-1/2 rounded-full bg-blue-poki px-2 text-[10px] font-semibold text-white opacity-0 transition-all",
          "group-hover/btn:opacity-100"
        )}
      >
        {label}
      </span>

      <span
        className={cn(
          "absolute bottom-0 px-2 text-[10px] font-semibold text-grey-3 transition-all",
          "group-hover/btn:opacity-0",
          {
            "opacity-0": value === "-",
          }
        )}
      >
        {value}
      </span>
    </button>
  );
}