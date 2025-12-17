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
            'Authorization': 'eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6IjU3OGE5ZWRlMWQxODQwNzE5MWQyM2E0YzE4ZjAwZTQ3IiwiaCI6Im11cm11cjY0In0=',
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
    console.log(data);
    
    return NextResponse.json(data);
}