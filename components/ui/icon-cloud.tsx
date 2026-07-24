"use client";

export function IconCloud({ iconNodes }: { iconNodes: React.ReactNode[] }) {
  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <div className="relative h-48 w-48 animate-[spin_20s_linear_infinite] [transform-style:preserve-3d]">
        {iconNodes.map((node, i) => {
          const theta = (i / iconNodes.length) * Math.PI * 2;
          const phi = Math.acos(2 * (i / iconNodes.length) - 1);
          const r = 5;
          const x = r * Math.sin(phi) * Math.cos(theta);
          const y = r * Math.sin(phi) * Math.sin(theta);
          const z = r * Math.cos(phi);
          return (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
              style={{
                transform: `translate3d(${x}rem, ${y}rem, ${z}rem)`,
              }}
            >
              {node}
            </div>
          );
        })}
      </div>
    </div>
  );
}
