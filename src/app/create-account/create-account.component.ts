import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  accountName = '';
  accountBalance = '';
  accountStatus = '';
  @Output() serverCreated = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated.emit({
      name : this.accountName,
      balance : this.accountBalance,
      status : this.accountStatus
    })
  }

}