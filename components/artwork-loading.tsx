import { cn } from "@/lib/utils";

export function ArtworkLoading({ className }: { className?: string }) {
  const placeholders = Array.from(Array(10).keys());

  return (
    <>
      {placeholders.map((_, idx) => (
        <div className={cn("space-y-3 mb-2", className)} key={idx}>
          <div className="overflow-hidden rounded-md">
            <div className="h-[150px] w-[150px] bg-gray-400 animate-pulse" />
          </div>

          <div className="space-y-1 text-sm">
            <div className="h-4 bg-gray-400 animate-pulse" />
            <div className="h-3 bg-gray-600 animate-pulse" />
          </div>
        </div>
      ))}
    </>
  );
}
