import {Nullable} from "../../__util";
import {FlightPlan} from "./flightplan";

export interface PilotResponse {
    id: number
    callsign: string
    userId: number
    connectionType: string
    serverId: string
    createdAt: any
    time: number
    flightPlan: FlightPlan
    pilotSession: {
        simulatorId: string
        textureId: number
    },
    softwareType: {
        id: number
        name: string
    },
    user: {
        id: number
        firstName: Nullable<string>
        lastName: Nullable<string>
        divisionId: string
        rating: {
            pilotRating: {
                id: number
                name: string
                shortName: string
                description: string
            }
            pilotRatingId: number
        }
    }
}