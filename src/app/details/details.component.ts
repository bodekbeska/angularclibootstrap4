import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
private sub: any;
id: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
       this.id = params['id']; // (+) converts string 'id' to a number this.id = +params['id'];

       // In a real app: dispatch action to load the details here.
       console.log(this.id);
    });
  }

     ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
