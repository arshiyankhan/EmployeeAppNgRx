import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmployeeTableState } from 'src/app/models/table-model';
import * as fromEmployeeTable from './reducers';

export const selectEmployeeTableState = createFeatureSelector<EmployeeTableState>(fromEmployeeTable.employeeTableFeatureKey);

export const selectTableData = createSelector(selectEmployeeTableState, (state: EmployeeTableState) => state.tableData);

export const selectSearchValue = createSelector(selectEmployeeTableState, (state: EmployeeTableState) => state.searchValue);
export const selectFilterBy = createSelector(selectEmployeeTableState, (state: EmployeeTableState) => state.filterBy);

export const selectData = createSelector(
  selectTableData,
  selectSearchValue,
  selectFilterBy,
  (tableData, searchValue, filterBy) => {
    let filteredData = [...tableData];

    // Filter Array
    if (searchValue !== '') {
      filteredData = filteredData.filter((item) => {
        const result = item[filterBy]!.toLowerCase().startsWith(searchValue)
        return result;
      });
    }
    return filteredData
  }
);

