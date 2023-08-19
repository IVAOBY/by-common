import {ISODateString, Nullable} from "../../__util";
import {User} from "../../general/internal/user";

export interface RfeSlot {
    id: number
    ident: string
    icaoDep: Nullable<string>
    icaoArr: Nullable<string>
    acftType: Nullable<string>
    scheduleTime: Date
    isArrival: boolean
    bookedByUserId: Nullable<number>
}

interface RfeSlotRelations {
    bookedByUser: User
}

export type GiveawaySlotWithRelations = RfeSlot & RfeSlotRelations