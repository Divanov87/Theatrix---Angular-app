import { Injectable, OnDestroy } from '@angular/core';
import { IUser } from '../interfaces/user';
import { env } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {

  URL = env.URL;
  private user$$ = new BehaviorSubject<IUser | undefined>(undefined);
  private user$ = this.user$$.asObservable();


  user: IUser | undefined;
  USER_KEY = '[user]';

  userSubscription: Subscription;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) {
    this.userSubscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  login(username_email: string, password: string) {
    return this.http
      .post<IUser>(`${this.URL}/auth/login`, { username_email, password })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  register(
    username: string,
    password: string,
    repeatPassword: string,
    email: string,
    city: string
  ) {
    return this.http
      .post<IUser>(`${this.URL}/auth/register`, {
        username,
        password,
        repeatPassword,
        email,
        city,
      })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  logout() {
    return this.http
      .post(`${this.URL}/auth/logout`, {})
      .pipe(tap(() => this.user$$.next(undefined)));
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}

