import {UserName} from "../internal/user";

export interface DivisionalJWTPayload {
    id: number,
    ratings: {
        atc: { id: number, name: string, shortName: string, description?: string },
        pilot: { id: number, name: string, shortName: string, description?: string }
    },
    hours: {
        atc: number,
        pilot: number,
        staff: number
    },
    staffPositions: string[],
    staffDepartments: string[],
    name: UserName
    centerId: string,
    countryId: string,
    divisionId: string,
}