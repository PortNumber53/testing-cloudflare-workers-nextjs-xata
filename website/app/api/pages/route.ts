import { getXataClient } from "@/lib/xata";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const xata = getXataClient();

    // Fetch all pages from Xata
    const pages = await xata.db.pages.getAll();

    return NextResponse.json(pages);
  } catch (error) {
    console.error("Error fetching pages:", error);
    return NextResponse.json(
      { error: "Failed to fetch pages" },
      { status: 500 }
    );
  }
}
