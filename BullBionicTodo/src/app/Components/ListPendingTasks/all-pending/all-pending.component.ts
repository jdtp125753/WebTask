import { Component, Input } from '@angular/core';
import { PendingService } from '../../../Sevice/pending.service';
import { CheckboxControlValueAccessor, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-all-pending',
  templateUrl: './all-pending.component.html',
  styleUrls: ['./all-pending.component.scss'],
})
export class AllPendingComponent {
  @Input() pending: any;
  Task: any;
  TaskOld: any;
  TaskOldi: any;
  subTaskOld: any[];
  subTaskOldi: any[];
  subTodo: any[];
  idSub: number;
  task: FormGroup;
  classification: string;
  subTasking: boolean = false;
  editTask: boolean = false;
  editTitle: boolean = false;
  editDescription: boolean = false;
  editClasification: boolean = false;
  editDeadLine: boolean = false;
  editWasDate: boolean = false;
  addSubTask: boolean = false;
  showCompleteTask: boolean = false;
  showDeadLine: boolean = false;
  date: string;
  taskicomplete: boolean = false;
  aComplete: string; 
  constructor(private servi: PendingService) {
    this.task = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      addSub: new FormControl(''),
      stade: new FormControl(''),
      deadLine: new FormControl(''),
      wasDate: new FormControl(''),
    });
  }
  ngOnInit(): void {
    this.editOld();
    this.edit();
    this.aComplete = this.Task.classification;
    if(this.aComplete == 'completed'){
      this.taskicomplete = true; 
    }else{
      this.taskicomplete = false; 
    }
  }
  editOld() {
    this.TaskOld = { ...this.pending };
    this.TaskOldi = this.TaskOld;
    this.subTaskOld = [...this.pending.subTasks];
    this.subTaskOldi = this.subTaskOld;
  }
  edit() {
    this.Task = this.pending;
    this.subTodo = this.Task.subTasks;
    this.task.controls['title'].setValue(this.Task.title);
    this.task.controls['description'].setValue(this.Task.description);
    this.task.controls['deadLine'].setValue(this.Task.deadline);
    this.task.controls['wasDate'].setValue(this.Task.dayWasDone);
    if (this.Task.dayWasDone == null) {
      this.showCompleteTask = true;
    }
    if (this.Task.deadline == null || this.Task.deadline == '') {
      this.showDeadLine = false;
    }else{
      this.showDeadLine = true;
    }
    
  }
  showDataComplete(): boolean {
    return (this.showCompleteTask = !this.showCompleteTask);
  }
  editDeadLinei(): boolean {
    return (this.editDeadLine = !this.editDeadLine);
  }
  saveDeadLine() {
    let inputvalue = this.task.controls['deadLine'].value;
    if (inputvalue.trim() === '') {
      this.Task.deadline = '';
      this.Task.classification = 'active';
      this.servi
        .updateTaskPending(this.Task.id, this.Task)
        .subscribe((_e: any) => console.log('Actualizando Tarea'));
    } else {
      this.Task.deadline = this.task.value['deadLine'];
      this.Task.classification = 'scheduled';
      this.servi
        .updateTaskPending(this.Task.id, this.Task)
        .subscribe((_e: any) => console.log('Actualizando Tarea'));
    }
    this.editDeadLine = false;
  }

  ActiveComplete($event) {
    if ($event.target.checked) {
      let now = new Date();
      let year = now.getFullYear();
      let month = now.getMonth() + 1;
      let day = now.getDate();
      this.date = `${year}-${month.toString().padStart(2, '0')}-${day
        .toString()
        .padStart(2, '0')}`;
      this.task.controls['wasDate'].setValue(this.date);
      this.Task.dayWasDone = this.task.value['wasDate'];
      this.Task.classification = 'completed';
      this.servi
        .updateTaskPending(this.Task.id, this.Task)
        .subscribe((_e: any) => console.log('Actualizando Tarea'));
      this.taskicomplete = true;
      console.log(this.date);
    } else {
      this.date = null;
      this.task.controls['wasDate'].setValue(this.date);
      this.Task.dayWasDone = this.task.value['wasDate'];
      if (this.Task.deadline == null || this.Task.deadline == '') {
        this.Task.classification = 'active';

      } else {
        this.Task.classification = 'scheduled';
      }
      this.servi
        .updateTaskPending(this.Task.id, this.Task)
        .subscribe((_e: any) => console.log('Actualizando Tarea'));
      this.taskicomplete = false;
    }
  }

  
  editDescriptioni(): boolean {
    return (this.editDescription = !this.editDescription);
  }
  saveDescription() {
    let inputvalue = this.task.controls['description'].value;
    if (inputvalue.trim() === '') {
      alert('Agrega una subtarea antes de guardar');
    } else {
      this.Task.description = this.task.value['description'];
      this.servi
        .updateTaskPending(this.Task.id, this.Task)
        .subscribe((_e: any) => console.log('Actualizando Tarea'));
    }
    this.editDescription = false;
  }
  editTitleTli(): boolean {
    return (this.editTitle = !this.editTitle);
  }

  saveTitle() {
    let inputvalue = this.task.controls['title'].value;
    if (inputvalue.trim() === '') {
      alert('Agrega una subtarea antes de guardar');
    } else {
      this.Task.title = this.task.value['title'];
      this.servi
        .updateTaskPending(this.Task.id, this.Task)
        .subscribe((_e: any) => console.log('Actualizando Tarea'));
    }
    this.editTitle = false;
  }

  deleteSubTask(index: number) {
    let objectId: number = index - 1;
    this.subTodo.splice(objectId, 1);
    this.servi
      .updateTaskPending(this.Task.id, this.Task)
      .subscribe((_e: any) => console.log('Actualizando Tarea'));
  }
  saveSubTodo(): void {
    let inputvalue = this.task.controls['addSub'].value;
    if (inputvalue.trim() === '') {
      alert('Agrega una subtarea antes de guardar');
    } else {
      let n1: number = this.subTodo.length;
      let subts: any = { id: n1 + 1, title: this.task.value['addSub'] };
      this.subTodo.push(subts);

      this.servi
        .updateTaskPending(this.Task.id, this.Task)
        .subscribe((_e: any) => console.log('Actualizando Tarea'));
      this.addSubTask = false;
    }
  }
  saveTask(): void {
    console.log('Tarea actualizada');
    location.reload();
    this.editTask = false;
  }
  canselEdit(): void {
    console.log(this.TaskOldi);
    this.TaskOldi.subTasks = this.subTaskOldi;
    this.servi
      .updateTaskPending(this.TaskOldi.id, this.TaskOldi)
      .subscribe((_e: any) => {
        console.log('Se cancelo la edicion de la Tarea');
        location.reload();
      });
  }

  addTodo(): boolean {
    this.task.controls['addSub'].setValue('');
    return (this.addSubTask = !this.addSubTask);
  }

  idSubTask(): number {
    return (this.idSub = this.pending.id);
  }
  editTodo(): boolean {
    return (this.editTask = !this.editTask);
  }

  showSubTask(): boolean {
    return (this.subTasking = !this.subTasking);
  }
}
