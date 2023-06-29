import {RatingsOptional} from "../../__util";

export interface TrainingType  {
    id: number
    rating: RatingsOptional
    suffix: string
    isPractical: boolean
    isExam: boolean
    description: string
    forumTemplate: string
}