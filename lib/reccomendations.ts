import { madeForYouAlbums } from "@/data/albums";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchReccomendations() {
  noStore();
  try {
    // We artificially delay a response for demo purposes.
    // Don't do this in a real application
    console.log("Fetching revenue data...");
    await new Promise((resolve) => setTimeout(resolve, 3000));

    console.log("Data fetch complete after 3 seconds.");

    return madeForYouAlbums;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}
