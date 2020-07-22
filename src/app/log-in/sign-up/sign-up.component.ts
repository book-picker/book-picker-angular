import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserSignup } from '../../user-signup';
import { SendMail } from '../../send-mail'
import { SignupServiceService } from '../../signup-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  submitted = false;

  verified = false;
  otp_sent = false;
  private NewMail: SendMail = new SendMail();
  private newUserSignup: UserSignup = new UserSignup();

  constructor(private fb: FormBuilder, private signupService: SignupServiceService) { }


  ngOnInit() {
    this.signupForm = this.fb.group({
      firstname: ['', Validators.required] ,
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      otp: ['', [Validators.required,Validators.minLength(6), Validators.maxLength(6)]]
    });
  }
  get f() { return this.signupForm.controls; }


  on_signup(){
    this.newUserSignup.email = this.signupForm.controls.email.value;
    this.newUserSignup.name = this.signupForm.controls.firstname.value + ' ' + this.signupForm.controls.lastname.value;
    this.newUserSignup.password = this.signupForm.controls.password.value;
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }

    this.signupService.register(this.newUserSignup)
    .subscribe(
      error => console.log(error),
      response => console.log(response));
      return
  }
  OnSub(){
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }
  }
  send_otp(){
    this.NewMail.email = this.signupForm.controls.email.value;
    this.otp_sent = true;
    // this.signupService.sendmail(this.NewMail)
    // .subscribe(
    //   error => console.log(error),
    //   response => console.log(response)
    // )

  }
  verify_otp(){
    this.verified = true;
    alert("Your email is successfully verified");
  }
}
