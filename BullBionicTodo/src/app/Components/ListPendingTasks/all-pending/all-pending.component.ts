import { Component, Input } from '@angular/core';
import { PendingService } from '../../../Sevice/pending.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-all-pending',
  templateUrl: './all-pending.component.html',
  styleUrls: ['./all-pending.component.scss']
})
export class AllPendingComponent {
  @Input() pending: any;
  Task: any; 
  subTodo: any[]; 
  idSub: number; 
  task: FormGroup;
  subTasking: boolean = false;
  editTask: boolean = false; 
  addSubTask: boolean = false; 
  
  constructor(private servi: PendingService) {
    this.task = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      addSub: new FormControl(''), 
      stade: new FormControl(''),
      deadLine: new FormControl('')
    })
  }

  ngOnInit(): void {
    
    this.Task = this.pending; 
    this.subTodo = this.Task.subTasks;
    this.Task.subTasks = this.subTodo;
  }
  
  saveSubTodo():void{
    let inputvalue = this.task.controls['addSub'].value; 
    if(inputvalue.trim() === ''){
      alert('Agrega una subtarea antes de guardar');
    }else{
      let n1: number = this.subTodo.length;
      let subts: any = {id: n1 + 1, title: this.task.value['addSub']}
      this.subTodo.push(subts); 
      this.servi.updateTaskPending( this.Task.id, this.Task).subscribe(
        (e:any) => console.log('Actualizando Tarea')
      );
  
      this.addSubTask =false;
    }
  }

  addTodo():boolean{
    this.task.controls['addSub'].setValue('');
    return this.addSubTask = !this.addSubTask; 
  }
  idSubTask():number {
    return this.idSub = this.pending.id;
  }
  editTodo():boolean {
    return this.editTask = !this.editTask; 
  }

  showSubTask(): boolean {
    this.subTasking = !this.subTasking;
    return this.subTasking;
  }
  
}
