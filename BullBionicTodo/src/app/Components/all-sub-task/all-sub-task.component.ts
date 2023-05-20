import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-all-sub-task',
  templateUrl: './all-sub-task.component.html',
  styleUrls: ['./all-sub-task.component.scss']
})
export class AllSubTaskComponent implements OnInit{
  @Input() subtask: any;
  editTitle: boolean= false;

  constructor(){

  }
  ngOnInit(): void {}

  trueSub(): boolean {
    return this.editTitle = !this.editTitle; 
  }


}
