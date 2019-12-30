import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  accounts =  [
    {
      name : 'Account 1',
      balance : 2000,
      status : 'active'
    },

    {
      name : 'Account 2',
      balance : 0,
      status : 'active'
    }
  ]

  createServer(accountDetails){
    this.accounts.push(accountDetails);
    console.log('New Account Created with Details :- '+ accountDetails);
  }

  onStatusChanged(accountDataChanged){
  this.accounts[accountDataChanged.id].status = accountDataChanged.status;
  console.log('Status of' + accountDataChanged.id +' changed to '+ accountDataChanged.status);
  }

  onBalanceChange(accountDataChanged){
    this.accounts[accountDataChanged.id].balance = accountDataChanged.balance;
    console.log('Balance of' + accountDataChanged.id +' changed to '+ accountDataChanged.balance);
  }
}
