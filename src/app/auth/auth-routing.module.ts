import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcknowledgementDialogComponent } from '@app/auth/acknowledgement/acknowledgement-dialog.component';
import { ForgotPasswordDialogComponent } from '@app/auth/forgot-password/forgot-password-dialog.component';
import { LoginDialogComponent } from '@app/auth/login/login-dialog.component';
import { LogoutComponent } from '@app/auth/logout/logout.component';
import { SignUpDialogComponent } from '@app/auth/sign-up/sign-up-dialog.component';

const routes: Routes = [{ path: 'logout', component: LogoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {
  static components = [
    AcknowledgementDialogComponent,
    ForgotPasswordDialogComponent,
    LoginDialogComponent,
    LogoutComponent,
    SignUpDialogComponent
  ];
}
