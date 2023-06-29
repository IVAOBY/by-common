import {TrainingType} from "./training-type";
import {User} from "../../general/internal/user";

export type TrainingSession = {
    trainingTypeId: number
    datetime: Date
    trainerUserId: number
}

interface TrainingSessionRelations  {
    trainingType: TrainingType
    trainer: User
    trainees: User[]
}

export type TrainingSessionWithRelations = TrainingSessionRelations & TrainingSession