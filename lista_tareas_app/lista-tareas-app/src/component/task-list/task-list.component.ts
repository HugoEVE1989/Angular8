import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public taskListNoCompleted:  any[];
  public taskListCompleted: any[];
  public showInputTask: boolean;
  public errorInput:boolean;

  constructor() { 
    this.taskListCompleted = [];
    this.taskListNoCompleted = [];
    this.showInputTask = false;
    this.errorInput = false; 
  }

  ngOnInit() {
  }

  showInputTextTask(){
    this.showInputTask=true;
  }

  addTask(description){
    
    if(description){
      const task: Task={
        'date': new Date(),
        'description':description,
        'completed':false 
      }
      this.taskListNoCompleted.push(task);
      this.errorInput=false;
      this.showInputTask=false;
    }
    else{
      this.errorInput=true;
    }


    
  }

}
