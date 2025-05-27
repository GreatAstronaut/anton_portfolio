
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { minLength } = req.query;

  // Validate minLength
  const minLen = typeof minLength === "string" ? minLength : Array.isArray(minLength) ? minLength[0] : undefined;
  if (!minLen || isNaN(Number(minLen))) {
    return res.status(400).json({ error: "Invalid or missing minLength parameter" });
  }

  try {
    const response = await fetch(`https://api.quotable.io/random?minLength=${minLen}`);
    if (!response.ok) {
      throw new Error(`Quotable API responded with status ${response.status}`);
    }
    const data = await response.json();
    res.status(200).json({ quote: data.content, author: data.authorSlug });
  } catch (err: any) {
    res.status(500).json({ error: err.message || "Internal server error" });
  }
}
