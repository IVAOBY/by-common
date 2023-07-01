import {ApiType} from "../../__util";
import {Giveaway, GiveawayWithRelations} from "../internal/giveaway";
import {GiveawayPrize, GiveawayPrizeWithRelations} from "../internal/giveaway-prize";
import {UserBasicDto, UserDto} from "../../general/api/user";

export type GiveawayDto = ApiType<Omit<Giveaway, 'tourId' | 'eventId'>> & { prizes: ApiType<Omit<GiveawayPrize, 'giveawayId'> & {
     winners: UserBasicDto[]
}>[] } & {
    event: {
        id: number
        nameEng: string
        name: string
        descriptionEng: string
        description: string
        date: string
        timeStart: string
        timeEnd: string
    },
    tour: {
        id: number
    },
    usersFinished: { vid: number, firstName: string }[]
}

export type GiveawayCreationDto = Pick<GiveawayDto, 'name' | 'closesAt'> & Pick<Giveaway, 'tourId' | 'eventId'> & {
    prizes: Pick<GiveawayPrize, 'name' | 'quantity'>[]
}
export type GiveawayUpdateDto = Pick<GiveawayCreationDto, 'tourId' | 'eventId' | 'name'>
export type GiveAwayPrizeUpdateDto = Pick<GiveawayPrize, 'name' | 'quantity'>
