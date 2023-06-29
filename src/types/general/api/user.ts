import {User as _User, UserNameGdpr} from "../internal/user";
import {ApiType, PartialBy} from "../../__util";
import {StaffPositionOnUserBasicDto} from "./staff";

type User = ApiType<_User>

export type UserDto = PartialBy<Omit<User, 'name'>, 'email'> & {
    name: UserNameGdpr
}

export type UserBasicDto = Pick<UserDto, 'name' | 'id'>
export type UserBasicWithStaffPositionsDto = UserBasicDto & {
    staffPositions: StaffPositionOnUserBasicDto[]
}
export type UserBasicWithRatingsDto = UserBasicDto & Pick<UserDto, 'ratings'>
