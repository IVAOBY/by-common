import {Nullable, PartialBy, Ratings} from "../../__util";
import {StaffPosition} from "./staff";
import {DiscordMember} from "../../discord/internal/member";

export interface UserName {
    first: string
    last: string
}
export type UserNameGdpr = PartialBy<UserName, 'last'>
export type User =  {
    id: number
    name: UserName
    centerId: string
    countryId: string
    divisionId: string
    email: Nullable<string>
    ratings: Ratings
}

interface UserRelations  {
    staffPositions: StaffPosition[]
    discordMember: DiscordMember | null
}

export type UserWithRelations = UserRelations & User