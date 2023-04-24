import { Component, OnInit } from '@angular/core';
import { tasking } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  taski: tasking[] = [];

  ImpList($event: any){
    console.log($event);
    this.taski.push($event);
  }

  ngOnInit(): void { }
}
