import {LocalizableText} from "../../__util";
import {GiveawayPrize} from "./giveaway-prize";
export interface Giveaway {
    id: number
    name: LocalizableText
    tourId: number
    eventId: number
    closesAt: Date
}

interface GiveawayRelations {
    event: any
    tour: any
    prizes: GiveawayPrize[]
}

export type GiveawayWithRelations = Giveaway & GiveawayRelations