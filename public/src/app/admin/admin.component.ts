import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  cur_user: any;
  edit_convert: any;
  employees: any;
  //edit_employee: any;
  total_employees_count: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.cur_user = { first_name: 'Micheal', last_name: 'Choi', password: 'michealchoi', profile_url: 'https://media-exp1.licdn.com/dms/image/C5103AQFj5Negw55QIg/profile-displayphoto-shrink_200_200/0?e=1585180800&v=beta&t=KOGmgcIYEyRPYIzN-rfYrkBLU4qhr7ELJnTtHd0W9JY', email: 'michealchoid@gmail.com', authority: 9, avg_rate: 3, tasks: [] }
    this.edit_convert = { id: '', convert_rate: 3 };
    this.total_employees_count = 0;
    this.getEmployees();
  }
  getEmployees() {
    let tempObservable = this._httpService.getEmployees();
    tempObservable.subscribe(data => {
      this.employees = data;
      for (let employee of this.employees) {
        this.total_employees_count += 1
      }
      console.log('get employees:', data)
    })
  }
  removeEmployee(_id: string) {
    let tempObservable = this._httpService.removeEmployee(_id);
    tempObservable.subscribe(data => {
      console.log("Removed Employee:", data);
      this.getEmployees();
    })
  }
  makeAdmin(_id: string) {
    let tempObservable = this._httpService.makeAdmin(_id);
    tempObservable.subscribe(data => {
      console.log('made Admin:', data)
      this.getEmployees();
      //this._router.navigate(['/admin'])
    })
  }
  makeEmployee(_id: string) {
    let tempObservable = this._httpService.makeEmployee(_id);
    tempObservable.subscribe(data => {
      console.log('made Employee:', data)
      this.getEmployees();
      //this._router.navigate(['/admin'])
    })
  }

  change_convertRate(_id: string, convert_rate) {
    this.edit_convert.id = _id;
    this.edit_convert.convert_rate = convert_rate;
    console.log("this.edit_convert:", this.edit_convert)
    let tempObservable = this._httpService.change_convert_rate(this.edit_convert);
    tempObservable.subscribe(data => {
      console.log('changed the convert_rate of employee:', data)
      this.getEmployees();
      //this._router.navigate(['/admin'])
    })
  }

}
