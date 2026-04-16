"use client";

export function GridLines() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden container mx-auto px-6">
      <div className="grid grid-cols-12 h-full gap-x-6">
        {[...Array(13)].map((_, i) => (
          <div
            key={i}
            className="w-[1px] h-full bg-foreground opacity-[0.03] dark:opacity-[0.05]"
          />
        ))}
      </div>
    </div>
  );
}
