import {IvaoErrors, Nullable} from "../../__util";

export interface IvaoMetar {
    airportIcao: string
    metar: string
    updatedAt: string
    statusCode: Nullable<number>
    message: Nullable<string>
    error: Nullable<string>
}

export interface IvaoTAF {
    airportIcao: string
    taf: string
    updatedAt: string
    statusCode: Nullable<number>
    message: Nullable<string>
    error: Nullable<string>
}