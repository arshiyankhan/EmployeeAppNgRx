import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { exhaustMap, map } from 'rxjs/operators';

import { DataService } from '../../services/services'

import * as DataEmployeeActions from './actions';


@Injectable()
export class EmployeeTableEffects {
  loadTable$ = createEffect(() => {
    return this.actions$.pipe( 

      // this effect only listens to loadTable action
      ofType(DataEmployeeActions.loadTable),
      
      // fetch data from API and dispatch setData action
      exhaustMap(() => this.dataService.getDataEmp().pipe(
       map((data) => DataEmployeeActions.setData({data}))
      ))
    );
  });
  constructor(private actions$: Actions, private dataService: DataService) {}
}
