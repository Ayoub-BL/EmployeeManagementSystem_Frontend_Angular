import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeDTO } from '../employeeDTO';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  //employee: Employee = new Employee();
  employee: EmployeeDTO = new EmployeeDTO();
  roles: Array<string> = new Array<string>();

  id: number;
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) {
    this.getRoleList();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }

  getRoleList(): void {
    this.employeeService.getRoleList().subscribe(data => {
      this.roles = data;
    });
  }
  goToEmployeeList(): void {
    this.router.navigate(['/employees']);
  }

  onSubmit(): void {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
      this.goToEmployeeList();
    }, error => console.log(error));
  }

}
