import {ApiType} from "../../__util";
import {RfeSlot as _RfeSlot} from "../internal/rfe-slot";
import {UserBasicDto} from "../../general/api/user";

export type RfeSlot = ApiType<Omit<_RfeSlot, 'bookedByUserId'>> & {
    bookedByUser: UserBasicDto
}