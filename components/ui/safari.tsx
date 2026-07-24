import { cn } from "@/lib/utils";

export function Safari({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-2xl backdrop-blur",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
        </div>
        <div className="mx-auto flex max-w-[60%] items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/60">
          <svg className="h-3 w-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2a10 10 0 1 0 10 10h-10V2Z" />
          </svg>
          <span className="truncate">easycbse.app</span>
        </div>
        <div className="w-6" />
      </div>
      <div className="p-3">
        <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
          {children || (
            <div className="flex">
              <div className="w-48 shrink-0 border-r border-white/10 p-3">
                <div className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-white/40">
                  Classes
                </div>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((c) => (
                  <div
                    key={c}
                    className={`rounded-md px-2 py-1 text-xs ${
                      c === 10
                        ? "bg-white/15 font-medium text-white"
                        : "text-white/50 hover:text-white/70"
                    }`}
                  >
                    Class {c}
                  </div>
                ))}
              </div>
              <div className="flex-1 p-4">
                <div className="mb-4 h-2 w-24 rounded-full bg-white/10" />
                <div className="space-y-2">
                  <div className="h-2 w-full rounded-full bg-white/8" />
                  <div className="h-2 w-5/6 rounded-full bg-white/8" />
                  <div className="h-2 w-4/6 rounded-full bg-white/8" />
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-2 w-full rounded-full bg-white/8" />
                  <div className="h-2 w-3/4 rounded-full bg-white/8" />
                  <div className="h-2 w-5/6 rounded-full bg-white/8" />
                  <div className="h-2 w-2/3 rounded-full bg-white/8" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
