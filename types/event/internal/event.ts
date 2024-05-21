import {Localizable, Nullable} from "../../__util";
import {User} from "../../general/internal/user";
import {AtcPosition} from "../../data/internal/airport";

export type Event =  {
    id: number
    startDate: Date
    endDate: Date
    name: Localizable<string>
    description: Localizable<string>
    imageUrl: string
    infoUrl: string
    airport: string
}

export type EventPart =  {
    id: number
    eventId: number
    event: Event
    startDate: Date
    endDate: Date
    positions: EventAtc[]
    booking: Booking[]
}

export type EventAtc = {
    id: number
    eventId: number
    eventParts: EventPart
    atcPositionId: number
    position: AtcPosition
}

export type Booking =  {
    id: number
    eventId: number
    event: Event
    eventPartId: EventPart
    bookedUserId: number
    bookedUser: Nullable<User>
    atcPositionId: number
    atcPosition: EventAtc
    status: number
    statusUserId: Nullable<number>
    statusUser: Nullable<User>
}