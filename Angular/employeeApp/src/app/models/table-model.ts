export interface User {
    id: number;
    name: string;
    age: string;
    address: string;
  }
  
  export interface EmployeeTableState {
    tableData: any[];
    searchValue: string;
    filterBy: string;
  }
  
  export interface HeaderRowItem {
    displayName: string;
    key: string;
  }
  