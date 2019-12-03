import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//2. import chatbox component
import { ChatBoxComponent } from './chat-box/chat-box.component';
//2. import routerModule
import { RouterModule } from '@angular/router';
//3.import toastr modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [ChatBoxComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'chat', component: ChatBoxComponent}
    ]),
    //3. import browserAnimationModule/Toastrmodule
    BrowserAnimationsModule,
    ToastrModule.forRoot() 
  ]
})
export class ChatModule { }
