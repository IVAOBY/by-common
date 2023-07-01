import {LocalizableText} from "../../__util";
import {Giveaway} from "./giveaway";
import {User} from "../../general/internal/user";

export interface GiveawayPrize {
    id: number
    giveawayId: number
    name: LocalizableText
    quantity: number
}

interface GiveawayPrizeRelations {
    giveaway: Giveaway
    winners: User[]
}

export type GiveawayPrizeWithRelations = GiveawayPrize & GiveawayPrizeRelations