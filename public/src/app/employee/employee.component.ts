import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  this_employee: any;
  tasks_ids: any;
  tasks: Array<Object>;
  finished_tasks: Array<Object>;
  avg_rate: any;
  temp_price_count: any;
  finished_task_money: any;
  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.avg_rate = 3;
    this.finished_task_money = 0;
    this.getEmployee()
  }

  getEmployee() {
    this._route.params.subscribe((params) => {
      let tempObservable = this._httpService.getEmployee(params['id']);
      tempObservable.subscribe((data: any) => {
        //console.log('data', data)
        this.tasks_ids = data["tasks"];
        this.this_employee = data;
        //console.log('this.tasks_ids2:', this.tasks_ids)
        for (var _id in this.tasks_ids) {
          this.getTask(_id);
        }
      })
    })
  }

  getTask(_id: string) {
    let tempObservable = this._httpService.getTask(_id);
    tempObservable.subscribe((data: any) => {
      this.temp_price_count = 0;
      for (var item of data.items) {
        this.temp_price_count += item.unite_price * item.qty
      }
      data.count_money = this.temp_price_count;
      this.tasks.push(data)
      if (data.is_completed == true) {
        this.finished_tasks.push(data)
        this.finished_task_money += this.temp_price_count;
      }
    })
  }

  changeTaskStatus(_id: string) {
    let tempObservable = this._httpService.changeTaskStatus(_id);
    tempObservable.subscribe((data: any) => {
      //console.log('changed the task status:', data)
      this.getEmployee();
    })
  }

}
