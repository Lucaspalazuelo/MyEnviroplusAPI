import { object, string, TypeOf } from "zod";

export const airParticulateSchema = object({
    body: object({
        date: string({ required_error: "Date is required" }),
        pm1: string({ required_error: "PM1 is required" }),
        pm25: string({ required_error: "PM2.5 is required" }),
        pm10: string({ required_error: "PM10 is required" })
    })
});

export type TAirParticulate = TypeOf<typeof airParticulateSchema>;
