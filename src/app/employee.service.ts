import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { EmployeeDTO } from './employeeDTO';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //adress server for employees list
  private baseURL = 'http://localhost:9000/api/v1/employees';
  //adress server
  private baseURL2 = 'http://localhost:9000/api/v1/';

  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<EmployeeDTO[]> {
    return this.httpClient.get<EmployeeDTO[]>(`${this.baseURL}`);
  }

  getRoleList(): Observable<[]> {
    return this.httpClient.get<[]>(`${this.baseURL2}getRoles`);
  }


  createEmployee(employee: EmployeeDTO): Observable<object> {
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeeById(id: number): Observable<EmployeeDTO> {
    return this.httpClient.get<EmployeeDTO>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, employeeDTO: EmployeeDTO): Observable<any> {
    return this.httpClient.put(`${this.baseURL}/${id}`, employeeDTO);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
