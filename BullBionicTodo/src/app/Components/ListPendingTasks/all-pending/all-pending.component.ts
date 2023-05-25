import { Component, Input } from '@angular/core';
import { PendingService } from '../../../Sevice/pending.service';

@Component({
  selector: 'app-all-pending',
  templateUrl: './all-pending.component.html',
  styleUrls: ['./all-pending.component.scss']
})
export class AllPendingComponent {
  @Input() pending: any;
  subT: any[]; 
  idSub: number; 
  subTasking: boolean = false;
  editTask: boolean = false; 
  constructor(private pendinServi: PendingService) {

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
  
  ngOnInit(): void { }
}
