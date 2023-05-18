import { formatCurrency } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { PendingService } from 'src/app/Sevice/pending.service';

@Component({
  selector: 'app-pending-active',
  templateUrl: './pending-active.component.html',
  styleUrls: ['./pending-active.component.scss']
})
export class PendingActiveComponent implements OnInit{
  @Input() pending: any ;
  subTasking: boolean = false;


  constructor(private pendinServi: PendingService){
  }

  ngOnInit(): void {}

  showListTask():boolean{
    return this.subTasking = !this.subTasking;
  }
}
