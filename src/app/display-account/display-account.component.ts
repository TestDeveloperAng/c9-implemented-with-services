import { Component, OnInit,Input,Output,EventEmitter,ElementRef } from '@angular/core';

@Component({
  selector: 'app-display-account',
  templateUrl: './display-account.component.html',
  styleUrls: ['./display-account.component.css']
})
export class DisplayAccountComponent implements OnInit {

  @Input() accountDetails;
  @Input() id: number;
  @Output() statusChanged = new EventEmitter();
  @Output() balanceChanged = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onstatusChange(eventData){
    this.statusChanged.emit({
      id  : this.id,
      status : eventData.target.value
    })
  }

  onChangeBalance(updatedBalance : HTMLInputElement){
    this.balanceChanged.emit({
      id : this.id,
      balance : updatedBalance.value
    })
  }

}