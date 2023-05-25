import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PendingService } from 'src/app/Sevice/pending.service';

@Component({
  selector: 'app-all-sub-task',
  templateUrl: './all-sub-task.component.html',
  styleUrls: ['./all-sub-task.component.scss'],
})
export class AllSubTaskComponent implements OnInit {
  @Input() subtask: any;
  @Input() idSubi: number;
  @Input() Task: any; 
  id: number;
  pending: any; 
  subts: any = {id:0, title:''};
  subTodo: any[];
  editTitle: boolean = false;
  changeTitle: FormGroup;
  constructor(private servi: PendingService) {
    this.changeTitle = new FormGroup({
      title: new FormControl(''),
    });
   this.id =  this.idSubi;
  }
  ngOnInit(): void {
    this.pending = this.Task;
    this.subTodo = this.pending.subTasks; 
    console.log(this.idSubi)
  }
  
  saveSub() {
    this.subts.id = this.subtask.id;
    this.subts.title= this.changeTitle.value['title'];
    this.subtask = this.subts; 
    this.subTodo[this.subts.id] = this.subts; 
    this.pending.subTasks = this.subTodo; 
    this.servi.updateTaskPending( this.pending.id, this.pending).subscribe(
      (e:any) => console.log('Actualizando Tarea: ',e.id)
    );
    this.editTitle = false;
  }


  trueSub(): boolean {
    return (this.editTitle = !this.editTitle);
  }
}
