
import type { NextApiRequest, NextApiResponse } from 'next';

// Type for Google Geocode API response
interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

interface GeocodeResult {
  address_components: AddressComponent[];
  // ...other fields can be added as needed
}

// Utility to extract zip code from geocode results
function extractZipCode(results: GeocodeResult[]): string {
  for (const result of results) {
    const components = result.address_components;
    const lastComponent = components[components.length - 1];
    if (lastComponent && !isNaN(Number(lastComponent.long_name))) {
      return lastComponent.long_name;
    }
  }
  return "00000";
}

// Fetch zip code using Google Geocode API
async function fetchZipCode(lat: string, lon: string): Promise<string> {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${process.env.NEXT_PUBLIC_KEY_GOOGLE_API}`
    );
    const data = await response.json();
    return extractZipCode(data.results);
  } catch (err) {
    console.error("Error fetching data from Google API:", err);
    return "00000";
  }
}

// API handler
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { lat, lon } = req.query;

  // Validate input
  if (typeof lat !== 'string' || typeof lon !== 'string') {
    res.status(400).json({ error: "Latitude and longitude must be provided as strings." });
    return;
  }

  const zip = await fetchZipCode(lat, lon);
  res.status(200).json({ zip });
}
