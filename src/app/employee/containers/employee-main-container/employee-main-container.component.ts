import { Component, OnInit } from '@angular/core';
import * as employeeActions from '../../state/actions/employee.actions';
import * as fromReducer from '../../state/reducers';
import { Store, ActionsSubject } from '@ngrx/store';
import { GetEmployees } from '../../models/get-employees';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee';
import { MatDialog } from '@angular/material';
import { EmployeeDetailContainerComponent } from '../employee-detail-container/employee-detail-container.component';

@Component({
  selector: 'app-employee-main-container',
  templateUrl: './employee-main-container.component.html',
  styleUrls: ['./employee-main-container.component.scss']
})
export class EmployeeMainContainerComponent implements OnInit {
  request: GetEmployees;
  constructor(private store: Store<fromReducer.EmployeeState>, private dialog: MatDialog) { }

  employees$: Observable<Employee[]> = this.store.select(fromReducer.getEmployees);
  length$: Observable<number> = this.store.select(fromReducer.getTotalRecords);
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  ngOnInit() {
    this.refreshdata();
  }

  refreshdata(): void {
    this.request = new GetEmployees(this.pageSizeOptions[0], 0);
    this.store.dispatch(new employeeActions.LoadEmployees(this.request));
  }

  changePage(event: any): void {
    const offSet = event.pageIndex * event.pageSize;
    this.request = new GetEmployees(event.pageSize, offSet);
    this.store.dispatch(new employeeActions.LoadEmployees(this.request));
  }

  viewDetails(event: any): void {
    const dialogRef = this.dialog.open(EmployeeDetailContainerComponent,
      {
        panelClass : 'employee-modal-dialog',
        data : {employeeId: event.id}
      }
    );
    dialogRef.afterClosed().subscribe(_=> this.refreshdata());
  }
}
