import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//2.import Login and SignUp component
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
//2. import routerModule, FormsModule etc,,
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//3.import toastr modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    //3.FormsModule
    FormsModule,
    //2.Router routes for signUp
    RouterModule.forChild([
      {path: 'sign-up', component: SignupComponent}
    ]),
    //3. import browserAnimationModule/Toastrmodule
    BrowserAnimationsModule,
    ToastrModule.forRoot() 
  ]
})
export class UserModule { }
