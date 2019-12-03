import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//2.import User and Chat module
import { UserModule } from './user/user.module';
import { ChatModule } from "./chat/chat.module";
//2.Routing
import { RouterModule } from '@angular/router';
//2.import Login Component
import { LoginComponent } from './user/login/login.component';

//3.import toastr modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

//3.import FormsModule
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //.FormsModule
    FormsModule,
    CommonModule,
    AppRoutingModule,
    //2.import User and Chat Module
    UserModule,
    ChatModule,
    //2.Routes for Login
    RouterModule.forRoot([
      {path: 'login', component:LoginComponent, pathMatch: 'full'},
      {path: '', redirectTo: 'Login', pathMatch: 'full'},
      {path: '*', component: LoginComponent},
      {path: '**', component: LoginComponent},
    ]),
    //3. import browserAnimationModule/Toastrmodule
    BrowserAnimationsModule,
    ToastrModule.forRoot() 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
