export interface formState {
    status: string;
    msg: string;
}

export type RouteSteps = Array<{
    distance: number;
    duration: number;
    instruction: string;
}>;