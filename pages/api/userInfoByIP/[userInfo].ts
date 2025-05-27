
import type { NextApiRequest, NextApiResponse } from 'next';

interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

interface GeocodeResult {
  address_components: AddressComponent[];
  [key: string]: any;
}

interface GeoLocationData {
  zip: string;
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  datetime: string;
  lat: number;
  lon: number;
  timezone: string;
  isp: string;
  org: string;
  as: string;
  query: string;
}

const extractZipCode = (results: GeocodeResult[]): string => {
  for (const result of results) {
    const components = result.address_components;
    if (components && components.length > 0) {
      const lastComponent = components[components.length - 1];
      const zipCandidate = lastComponent.long_name.replaceAll(' ', '');
      if (!isNaN(Number(zipCandidate))) {
        return lastComponent.long_name;
      }
    }
  }
  return '00000';
};

const getZipCodeByLatLon = async (lat: number, lon: number): Promise<string> => {
  try {
    const apiKey = process.env.NEXT_PUBLIC_KEY_GOOGLE_API;
    if (!apiKey) throw new Error('Google API key is not set');
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return extractZipCode(data.results);
  } catch (error) {
    console.error('Error fetching geocode data:', error);
    return '00000';
  }
};

const getGeolocationData = async (ip: string): Promise<GeoLocationData | null> => {
  try {
    const response = await fetch(`http://ip-api.com/json/${ip}`);
    const data = await response.json();
    if (!data || !data.lat || !data.lon) throw new Error('Invalid geolocation data');
    const zip = await getZipCodeByLatLon(data.lat, data.lon);
    return {
      zip,
      country: data.country,
      countryCode: data.countryCode,
      region: data.region,
      regionName: data.regionName,
      city: data.city,
      datetime: new Date().toLocaleString('en-US', { timeZone: data.timezone }),
      lat: data.lat,
      lon: data.lon,
      timezone: data.timezone,
      isp: data.isp,
      org: data.org,
      as: data.as,
      query: data.query,
    };
  } catch (error) {
    console.error('Error fetching geolocation data:', error);
    return null;
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const ip = Array.isArray(req.query.userInfo)
    ? req.query.userInfo[0]
    : req.query.userInfo;
  const result = await getGeolocationData(ip as string);
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: 'Failed to retrieve user info' });
  }
}
