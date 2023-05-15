import { Component, Input, OnInit } from '@angular/core';
import { tasking } from '../models/task.model';

@Component({
  selector: 'list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements OnInit{

  propierContainerList : string[] = ['container__list'];

  @Input() taskiList : tasking[];


  constructor(){

    this.taskiList = [];

  }

  changeCoplete(taski : tasking){
    taski.complete = !taski.complete;
  }

  Delete(indice: any){
    this.taskiList.splice(indice, 1);
  }

  ngOnInit(): void {
  }
}
