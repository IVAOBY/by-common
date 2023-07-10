import {ApiType, PartialBy} from "../../__util";
import {TrainingType} from "../internal/training-type";

export type TrainingTypeDto = PartialBy<ApiType<TrainingType>, 'forumTemplate'> // 'forumTemplate' only shown to T-Staff

export type TrainingTypeCreationDto = Pick<TrainingTypeDto, 'rating' | 'forumTemplate' | 'description' | 'suffix' | 'isExam' | 'isPractical'>
export type TrainingTypeUpdateDto = TrainingTypeCreationDto