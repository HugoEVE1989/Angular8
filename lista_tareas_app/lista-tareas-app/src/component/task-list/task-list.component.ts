import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public taskListNoCompleted:  any[];
  public taskListCompleted: any[];

  constructor() { 
    this.taskListCompleted = [];
    this.taskListNoCompleted = [];
  }

  ngOnInit() {
  }

}
