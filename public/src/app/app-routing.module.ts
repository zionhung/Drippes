import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppComponent } from './app.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { HomeComponent } from './home/home.component';
import { OwnerComponent } from './owner/owner.component';
import { AdminComponent } from './admin/admin.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'createproductfrontend', component: CreateproductComponent },
  { path: 'drippes', component: HomeComponent },
  {
    path: 'admin', children: [
      { path: '', component: AdminComponent },
      { path: 'owner', component: OwnerComponent },
      { path: ':id/reviews', component: ReviewsComponent },
      { path: 'addemployee', component: AddemployeeComponent }
    ]
  },
  {
    path: 'employee', children: [
      { path: '', component: EmployeeComponent },
      { path: ':id', component: EmployeeComponent },
    ]
  },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
