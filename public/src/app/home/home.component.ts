import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { Router } from "@angular/router";
import { observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products = [];
  selectedProduct = [];
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(){
    let observable = this._http.getAllProducts();
    observable.subscribe((data: object) => {
      console.log('RECEIVED DATA FROM getProducts()', data)
      this.products = data['products']
    })
  }
  // addToCart(id: string){
  //   console.log(`Clicked ${id}`);
  //   let observable = this._http.addToCart(id)
  //   observable.subscribe((data: object) => {
  //     console.log(`THIS ITEM IS GETTING ADDED TO CART ${id}`)
  //     this.selectedProduct = data['selectedProduct']
  //   });
  //   this.getProducts();
  // }
}