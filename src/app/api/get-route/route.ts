import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const start = searchParams.get("start");
    const end = searchParams.get("end");
    const preference = searchParams.get("preference") || "shortest";

    const apiKey = process.env.ORS_API_KEY;

    const response = await fetch(`https://api.openrouteservice.org/v2/directions/driving-car/geojson`, {
        method: 'POST',
        headers: {
            'Authorization': apiKey!,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            coordinates: [
                start ? start.split(',').map(Number) : [72.779162, 19.572699],
                end ? end.split(',').map(Number) : [72.8114, 19.5866]
            ],
            preference: preference
        })
    });
    const data = await response.json();
    
    return NextResponse.json(data);
}