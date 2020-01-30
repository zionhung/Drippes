import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _httpClient: HttpClient) { }
  createProduct(data) {
    return this._httpClient.post('/createproduct', data);
  };
  createEmployee(data) {
    console.log('data:', data)
    return this._httpClient.post('/createemployee', data);
  };
}
