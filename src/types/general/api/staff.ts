import {ApiType} from "../../__util";
import {StaffDepartment, StaffPosition} from "../internal/staff";

export type StaffDepartmentDto = ApiType<StaffDepartment>

export type StaffPositionDto = ApiType<StaffPosition>
export type StaffPositionOnUserBasicDto = Pick<StaffPosition, 'id' | 'prefix' | 'name' | 'departmentId'>
