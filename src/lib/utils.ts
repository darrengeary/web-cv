import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Safely merge conditional classNames with Tailwind conflict resolution
 *
 * Example:
 * cn("p-2", condition && "p-4")
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
