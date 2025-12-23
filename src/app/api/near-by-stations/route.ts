import { connectDB } from "@/app/lib/mongoose";
import { ChargingStation } from "@/app/model/ChargingStation";
import { NextResponse, NextRequest } from "next/server";
import { NearByStationsQuerySchema } from "@/app/lib/schemas";
import { NearByStationsResponse } from "@/app/Types";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const rawParams = {
    radius: searchParams.get("radius"),
    lat: searchParams.get("lat"),
    lng: searchParams.get("lng"),
  };

  const parsed = NearByStationsQuerySchema.safeParse(rawParams);

  if (!parsed.success) {
    return NextResponse.json<NearByStationsResponse>({status: "error", error: parsed.error.message});
  }

  const { radius, lat, lng } = parsed.data;

  await connectDB();
  const stations = await ChargingStation.find({
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [Number(lat), Number(lng)]
        },
        $maxDistance: Number(radius) * 1000 // Convert Km to meters
      }
    }
  });
  return NextResponse.json<NearByStationsResponse>({ status: "success", stations });
}