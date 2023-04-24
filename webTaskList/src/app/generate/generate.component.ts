import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { tasking } from '../models/task.model';

@Component({
  selector: 'generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss'],
})
export class GenerateComponent  implements OnInit{

  @Output() addTask: EventEmitter<tasking>;

  newTask: tasking;

  constructor(){
    this.newTask = new tasking();
    this.addTask =new EventEmitter();
  }

  submitSave(){
    this.addTask.emit(this.newTask);
    this.newTask = new tasking();
  }

  ngOnInit(): void {}

}
