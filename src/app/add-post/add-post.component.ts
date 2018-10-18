import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {PostService} from '../post.service';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';
// import { AddPostService } from './add-post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
  providers: [  ]
})
export class AddPostComponent implements OnInit {

  // public post : Post;

  constructor(private formBuilder: FormBuilder, private router: Router, private postService: PostService) { 
   }

   addForm: FormGroup;


  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      title: ['', Validators.required],
      description: ['', Validators.required],
      // lastName: ['', Validators.required]
    });
  }
  onSubmit() {
    this.postService.createPost(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['home']);
      });
  }
}
