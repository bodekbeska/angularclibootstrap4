import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { DetailsComponent } from './details/details.component';
const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path:'one',
    component: OneComponent
  },
   {
    path:'details/:id',
    component: DetailsComponent
  },
  {
    path:'two',
    component: TwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
