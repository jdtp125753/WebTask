import { Component, Input } from '@angular/core';
import { PendingService } from 'src/app/Sevice/pending.service';

@Component({
  selector: 'app-scheduled-pending',
  templateUrl: './scheduled-pending.component.html',
  styleUrls: ['./scheduled-pending.component.scss']
})
export class ScheduledPendingComponent {
  @Input() pending: any;
  showlistSub: boolean = false;
  constructor(private pendinServi: PendingService){

  }

  showSubTask(): boolean{
    return this.showlistSub = !this.showlistSub;
  }
}
