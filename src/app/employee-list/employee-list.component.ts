import { Router } from '@angular/router';
import { EmployeeService } from './../employee.service';
import { Employee } from '../employee';

import { EmployeeDTO } from '../employeeDTO';
import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewEmployeeComponent } from '../view-employee/view-employee.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: EmployeeDTO[];

  constructor(private employeeService: EmployeeService, private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getEmployees();
    this.employeeService.getEmployeesList();
  }

  private getEmployees(): void {
    this.employeeService.getEmployeesList().subscribe(data => {
      // this.employees = data;
      this.employees = data['employeesDTOList'];
      // console.log('employees', this.employees, 'getEmployees', data);
      console.log('modalemap[employeesDTOList]=' + data['employeesDTOList'][0].id);
      console.log('modalemap[isTrue]=' + data['isTrue']);
    });
  }

  updateEmployee(id: number): void {
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe(data => {
      this.getEmployees();
      this.employeeService.getEmployeesList();
    });
  }


  open(context): void {
    const modalRef = this.modalService.open(ViewEmployeeComponent, { size: 'xl' });
    modalRef.componentInstance.context = context;
  }
}
