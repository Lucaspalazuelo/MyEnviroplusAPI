import { object, string, TypeOf } from "zod";

export const enviroDataSchema = object({
    body: object({
        date: string({ required_error: "Date is required" }),
        temperature: string({ required_error: "Temperature is required" }),
        pressure: string({ required_error: "Pressure is required" }),
        humidity: string({ required_error: "Humidity is required" }),
        oxidising: string({ required_error: "Oxidising is required" }),
        reducing: string({ required_error: "Reducing is required" }),
        nh3: string({ required_error: "NH3 is required" })
    })
});

export type TEnviroData = TypeOf<typeof enviroDataSchema>;
