import { ChargingStation } from "@/app/model/ChargingStation";
import { connectDB } from "@/app/lib/mongoose";
import { ChargingStationProps } from "@/app/Types";

export async function getChargingStationsByOwner(userId: string): Promise<ChargingStationProps> {
  await connectDB();

  const rawData = await ChargingStation.find({ owner: userId }).lean();

  return rawData.map(station => ({
    id: station._id.toString(),
    stationName: station.stationName,
    location: station.location.coordinates,
    owner: station.owner,
  }));
}
