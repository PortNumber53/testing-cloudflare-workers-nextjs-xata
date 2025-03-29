import { XataClient } from "@vendor/xata";

export function getXataClient() {
  const xataApiKey = process.env.XATA_API_KEY;
  const xataDatabaseURL = process.env.XATA_DATABASE_URL;
  const xataBranch = process.env.XATA_BRANCH || "main";

  if (!xataApiKey || !xataDatabaseURL) {
    throw new Error(
      "Xata client initialization failed: Missing API key or database URL"
    );
  }

  return new XataClient({
    apiKey: xataApiKey,
    databaseURL: xataDatabaseURL,
    branch: xataBranch,
  });
}
