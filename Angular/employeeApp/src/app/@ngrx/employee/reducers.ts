import { Action, createReducer, on } from '@ngrx/store';
import * as EmployeeTableActions from './actions';
import { EmployeeTableState } from 'src/app/models/table-model';

export const INITIAL_STATE: EmployeeTableState = {
  tableData: [],
  searchValue: '', 
  filterBy: '' 
};

export const employeeTableFeatureKey = 'employeeTable';


export const employeeTableReducer = createReducer(
  INITIAL_STATE,
  
  on(EmployeeTableActions.setData, (state, { data }) => {
    return {
      ...state,
      tableData: data
    };
  }),

  on(EmployeeTableActions.resetEmployeeTableStore, state => {
    return {
      ...state,
      ...INITIAL_STATE
    };
  }),

  on(EmployeeTableActions.setFilterBy, (state, { filters }) => { 
    return { 
      ...state, 
      searchValue: filters.query, 
      filterBy: filters.filterBy 
    }; 
  }),  
);

export function EmployeeTableReducer(state: EmployeeTableState, action: Action) {
  return employeeTableReducer(state, action);
}