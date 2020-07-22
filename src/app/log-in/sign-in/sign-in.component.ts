import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SignupServiceService } from '../../signup-service.service';
import { UserLogin } from '../../user-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  res: string;
  noob;
  private newUserLogin: UserLogin = new UserLogin();

  constructor(private fb: FormBuilder, private signupServe: SignupServiceService, private  router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],

    });
  }

  get f() {
    return this.loginForm.controls;
  }

  autharize(){
    this.signupServe.autharize()
    .subscribe(
      response => alert("successfully verified"),
      error => {
        alert("not verified");
      console.log(error);
    }
      
    )
  }

  onSubmit() {
    this.newUserLogin = this.loginForm.value as UserLogin;
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    this.signupServe.login(this.newUserLogin)
    .subscribe(
      response => {
        const resString = JSON.stringify(response);
        const resJSON = JSON.parse(resString);
        if (resJSON.status === true) {
          this.router.navigate(['/homepage']);
          console.log(response);
        }
      },
      error => {
        const err = JSON.stringify(error);
        const errJSON = JSON.parse(err);
        console.log(err);
        if (errJSON.status === 401) {
          alert('wrong credentials');
        }
      }
    );
  }

}
