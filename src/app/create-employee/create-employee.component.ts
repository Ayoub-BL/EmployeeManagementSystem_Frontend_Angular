
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from './../employee.service';
import { EmployeeDTO } from '../employeeDTO';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: EmployeeDTO = new EmployeeDTO();
  roles: Array<String> = new Array<String>();

  constructor(private employeeService: EmployeeService, private router: Router) {
    this.getRoleList();
  }
  ngOnInit(): void {
  }

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data);
    }, error => console.log(error));
    this.goToEmployeeList();
  }
  getRoleList(): void {
    this.employeeService.getRoleList().subscribe(data => {
      this.roles = data;
    });
  }
  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }
  onSubmit() {
    console.log(this.employee);
    this.saveEmployee();
  }

}
