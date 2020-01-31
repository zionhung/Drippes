import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppComponent } from './app.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'createproduct', component: CreateproductComponent },
  { path: 'drippes', component: HomeComponent},
  { path: 'drippes/cart/:id', component: CartComponent},
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
