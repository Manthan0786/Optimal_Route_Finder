import findCoordinates from "./findcoordinates";
import nearestNeighbor from "./nearestneighbour";

export interface Coordinates {
    latitude: number,
    longitude: number
}

const coordinatesArray: Coordinates[] = [];

async function FindOptimalRoute(addressesArray:string[]): Promise<any> {
  const addresses: string[] = [...addressesArray]
    console.log(addresses)
    for(const address of addresses) {
      try {
        const coordinates: Coordinates | void = await findCoordinates(address)
        if(coordinates !== undefined) {
          coordinatesArray.push(coordinates)
          } else {
            console.log('Error during coordinates functionn')
          }
        } catch (error) {
            console.error('Error during coordinates function:', error);
        }
        await new Promise(resolve => setTimeout(resolve, 1000))
    }
    const path = await nearestNeighbor(coordinatesArray);
    const addressesPromises = path.map(path => getAddress(path))
    const resolvedAddresses = await Promise.all(addressesPromises)
    const formattedAddresses = resolvedAddresses.map(result => result.results[0].formatted_address);
  return formattedAddresses
}

async function getAddress(path: Coordinates) {
  const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${path.latitude},${path.longitude}&key=AIzaSyAkCRYZk8b0q3OXcIbxFJpuD_25F6AoWlY`)
  const data = await res.json();
  return data
}

export default FindOptimalRoute
