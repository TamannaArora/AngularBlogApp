import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
})
export class LoginComponent {

  public user : User;

  constructor(private loginService: LoginService, private router: Router) {
  	  this.user = new User();
  }

  validateLogin() {
  	if(this.user.username && this.user.password) {
  		  this.loginService.validateLogin(this.user).subscribe((result: any) => {
        // console.log('result is ', result);
        // console.log(result.response.access_token);
        // console.log(result.response.id);
        if(result['status'] === 200){
          localStorage.setItem('privateToken', result.response.access_token);
          localStorage.setItem('userId', result.response.id);
          this.router.navigate(['/home']);
        } else {
          alert("Wrong credentials");
        }
      }, error => {
        console.log('error is ', error);
      });
  	} else {
  		alert('enter user name and password');
  	}
  }

}