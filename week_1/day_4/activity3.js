// phil welsby - 29 july 2021

//Cash machine time!
//Let’s create one that:
//Dispenses cash if your pin number is correct and your
//balance is equal to, or more than, the amount you’re
//trying to withdraw!

let pinNum = 1234
let custPin = 1234
let accnum = 12345678

const cashMachine = (amount, accnum) => {
  // code goes here


}

const checkPin = (pinNum) => 
{
  // code goes here
  if (pinNum === custPin) {
    cashMachine();
  }
}

const balanceCheck = (custBalance) => {
  // code goes here
}



const cashWithdrawal = (amount, accnum) => {
console.log(`Withdrawing ${amount} from account ${accnum}`);
}
//cashWithdrawal(300, 50449921);
//cashWithdrawal(30, 50449921);
//cashWithdrawal(200, 50447921);
