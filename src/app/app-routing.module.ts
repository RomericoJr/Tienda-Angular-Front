import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { RecuperarContrasenaComponent } from './Auth/recuperar-contrasena/recuperar-contrasena.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
  path: 'login',
  component: LoginComponent },
  {
  path: 'register',
  component: RegisterComponent },
  {
  path: 'recuperar-contrasena',
  component: RecuperarContrasenaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
