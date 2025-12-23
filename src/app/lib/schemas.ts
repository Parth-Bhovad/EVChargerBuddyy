import { z } from "zod";

export const UserSignUpSchema = z.object({
    name: z.string().min(3).max(30).regex(/[A-Za-z][A-Za-z0-9\-]*/),
    email: z.email(),
    password: z.string().min(4),
});

export const UserLoginSchema = z.object({
    email: z.email(),
    password: z.string().min(4),
});

export const ChargingStationSchema = z.object({
        stationName: z.string().optional(),
        userLat: z.string(),
        userLong: z.string(),
    });

export const RouteQuerySchema = z.object({
    start: z
        .string()
        .transform(val =>
            val.split(",").map(Number)
        )
        .refine(
            val => val.length === 2 && val.every(n => !Number.isNaN(n)),
            "Invalid start coordinates"
        ),

    end: z
        .string()
        .transform(val =>
            val.split(",").map(Number)
        )
        .refine(
            val => val.length === 2 && val.every(n => !Number.isNaN(n)),
            "Invalid end coordinates"
        ),

    preference: z.enum(["shortest", "fastest"]).default("shortest"),
});

export const NearByStationsQuerySchema = z.object({
    lat: z.string().refine(val => !Number.isNaN(Number(val)), "Invalid latitude"),
    lng: z.string().refine(val => !Number.isNaN(Number(val)), "Invalid longitude"),
    radius: z.string().refine(val => val === undefined || !Number.isNaN(Number(val)), "Invalid radius"),
});