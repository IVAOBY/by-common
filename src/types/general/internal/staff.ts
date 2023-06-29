import {LocalizableText, Nullable} from "../../__util";
import {User} from "./user";

export interface StaffDepartment {
    id: string
    name: LocalizableText
}

export type StaffPosition = {
    departmentId: string
    prefix: string
    id: string
    userId: Nullable<number>
    name: LocalizableText
    description: LocalizableText
    order: number
}

interface StaffPositionRelations  {
    staffDepartment: StaffDepartment
    user: Nullable<User>
}

export type StaffPositionWithRelations = StaffPosition & StaffPositionRelations