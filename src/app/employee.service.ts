import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {
private searchUrl : string;
  constructor(private http : Http) { }

searchEmployee(str: string){
  this.searchUrl ='http://localhost:8080/jersey/webapi/employees/'+str;
  return this.http.get(this.searchUrl)
  .map(res => res.json());
}

}
