import { Action } from '@ngrx/store';
import { GetEmployees } from '../../models/get-employees';
import { EmployeeList } from '../../models/employee-list';
import { Employee } from '../../models/employee';

export enum EmployeeActionTypes{
    LoadEmployees = '[Employee] Load Employees',
    LoadEmployeesComplete = '[Employee] Load Employees Complete',
    LoadEmployeeById = '[Employee] Load Employee By Id',
    LoadEmployeeByIdComplete = '[Employee] Load Employee By Id Complete'
}

export class LoadEmployees implements Action {
    readonly type = EmployeeActionTypes.LoadEmployees;
    constructor(public request: GetEmployees) { }
}

export class LoadEmployeesComplete implements Action {
    readonly type = EmployeeActionTypes.LoadEmployeesComplete;
    constructor(public payload: EmployeeList) { }
}

export class LoadEmployeeById implements Action {
    readonly type = EmployeeActionTypes.LoadEmployeeById;
    constructor(public employeeId: number) { }
}

export class LoadEmployeeByIdComplete implements Action {
    readonly type = EmployeeActionTypes.LoadEmployeeByIdComplete;
    constructor(public payload: Employee) { }
}


export type Actions = LoadEmployees | LoadEmployeesComplete | LoadEmployeeById | 
    LoadEmployeeByIdComplete;