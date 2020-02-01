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
  getEmployees() {
    return this._httpClient.get('/getemployees');
  };
  removeEmployee(_id: string) {
    return this._httpClient.delete(`/removeemployee/${_id}`)
  };
  makeAdmin(_id: string) {
    return this._httpClient.put('/makeAdmin', { id: _id })
  };
  makeEmployee(_id: string) {
    return this._httpClient.put('/makeemployee', { id: _id })
  };
  change_convert_rate(data) {
    return this._httpClient.put('/changeconvertrate', data)
  };
  getEmployee(id: string) {
    return this._httpClient.get(`/getemployee/${id}`);
  };
  getTask(id: string) {
    return this._httpClient.get(`/gettask/${id}`);
  };
  removeReview(_id: string) {
    return this._httpClient.get(`/removereview/${_id}`)
  };
  getOrder(id: string) {
    return this._httpClient.get(`/getorder/${id}`);
  };
  changeTaskStatus(id: string) {
    return this._httpClient.get(`/changetaskstatus/${id}`);
  };
}
