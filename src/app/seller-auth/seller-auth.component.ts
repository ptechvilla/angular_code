import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private _seller: SellerService, private _router:Router) { }

  ngOnInit(): void { }

  signUp(data: SignUp): void {
    console.warn(data);
    this._seller.userSignup(data).subscribe((result) => {
      // console.log(result);
      if(result){
        this._router.navigate(['seller-home']);
      }
    })
  }
}
