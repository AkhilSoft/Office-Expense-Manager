import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  form= new FormGroup ({
    expense:new FormControl(),
   date:new FormControl(),
   spentAmount:new FormControl(),
   collectAmount:new FormControl(),
   
  });

  constructor(private http:Http,private loginService:LoginService) { 

   }

  ngOnInit() {
  }

  submit(){

  let expense= {
    purposeName:this.form.value.expense,
   date:  Date.parse("" + this.form.value.date as string) ,
   expense:this.form.value.spentAmount,
   collection:this.form.value.collectAmount,
   emailId:this.loginService.empEmail
  };

  console.log(JSON.stringify(expense));


     this.http.post("http://192.168.2.81:8080/OfficeExpenseManager/expense/expense1",expense )
    .subscribe(
      response =>{
        console.log(response);
        alert(response.json().statusMessage);
        


      }

    ) 
  }


}
