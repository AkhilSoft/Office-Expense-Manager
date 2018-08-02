import { LoginService } from './login.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSelected=1;
  isLogin:boolean=this.loginService.isLogin;
  constructor(private loginService:LoginService){
    
  }
  
}
