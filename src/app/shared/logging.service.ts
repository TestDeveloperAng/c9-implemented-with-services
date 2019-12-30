export class LoggingService {

  constructor() { }

  accountCreationLog(data){
    console.log('New Account Created with Details :- '+ data);
  }

  statusChangedLog(id,status){
    console.log('Status of' + id +' changed to '+ status);
  }

  balanceChangedLog(id,balance){
    console.log('Balance of' + id +' changed to '+ balance);
  }

}