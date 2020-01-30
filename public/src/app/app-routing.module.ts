import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppComponent } from './app.component';
import { CreateproductComponent } from './createproduct/createproduct.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'createproduct', component: CreateproductComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
