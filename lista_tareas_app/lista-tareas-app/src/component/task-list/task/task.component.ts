import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/interfaces/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  @Input() index: number;

  constructor() { }

  ngOnInit() {

    //los input solo estan disponibles en el ngOnInit

  }

}
