import { Coordinates } from "./findoptimalroute";

async function calculateDistance(coord1: Coordinates, coord2: Coordinates): Promise<any> {
    const response = await fetch(`https://router.project-osrm.org/route/v1/driving/${coord1.longitude},${coord1.latitude};${coord2.longitude},${coord2.latitude}`)
    const data  = await response.json()
    return data.routes[0].distance
}

export default calculateDistance
