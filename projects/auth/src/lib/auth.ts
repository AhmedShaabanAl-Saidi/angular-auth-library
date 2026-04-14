import { inject, Injectable } from '@angular/core';
import { AuthAPI } from './base/auth-api';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { AuthEndPoint } from './enums/auth-endpoint';
import { AuthApiAdaptor } from './adaptor/auth-api-adaptor';
import { ApiError } from './interfaces/ApiError/api-error';
import { LoginResponse } from './interfaces/ApiResponse/login-response';
import { RegisterResponse } from './interfaces/ApiResponse/register-response';
import { LogoutResponse } from './interfaces/ApiResponse/logout-response';
import { ForgotPasswordResponse } from './interfaces/ApiResponse/forgot-password-response';
import { VerifyResetCodeResponse } from './interfaces/ApiResponse/verify-reset-code-response';
import { ResetPasswordResponse } from './interfaces/ApiResponse/reset-password-response';
import { ChangePasswordResponse } from './interfaces/ApiResponse/change-password-response';
import { DeleteMyAccountResponse } from './interfaces/ApiResponse/delete-my-account-response';
import { EditProfileResponse } from './interfaces/ApiResponse/edit-profile-response';
import { LoginDto } from './interfaces/DTOs/login-dto';
import { RegisterDto } from './interfaces/DTOs/register-dto';
import { ForgotPasswordDto } from './interfaces/DTOs/forgot-password-dto';
import { VerifyResetCodeDto } from './interfaces/DTOs/verify-reset-code-dto';
import { ResetPasswordDto } from './interfaces/DTOs/reset-password-dto';
import { ChangePasswordDto } from './interfaces/DTOs/change-password-dto';
import { EditProfileDto } from './interfaces/DTOs/edit-profile-dto';

@Injectable({
  providedIn: 'root',
})
export class Auth implements AuthAPI {
  private _httpClient = inject(HttpClient);
  _authApiAdaptor = inject(AuthApiAdaptor);

  private handleError(err: ApiError) {
    const errorMsg = err?.message || 'Something went wrong';
    const errorCode = err?.code || 500;
    return throwError(() => ({ message: errorMsg, code: errorCode }));
  }

  login(data: LoginDto): Observable<LoginResponse | string> {
    return this._httpClient.post<LoginResponse>(AuthEndPoint.LOGIN, data)
      .pipe(map(res => this._authApiAdaptor.adapt(res)),
        catchError(err => of(err))
      );
  }

  register(data: RegisterDto): Observable<RegisterResponse | string> {
    return this._httpClient.post<LoginResponse>(AuthEndPoint.REGISTER, data)
      .pipe(map(res => this._authApiAdaptor.adapt(res)),
        catchError(err => of(err))
      );
  }

  logout(): Observable<LogoutResponse | string> {
    return this._httpClient.get<LogoutResponse>(AuthEndPoint.LOGOUT)
      .pipe(
        catchError(err => this.handleError(err))
      );
  }

  forgotPassword(data: ForgotPasswordDto): Observable<ForgotPasswordResponse | string> {
    return this._httpClient.post<ForgotPasswordResponse>(AuthEndPoint.FORGOTPASSWORD, { data })
      .pipe(
        catchError(err => this.handleError(err))
      );
  }

  verifyResetCode(data: VerifyResetCodeDto): Observable<VerifyResetCodeResponse | string> {
    return this._httpClient.post<VerifyResetCodeResponse>(AuthEndPoint.VERIFYRESETCODE, data)
      .pipe(
        catchError(err => this.handleError(err))
      );
  }

  resetPassword(data: ResetPasswordDto): Observable<ResetPasswordResponse | string> {
    return this._httpClient.put<ResetPasswordResponse>(AuthEndPoint.RESETPASSWORD, data)
      .pipe(
        catchError(err => this.handleError(err))
      );
  }

  changePassword(data: ChangePasswordDto): Observable<ChangePasswordResponse | string> {
    return this._httpClient.put<ChangePasswordResponse>(AuthEndPoint.CHANGEPASSWORD, data)
      .pipe(
        catchError(err => this.handleError(err))
      );
  }

  deleteMyAccount(): Observable<DeleteMyAccountResponse | string> {
    return this._httpClient.get<DeleteMyAccountResponse>(AuthEndPoint.DELETEMYACCOUNT)
      .pipe(
        catchError(err => this.handleError(err))
      );
  }

  editProfile(data: EditProfileDto): Observable<EditProfileResponse | string> {
    return this._httpClient.post<EditProfileResponse>(AuthEndPoint.EDITPROFILE, data)
      .pipe(
        catchError(err => this.handleError(err))
      );
  }
}