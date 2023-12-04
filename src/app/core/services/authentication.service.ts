import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenStorage} from './token-storage.service';
import {RegisterRequest} from '../dto/register-request';
import {AuthenticationResponse} from '../dto/authentication-response';
import {LoginRequest} from "../dto/login-request";

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly baseUrl = 'http://localhost:8084/api/v2/auth';

  constructor(private http: HttpClient, private tokenStorage: TokenStorage) {
  }

  register(request: RegisterRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(
      `${this.baseUrl}/register`,
      request
    );
  }

  authenticate(request: LoginRequest) {
    this.http
      .post<AuthenticationResponse>(`${this.baseUrl}/authenticate`, request)
      .subscribe((token) => this.tokenStorage.setToken(token));
  }

  refreshToken() {
    this.http
      .post<void>(`${this.baseUrl}/refresh-token`, {},
        {
          headers: {
            Authorization: `Bearer ${this.tokenStorage.getRefreshToken()}`
          }
        }
      )
      .subscribe((token) => this.tokenStorage.setToken(token));
  }

  isAuthenticated() {
    return false;
  }
}
