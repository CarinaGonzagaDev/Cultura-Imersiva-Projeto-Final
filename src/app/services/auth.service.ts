import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn = this.loggedIn.asObservable();

  constructor(private router: Router) { }

  private hasToken(): boolean {
    // Verifica se o localStorage está disponível antes de usá-lo
    if (typeof localStorage !== 'undefined') {
      return !!localStorage.getItem('isLoggedIn');
    }
    return false;
  }

  login() {
    localStorage.setItem('isLoggedIn', 'true');
    this.loggedIn.next(true);
    this.router.navigate(['/home']);
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.loggedIn.next(false);
    this.router.navigate(['/home']);
  }
}