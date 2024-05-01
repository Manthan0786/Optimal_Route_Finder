import { Coordinates } from "./findoptimalroute";
import calculateDistance from "./calculatedistance";

async function nearestNeighbor(
  coordinates: Coordinates[],
): Promise<Coordinates[]> {
  const visited: boolean[] = Array(coordinates.length).fill(false);
  const path: Coordinates[] = [];

  let currentCity = 0; // Start from the first city
  visited[currentCity] = true;
  path.push(coordinates[currentCity]);

  while (!visited.every((value) => value === true)) {
    let minDistance = Infinity;
    let nearestCity = -1;

    for (let i = 0; i < coordinates.length; i++) {
      if (!visited[i]) {
        const distance = await calculateDistance(
          coordinates[currentCity],
          coordinates[i],
        );
        const numericDistance = parseInt(distance);
        if (numericDistance < minDistance) {
          minDistance = numericDistance;
          nearestCity = i;
        }
      }
    }
    if (nearestCity !== -1) {
      currentCity = nearestCity;
      visited[currentCity] = true;
      path.push(coordinates[currentCity]);
    }
  }

  // Return to the starting city to complete the cycle
  path.push(path[0]);
  return path;
}

export default nearestNeighbor;
