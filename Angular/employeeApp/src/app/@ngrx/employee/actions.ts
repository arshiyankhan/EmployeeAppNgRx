import { createAction, props } from '@ngrx/store';

enum Actions {
  SET_EMPLOYEE_TABLE = '[EMP Table] Set Table Data',
  RESET_EMPLOYEETABLE_STORE = '[EMP Table] Reset Store',
  SET_FILTER_BY = '[EMP Table] Set Filter By Properties and Query', 
  LOAD_TABLE = '[EMP Table] Load Table', 
}

export const setData = createAction(Actions.SET_EMPLOYEE_TABLE, props<{ data: any[] }>());
export const resetEmployeeTableStore = createAction(Actions.RESET_EMPLOYEETABLE_STORE);
export const setFilterBy = createAction(Actions.SET_FILTER_BY, props<{ filters: { filterBy: string; query: string } }>()); 
export const loadTable = createAction(Actions.LOAD_TABLE);