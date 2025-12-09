import { connectDB } from "@/app/lib/mongoose";
import {ChargingStation} from "@/app/model/ChargingStation";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const radius = searchParams.get("radius");
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");
    
    await connectDB();
    const stations = await ChargingStation.find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [Number(lat), Number(lng)] // Example coordinates (longitude, latitude)
          },
            $maxDistance: radius ? Number(radius) * 1000 : 5000 // Convert Km to meters
        }
      }
    });
    return NextResponse.json({ message: `Hello from near-by-stations API! Radius received: ${radius}`, stations });
}