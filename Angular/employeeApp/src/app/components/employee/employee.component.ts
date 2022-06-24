import { Component, OnInit} from '@angular/core';
import { EmployeeTableState } from '../../models/table-model';

// RxJs
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// NgRx
import { Store } from '@ngrx/store';
import * as dataEmployeeActions from '../../@ngrx/employee/actions';
import * as dataEmployeeSelectors from '../../@ngrx/employee/selectors'
import { DataService } from 'src/app/services/services';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { loadTable, setFilterBy } from '../../@ngrx/employee/actions';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  headerRow = [
    { displayName: 'ID', key: 'id' },
    { displayName: 'Name', key: 'name' },
    { displayName: 'Age', key: 'age' },
    { displayName: 'Address', key: 'address' },
  ];

  public tableData$!: Observable<any>;

  searchControl = new FormControl('')
  constructor(private dataService: DataService, private store: Store<EmployeeTableState>, private router: Router) {}


  ngOnInit(): void {

    this.checkIfLoggedIn()
    this.getData();
    
    this.searchControl.valueChanges.pipe(
      map(query => query!.toLowerCase())
    ).subscribe((query) => {
      this.store.dispatch(setFilterBy({ filters: { filterBy: 'name', query } }));
    })

    // SELECTORS
    this.tableData$ = this.store.select(dataEmployeeSelectors.selectData);
  }

  ngOnDestroy(): void {
    this.store.dispatch(dataEmployeeActions.resetEmployeeTableStore());
  }

  checkIfLoggedIn(){
    let token = sessionStorage.getItem('token')
    if(!token) this.router.navigate(['/'])
  }

  getData(): void {
    this.store.dispatch(loadTable());
  }
}
