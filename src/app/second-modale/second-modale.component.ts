import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-second-modale',
  templateUrl: './second-modale.component.html',
  styleUrls: ['./second-modale.component.css']
})
export class SecondModaleComponent implements OnInit {
  @Input() context2;


  constructor(public activeModal: NgbActiveModal, private route: ActivatedRoute,
    private employeeService: EmployeeService, private modalService: NgbModal) {
    console.log(this.context2);
  }

  ngOnInit(): void {
  }

}
