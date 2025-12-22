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
    stationName: string;
    location: [number, number];
    owner: string;
}>;