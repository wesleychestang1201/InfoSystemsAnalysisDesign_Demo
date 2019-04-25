import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

    //Variable passed in from the "Demo" page that dictates whether a user is authenicated or not
    authenticated: boolean;

    constructor(private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        //If the users is authenticated let them pass through to the page, otherwise block navigation
        if ( this.authenticated == true) {
          return true 
        } else {
          return false
        }
      }r
}