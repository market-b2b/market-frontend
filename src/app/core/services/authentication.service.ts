import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TokenStorage } from './token-storage.service';
import { RegisterRequest } from '../dto/register-request';
import { AuthenticationResponse } from '../dto/authentication-response';
import {LoginRequest} from "../dto/login-request";

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly baseUrl = 'http://localhost:8084/api/v2/auth';

  constructor(private http: HttpClient, private tokenStorage: TokenStorage) {}

  register(request: RegisterRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(
        `${this.baseUrl}/register`,
        request
    );
  }

  authenticate(request: LoginRequest) {
      console.log("login");

     this.http
        .post<AuthenticationResponse>(`${this.baseUrl}/authenticate`, request)
        .pipe(
            tap((response) => this.storeTokens(response))
        );
  }

  refreshToken(): Observable<void> {
    return this.http
        .post<void>(`${this.baseUrl}/refresh-token`, {})
        .pipe(
            tap(() => {
              // Vous devez obtenir le nouveau token d'accès depuis votre backend
              const newAccessToken = '...'; // Remplacez par le nouveau token d'accès
              this.tokenStorage.setAccessToken(newAccessToken);
            })
        );
  }

  private storeTokens(response: AuthenticationResponse): void {
    this.tokenStorage.setAccessToken(response.accessToken);
    this.tokenStorage.setRefreshToken(response.refreshToken);
  }
}
