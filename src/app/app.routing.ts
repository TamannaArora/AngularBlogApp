import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
// import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddPostComponent } from './add-post/add-post.component';

export const AppRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent},
    { path: 'add-post', component: AddPostComponent}
];

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
//   })

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);