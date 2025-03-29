import { XataClient } from "@vendor/xata";

export function getXataClient() {
  if (typeof window === "undefined") {
    const xataApiKey = process.env.XATA_API_KEY;
    const xataDatabaseURL = process.env.XATA_DATABASE_URL;
    const xataBranch = process.env.XATA_BRANCH || "main";

    if (xataApiKey && xataDatabaseURL) {
      return new XataClient({
        apiKey: xataApiKey,
        databaseURL: xataDatabaseURL,
        branch: xataBranch,
      });
    }

    throw new Error(
      "Xata client initialization failed: Missing API key or database URL"
    );
  }
}
