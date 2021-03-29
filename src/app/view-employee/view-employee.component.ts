import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { SecondModaleComponent } from '../second-modale/second-modale.component';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  @Input() context;
  id: number;
  employee: Employee;


  constructor(public activeModal: NgbActiveModal, private route: ActivatedRoute,
    private employeeService: EmployeeService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.id = this.context;
    this.employee = new Employee();
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    });
  }

  open(context2): void {
    const modalRef = this.modalService.open(SecondModaleComponent, { size: 'xl' });
    modalRef.componentInstance.context2 = context2;
  }

}

