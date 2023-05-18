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
  pendingsComplete: any[] = [];
  pendingsActive: any[] = [];
  pendingsScheduled: any[] = [];
  constructor(private pendinServi: PendingService) {
    this.openSheduled();

    this.getPendingsCompleted();
    this.getPendingsActive();
    this.getPendingsScheduled();
  }

  ngOnInit(): void {
  }

  getPendingsAll(){
    this.pendinServi.getPendingsAll()//Hay que crear el componente y configurarlo
  }

  getPendingsScheduled(){
    this.pendinServi.getPendingsSheduled().subscribe((pendingsi: any[]) =>{
      this.pendingsScheduled = pendingsi;
    })
  }

  getPendingsCompleted(): void{
    this.pendinServi.getPendingsComplete().subscribe((pendingsi: any[]) =>{
      this.pendingsComplete = pendingsi;
    });

    console.log(this.pendingsComplete)

  }

  getPendingsActive(){
    this.pendinServi.getPendingsActive().subscribe((pendingsi: any[]) =>{
      this.pendingsActive = pendingsi;
    })
  }

  openActive(): void {
    this.active = true;
    this.sheduled = false;
    this.complete = false;
  }
  openSheduled() {
    this.active = false;
    this.sheduled = true;
    this.complete = false;
  }

  openComplete() {
    this.active = false;
    this.sheduled = false;
    this.complete = true;
  }
}
