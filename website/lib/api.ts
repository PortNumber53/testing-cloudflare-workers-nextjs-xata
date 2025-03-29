import type { Page } from "@/types/page";

export async function fetchPages(): Promise<Page[]> {
  const response = await fetch("/api/pages");

  if (!response.ok) {
    throw new Error("Failed to fetch pages");
  }

  return response.json();
}
