import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthPageComponent, ConfirmEmailPageComponent, LoginPageComponent, SignupPageComponent} from './pages';
import {ResetPasswordPageComponent} from './pages/reset-password/reset-password.page';
import {ConfirmationTokenResolver, ResetPasswordResolver} from './resolvers';
import {ROUTES_AUTH} from '../../shared/consts/routes.consts';

const routes: Routes = [
  {
    path: '',
    component: AuthPageComponent,
    children: [
      {
        path: '',
        redirectTo: ROUTES_AUTH.LOGIN,
        pathMatch: 'full',
      },
      {
        path: ROUTES_AUTH.LOGIN,
        component: LoginPageComponent,
      },
      {
        path: ROUTES_AUTH.SIGN_UP,
        component: SignupPageComponent,
      },
      {
        path: ROUTES_AUTH.RESET_PASSWORD,
        component: ResetPasswordPageComponent,
        resolve: {
          viewConfig: ResetPasswordResolver,
        },
      },
      {
        path: `${ROUTES_AUTH.RESET_PASSWORD}/:token`,
        component: ResetPasswordPageComponent,
        resolve: {
          viewConfig: ResetPasswordResolver,
        },
      },
      {
        path: `${ROUTES_AUTH.VERIFY_ACCOUNT}/:token`,
        component: ConfirmEmailPageComponent,
        resolve: {
          viewConfig: ConfirmationTokenResolver,
        },
      },
      {
        path: `${ROUTES_AUTH.ACCEPT_INVITATIONS}/:token`,
        component: ConfirmEmailPageComponent,
        resolve: {
          viewConfig: ConfirmationTokenResolver,
        },
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {

}

export const routedComponents = [
  AuthPageComponent,
  LoginPageComponent,
  SignupPageComponent,
  ResetPasswordPageComponent,
  ConfirmEmailPageComponent,
];
