import { Component, OnInit } from '@angular/core';
import { PendingService } from 'src/app/Sevice/pending.service';

@Component({
  selector: 'app-home-pending',
  templateUrl: './home-pending.component.html',
  styleUrls: ['./home-pending.component.scss'],
})
export class HomePendingComponent implements OnInit {
  active: boolean;
  sheduled: boolean;
  complete: boolean;
  all: boolean;
  labelAll: boolean = false;
  labelActive: boolean = false;
  labelSchedu: boolean = false;
  labelCompleted: boolean = false;
  pendingsComplete: any[] = [];
  pendingsActive: any[] = [];
  pendingsScheduled: any[] = [];
  pendingsAll: any[] = [];
  allNumber: number;
  alln: boolean = false; 
  constructor(private pendinServi: PendingService) {
    this.openAll();
    this.getPendingsAll();
    this.getPendingsCompleted();
    this.getPendingsActive();
    this.getPendingsScheduled();
     
  }
  showlabel(a: string) {
    this.alln = true; 
    switch (a) {
      case 'al':
        this.labelAll = true;
        break;
      case 'ac':
        this.labelActive = true;
        break;
      case 'sc':
        this.labelSchedu = true;
        break;
      case 'com':
        this.labelCompleted = true;
        break;
    }
  }
  countAll(a?: string): number {
    
    switch (a) {
      case 'all':
        this.allNumber = this.pendingsAll.length;
        break;
      case 'active':
        this.allNumber = this.pendingsActive.length;
        break;
      case 'scheduled':
        this.allNumber = this.pendingsScheduled.length;
        break;
      case 'completed':
        this.allNumber = this.pendingsComplete.length;
        break;
      default:
        this.allNumber = this.pendingsAll.length;
        break;
    }
    return this.allNumber;
  }
  downlabel() {
    this.labelAll = false;
    this.labelActive = false;
    this.labelSchedu = false;
    this.labelCompleted = false;
  }

  
  getPendingsAll() {
    this.pendinServi.getPendingsAll().subscribe((pend: any[]) => {
      this.pendingsAll = pend;
    });
  }
  ngOnInit(): void {
  
  }

  getPendingsScheduled() {
    this.pendinServi.getPendingsSheduled().subscribe((pendingsi: any[]) => {
      this.pendingsScheduled = pendingsi;
    });
  }

  getPendingsCompleted(): void {
    this.pendinServi.getPendingsComplete().subscribe((pendingsi: any[]) => {
      this.pendingsComplete = pendingsi;
    });

    console.log(this.pendingsComplete);
  }

  getPendingsActive() {
    this.pendinServi.getPendingsActive().subscribe((pendingsi: any[]) => {
      this.pendingsActive = pendingsi;
    });
  }

  openAll(): void {
    this.all = true;
    this.active = false;
    this.sheduled = false;
    this.complete = false;
    this.countAll('all')
  }

  openActive(): void {
    this.all = false;
    this.active = true;
    this.sheduled = false;
    this.complete = false;
    this.countAll('active')
  }
  openSheduled() {
    this.all = false;
    this.active = false;
    this.sheduled = true;
    this.complete = false;
    this.countAll('scheduled')
  }

  openComplete() {
    this.countAll('completed')
    this.all = false;
    this.active = false;
    this.sheduled = false;
    this.complete = true;
  }
}
