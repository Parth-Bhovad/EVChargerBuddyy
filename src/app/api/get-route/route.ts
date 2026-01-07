import { NextRequest, NextResponse } from "next/server";
import { RouteQuerySchema } from "@/app/lib/schemas";
import { GetRouteResponse } from "@/app/Types";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const rawParams = {
        start: searchParams.get("start"),
        end: searchParams.get("end"),
        preference: searchParams.get("preference"),
    };

    const parsed = RouteQuerySchema.safeParse(rawParams);

    if (!parsed.success) {
        return NextResponse.json<GetRouteResponse>(
            { error: parsed.error.message, status: "error" },
        );
    }

    const { start, end, preference } = parsed.data;

    const apiKey = process.env.ORS_API_KEY;

    const response = await fetch(`https://api.openrouteservice.org/v2/directions/driving-car/geojson`, {
        method: 'POST',
        headers: {
            'Authorization': apiKey!,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            coordinates: [
                start,
                end
            ],
            preference
        })
    });
    const data = await response.json();
    const coords = data.features[0].geometry.coordinates;
    const coordinates = coords.map((coord: [number, number]) => [coord[1], coord[0]]);
    const distance = data.features[0].properties.summary.distance / 1000; //in KM
    const duration = data.features[0].properties.summary.duration;
    const steps = data.features[0].properties.segments[0].steps.map((step: {distance: number, duration: number, instruction: string}) => ({
        distance: step.distance,
        duration: step.duration,
        instruction: step.instruction
    }));
    return NextResponse.json<GetRouteResponse>({ status: "success", data:{steps, distance, duration, coordinates} });
}