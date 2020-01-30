import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {
  newProduct: any;
  editProduct: any;
  errors: "";
  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.newProduct = { product_name: '', product_url: '', unit_price: 9, unit_count_name: '' }
  }

  createProduct() {
    //console.log('newProduct:', this.newProduct)
    let tempObservable = this._httpService.createProduct(this.newProduct);
    tempObservable.subscribe(data => {
      if (data.hasOwnProperty("errors")) {
        //console.log('data:', data)
        if (data.hasOwnProperty("message")) {
          this.errors = data['message']
        } else {
          this.errors = data['errors']
        }
      } else {
        console.log("Created a new Product:", data)
        //this.newProduct = data
        this.newProduct = { product_name: '', product_url: '', unit_price: 9, unit_count_name: '' }
        console.log("Re-directing to home");
        this._router.navigate(['/drippes']);
      }
    })
  }

}
