import {User} from "../../general/internal/user";
import {WithTimestamps} from "../../__util";

export interface DiscordMember extends WithTimestamps {
    discordId: string
    userId: number
    user: User
    consent: true
    banExpiresAt: Date
    banReason: string
    isBanned: boolean
}