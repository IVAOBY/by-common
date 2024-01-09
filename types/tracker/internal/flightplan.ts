import {Nullable} from "../../__util";
import {IvaoAircraft} from "./ivao-aircraft";
import {IvaoShortAirport} from "./ivao-airport";

export interface FlightPlan {
    id: number
    arrivalId: string
    departureId: string
    aircraftId: string
    aircraft: IvaoAircraft
    departure: IvaoShortAirport
    arrival: IvaoShortAirport
    alternative: Nullable<IvaoShortAirport>
    alternative2: Nullable<IvaoShortAirport>
}