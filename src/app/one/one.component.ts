import { Component, OnInit, OnDestroy  } from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs/Observable';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit  {
form:  FormGroup;
employees : any[];
searchBox : any;
result :Observable<any>;

  constructor(public fb : FormBuilder, private es: EmployeeService, private http : Http) {
    this.form= this.fb.group({
      searchBox:''
    });
   }

  ngOnInit() {
/*
this.result = this.form.valueChanges
              .debounceTime(500)
              .switchMap(query => this.es.searchEmployee(query));
              //.map(res => res.json());
              //.map(res => res.items);
       */         

const debounce = this.form.valueChanges.debounceTime(200);
debounce.subscribe( data =>   {     
      this.searchEmployee(data.searchBox);
    });

  }

searchEmployee(searchTerm){

 console.log(searchTerm);
      this.es.searchEmployee(searchTerm)
      .subscribe(data => {
           console.log(data);
           this.employees = data;
      });
}


}
