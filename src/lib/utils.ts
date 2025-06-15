import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * La carpeta lib y este archivo fueron creados porque el archivo index.ts de la carpeta ui/text-animate lo requeria para funcionar en una de sus importaciones. Gracia:D
 * Combines multiple class names into a single string, merging Tailwind classes properly
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

