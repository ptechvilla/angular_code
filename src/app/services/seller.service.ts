import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUp } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private _http: HttpClient) { }

  userSignup(data: SignUp) {
    return this._http.post('http://localhost:3000/seller', data);
  }
}
