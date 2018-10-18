import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import {User} from './models/user.model';
import {Post} from './models/post.model';
import { apiHeaders } from './request.header';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://172.16.14.5:8000/app/create-post/';

  createPost(post: Post) {
    const privateApiHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + localStorage.getItem('privateToken')
      })
    };
    return this.http.post(this.baseUrl, {
      'title': post.title,
      'description': post.description,
      'user': localStorage.getItem('userId')
    }, privateApiHeaders);
  }
}
