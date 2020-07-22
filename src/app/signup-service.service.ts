import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { UserSignup } from '../app/user-signup';
import { UserLogin } from '../app/user-login';
import { SendMail } from '../app/send-mail'

@Injectable({
  providedIn: 'root'
})
export class SignupServiceService {
  _URL = 'https://0d2329965f4b.ngrok.io/';

  constructor( private _http: HttpClient ) { }  

  register(userSignup: UserSignup){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.post(this._URL + 'signup', JSON.stringify(userSignup), { headers: headers});
  }

  sendmail(mail: SendMail){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.post(this._URL + 'sendmail', JSON.stringify(mail), {headers: headers});
  }

  login(userLogin: UserLogin){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.post(this._URL + 'login', JSON.stringify(userLogin), { headers: headers, withCredentials: true});
  }

  autharize(){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.get(this._URL + 'autharize', { headers: headers, withCredentials: true});

  }
}


