import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
path: string;

  constructor(private _router:Router) { }

  ngOnInit() {
      this._router.events.subscribe(val=>{       
        this.path=val.url;
      });
    
    
  }

}
