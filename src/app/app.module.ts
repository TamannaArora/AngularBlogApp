import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { RootComponent } from './root/root.component';
import { LoginComponent } from './login/login.component';
import { ROUTING } from './app.routing';
import { HomeComponent } from './home/home.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ModalModule } from 'ngx-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgxEditorModule } from 'ngx-editor';

@NgModule({
  declarations: [
    RootComponent,
    LoginComponent,
    HomeComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxEditorModule,
    AngularFontAwesomeModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
