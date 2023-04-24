import { Component, Input, OnInit } from '@angular/core';
import { tasking } from '../models/task.model';

@Component({
  selector: 'list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements OnInit{

  @Input() taskiList : tasking[];

  constructor(){
    this.taskiList = [];
  }



  ngOnInit(): void {
  }
}
