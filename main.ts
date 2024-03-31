#! usr/bin/cnv node
import inquirer from "inquirer";
 let accountBalance:number = 20000;
 let accountPassword:any= "54321";

 let answer = await inquirer.prompt([
   { message:"Enter your account password?",
    name:"userpassword", 
    type:"any",}
 ])
 if(answer.userpassword===accountPassword){
   console.log("You enter correct password.")

   let operation = await inquirer.prompt([{
      name: "options",
      type: "list",
      message: "Select option you what to do?",
      choices:["withdraw", "cheakbalance"]
   }])
      
   if(operation.options === "withdraw"){
      let useramount = await inquirer.prompt([{
         name : "amount",
         type : "number",
         message : "Enter amount you want to withdraw"}]);
        

      
      if(useramount.amount <= accountBalance){
         let remainBalance = accountBalance - useramount.amount;
         console.log(`you successfully withdraw the ${useramount.amount}`);
         console.log(`your remaining amount is ${remainBalance}`);
      }
      else if (useramount.amount > accountBalance){
         console.log("Insufficiant Balance");
      }

   }else if (operation.options === "cheakbalance"){
          console.log(accountBalance)
   } 

}else{
   console.log("Invalid Password!!!");
}