import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authState = new BehaviorSubject(false);
  constructor(
    private toast: ToastController,
    private router: Router,
    private platform: Platform,
    private storage: Storage
  ) {
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    })
  }
  ifLoggedIn() {
    this.storage.get('USER_INFO').then((response) => {
      if (response) {
        this.authState.next(true);
      }
    });
  }
  login() {
    var dummy_response = {
      user_id: '07',
      user_name: 'test'
    };
    this.storage.set('USER_INFO', dummy_response).then((response) => {
      this.router.navigate(['dashboard']);
      this.authState.next(true);
    });
  }
 
  logout() {
    this.storage.remove('USER_INFO').then(() => {
      this.router.navigate(['login']);
      this.authState.next(false);
    });
  }
 
  isAuthenticated() {
    return this.authState.value;
  }
 
}
