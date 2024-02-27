import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { TokenComponent } from './components/token/token.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { InstitucionComponent } from './components/institucion/institucion.component';
import { ProgramasComponent } from './components/programas/programas.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'token', component: TokenComponent },

  { path: 'inicio', component: InicioComponent },

  { path: 'institucion', component: InstitucionComponent },
  { path: 'programas', component: ProgramasComponent },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', redirectTo: '/login' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
