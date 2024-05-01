import calculateDistance from "./calculatedistance";
import { Coordinates } from "./findoptimalroute";

async function calculateDistanceArray(coordinatesArray: any) {
    const distanceArray: number[][] = [];
    for(let i=0; i<coordinatesArray.length; i++) {
      distanceArray[i] = [];
      for(let j=i+1; j<coordinatesArray.length; j++) {
        const distance = await calculateDistance(coordinatesArray[i], coordinatesArray[j])
        distanceArray[i][j] = distance
      }
    }
    return distanceArray
}



export default calculateDistanceArray
