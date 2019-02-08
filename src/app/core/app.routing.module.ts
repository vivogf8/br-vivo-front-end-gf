import { AcompanhamentoComponent } from './../acompanhamento/acompanhamento.component';
import {NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from '../user/user.component';
import {LoginComponent} from '../login/login.component';

const routes: Routes = [  
  { path: 'acompanhamento', component: AcompanhamentoComponent },
  { path : '', component : LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }




