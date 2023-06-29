import {ApiType} from "../../__util";
import {TrainingSession as _TSession} from "../internal/training-session";
import {UserBasicWithRatingsDto, UserBasicWithStaffPositionsDto, UserDto} from "../../general/api/user";
import {TrainingTypeDto} from "./training-type";

type TrainingSession = ApiType<_TSession>

export type TrainingSessionCreationDto = TrainingSession
export type TrainingSessionUpdateDto = TrainingSession
export type TrainingSessionDto = Pick<TrainingSession, 'datetime'> & {
    trainer: UserBasicWithStaffPositionsDto
    trainees: (UserBasicWithRatingsDto & Pick<UserDto, 'email'>)[] // Basic + Ratings + Email (optional)
} & {
    trainingType: TrainingTypeDto
}