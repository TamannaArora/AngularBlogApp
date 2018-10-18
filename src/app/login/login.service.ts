import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { apiHeaders } from '../request.header';

@Injectable()
export class LoginService {

	constructor(private http: HttpClient){

	}
	
	validateLogin(user: User){
		let url = "http://172.16.14.5:8000/accounts/signin/"
		return this.http.post(url,{
			email : user.username,
			password : user.password
		}, apiHeaders);

	}

}