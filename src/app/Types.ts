export interface formState {
    status: string;
    msg: string;
}

export type RouteSteps = Array<{
    distance: number;
    duration: number;
    instruction: string;
}>;

export type ChargingStationProps = Array<{
    id: string;
    stationName: string;
    location: [number, number];
    owner: string;
}>;

export type Stations = Array<{
    _id: string;
    location: {
        type: string;
        coordinates: [number, number];
    };
    owner: string;
    stationName: string;
}>;

export type GetRouteResponse =
    | {
        status: "success";
        data:{
            steps: RouteSteps;
            duration: number;
            distance: number;
            coordinates: [number, number][];
        }
    }
    | {
        status: "error";
        error: string;
    };

export type NearByStationsResponse =
    | {
        status: "success";
        stations: Stations;
    }
    | {
        status: "error";
        error: string;
    }
