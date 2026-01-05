"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function AskMe({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-soft dark:border-zinc-800 dark:bg-zinc-900">
      <div className="text-sm text-zinc-600 dark:text-zinc-400">
        Click a question.
      </div>

      <div className="mt-4 space-y-2">
        {items.map((it, idx) => {
          const open = openIndex === idx;
          return (
            <button
              key={it.q}
              type="button"
              onClick={() => setOpenIndex(open ? null : idx)}
              className="w-full rounded-xl border border-zinc-200 p-4 text-left dark:border-zinc-800"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="font-medium">{it.q}</div>
                <ChevronDown className={cn("h-4 w-4 transition", open && "rotate-180")} />
              </div>
              {open && (
                <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-200">{it.a}</p>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
