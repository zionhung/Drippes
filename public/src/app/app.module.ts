import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//http
import { FormsModule } from '@angular/forms';
import { HttpService } from './http.service';
import { HttpClientModule } from "@angular/common/http";


//componennts
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { CartComponent } from './cart/cart.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { OwnerComponent } from './owner/owner.component';
import { AdminComponent } from './admin/admin.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent,
    CreateproductComponent,
    CartComponent,
    AddemployeeComponent,
    OwnerComponent,
    AdminComponent,
    ReviewsComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
