import { Component, OnInit, ViewContainerRef } from '@angular/core';
//3.import AppService, Router, ToastsManager
import { AppService } from './../../app.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cookie } from 'ng2-cookies/ng2-cookies';
//3.import FormsModule
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: any;
  public password: any;

  constructor(public appService: AppService,
              public router: Router,
              public toastr: ToastrService,
              vcr: ViewContainerRef){
                // this.toastr.setRootViewContainerRef(vcr);
              }

  ngOnInit() {
  }

  //Go to SignUp
  public goToSignUp: any = () => {
    this.router.navigate(['/sign-up']);
  }//End goToSignUp

  public signinFunction: any = () => {
    if(!this.email){
      this.toastr.warning("Enter Email");
    } else if (!this.password) {
      this.toastr.warning("Enter Password");
    } else {
      let data = {
        email: this.email,
        password: this.password
      }

      this.appService.signupFunction(data).subscribe((apiResponse) => {
        if (apiResponse === 200) {
          console.log(apiResponse);

          Cookie.set('authToken', apiResponse.data.authToken);
          Cookie.set('recieverId', apiResponse.data.userDetails.userId);
          Cookie.set('recieverName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);
          this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
          this.router.navigate(['/chat']);
        } else {
          this.toastr.error(apiResponse.message);
          
        }
      }, (err) => {
        this.toastr.error("Some error occured");
        
      }
      )
    }
  }
}
