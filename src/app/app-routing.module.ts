import { FormularioOperadoraComponent } from './formularios/formulario-operadora/formulario-operadora.component';
import { FormularioSerieComponent } from './formularios/formulario-serie/formulario-serie.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ChamadosComponent } from './chamados/chamados.component';
import { AcompanhamentoComponent } from './acompanhamento/acompanhamento.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

  import { from } from 'rxjs';
import { OperadorasComponent } from './operadoras/operadoras.component';
import { SeriesComponent } from './series/series.component';
import { CiclosComponent } from './ciclos/ciclos.component';
import { RegrasComponent } from './regras/regras.component';
import { MenuComponent } from './menu/menu.component';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';

const routes: Routes = [  
  {
    path: '', component: LoginComponent
  },
  {
    path: 'acompanhamento', component: AcompanhamentoComponent
  },
  {
    path: 'chamados', component: ChamadosComponent
  },
  {
    path: 'operadoras', component: OperadorasComponent
  },
  {
    path: 'series', component: SeriesComponent
  },
  {
    path: 'ciclos', component: CiclosComponent
  },
  {
    path: 'formulario', component: FormularioComponent
  },
  {
    path: 'formularioserie', component: FormularioSerieComponent
  },
  {
    path: 'formulariooperadoras', component: FormularioOperadoraComponent
  },
  {
    path: 'regras', component: RegrasComponent
  },
  {
    path: 'menu', component: MenuComponent
  },
  {
    path: 'radio', component: RadiobuttonComponent
  },
  {
    path: 'products',
    loadChildren: './products/products.module#ProductsModule'
  }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
