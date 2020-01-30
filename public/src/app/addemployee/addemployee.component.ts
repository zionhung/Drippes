import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  newEmployee: any;
  editEmployee: any;
  errors: "";
  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.newEmployee = { first_name: '', last_name: '', password: '', profile_url: '', email: '', authority: 0, avg_rate: 3, tasks: [] }
  }

  createEmployee() {
    let tempObservable = this._httpService.createEmployee(this.newEmployee);
    tempObservable.subscribe(data => {
      if (data.hasOwnProperty("errors")) {
        //console.log('data:', data)
        if (data.hasOwnProperty("message")) {
          this.errors = data['message']
        } else {
          this.errors = data['errors']
        }
      } else {
        console.log("Created a new Employee:", data)
        this.newEmployee = data
        this.newEmployee = { name: '', cuisine: '', show_delete: true };
        console.log("Re-directing to home");
        this._router.navigate(['/drippes']);
      }
    })
  }
}
