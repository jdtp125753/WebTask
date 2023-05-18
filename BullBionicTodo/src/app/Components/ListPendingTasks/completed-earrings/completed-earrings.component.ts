import { Component, Input, OnInit } from '@angular/core';
import { PendingService } from 'src/app/Sevice/pending.service';

@Component({
  selector: 'app-completed-earrings',
  templateUrl: './completed-earrings.component.html',
  styleUrls: ['./completed-earrings.component.scss']
})
export class CompletedEarringsComponent implements OnInit{
  @Input() pending: any ;
  subTasking: boolean = false;

  constructor(private pendinServi: PendingService){

  }
  showSubTask(): boolean{
    this.subTasking = !this.subTasking;
    return this.subTasking;
  }
  ngOnInit(): void {}
}
