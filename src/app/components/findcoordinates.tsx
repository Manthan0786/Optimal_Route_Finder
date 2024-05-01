import { Coordinates } from "./findoptimalroute";

async function findCoordinates(address: string): Promise<Coordinates | void> {
    try {
      const response = await fetch(`https://geocode.maps.co/search?q=${address}&api_key=6622dc00e0add290019419fpk7525f0`);
      const data = await response.json();
      if (data) {
        const location = data[0];
        return { latitude: parseFloat(location.lat), longitude: parseFloat(location.lon) };
      } else {
        console.error('Location not found');
        return undefined;
      }
    } catch (error) {
      console.error('Error:', error);
      return undefined
    }
}

export default findCoordinates
