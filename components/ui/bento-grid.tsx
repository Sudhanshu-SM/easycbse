import { cn } from "@/lib/utils";

export function BentoGrid({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("group/bento mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-5", className)}>
      {children}
    </div>
  );
}

export function BentoCard({
  className,
  children,
  colSpan,
  hoverColor,
}: {
  className?: string;
  children?: React.ReactNode;
  colSpan?: string;
  hoverColor?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-[#2A0F14] bg-white p-8 shadow-[4px_4px_0px_#2A0F14]",
        "cursor-pointer transition-all duration-400 ease-out",
        "group-hover/bento:scale-[0.97] group-hover/bento:blur-sm group-hover/bento:opacity-70",
        "hover:!scale-105 hover:!blur-none hover:!opacity-100",
        colSpan,
        hoverColor,
        className
      )}
    >
      {children}
    </div>
  );
}
