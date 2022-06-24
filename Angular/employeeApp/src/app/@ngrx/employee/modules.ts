import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// NgRx
import { StoreModule } from '@ngrx/store';
import * as fromReducer from './reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromReducer.employeeTableFeatureKey,
      fromReducer.EmployeeTableReducer
    ),
  ],
})
export class EmployeeTableModule {}
