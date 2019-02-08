import { MenuComponent } from './menu/menu.component';



import { AuthGuardService } from './guards/auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { CustomMaterialModule} from './core/material.module';
import {FormsModule} from '@angular/forms';
import { AcompanhamentoComponent } from './acompanhamento/acompanhamento.component';
import {MatTableModule, MatFormFieldModule, MatMenuModule, MatRadioButton, MatRadioGroup, MatRadioModule} from '@angular/material';
//import {TableFilteringExample} from './products/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ChamadosComponent } from './chamados/chamados.component';
import { RegrasComponent } from './regras/regras.component';
import { CiclosComponent } from './ciclos/ciclos.component';
import { OperadorasComponent } from './operadoras/operadoras.component';
import { SeriesComponent } from './series/series.component';
import { FormularioComponent } from './formulario/formulario.component';

import {CommonModule} from '@angular/common'; 
import { AcompanhamentoService } from './acompanhamento/acompanhamento.service';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import { FormularioSerieComponent } from './formularios/formulario-serie/formulario-serie.component';
import { FormularioOperadoraComponent } from './formularios/formulario-operadora/formulario-operadora.component';
import { FormularioRegraComponent } from './formularios/formulario-regra/formulario-regra.component';







  

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    AcompanhamentoComponent,
    ChamadosComponent,
    RegrasComponent,
    CiclosComponent,
    OperadorasComponent,
    SeriesComponent,
    //CustomMaterialModule
    MatRadioGroup,
    FormularioComponent,
    MenuComponent,
    RadiobuttonComponent,
    FormularioSerieComponent,
    FormularioOperadoraComponent,
    FormularioRegraComponent,
    //MatRadioButton,
    //MatRadioModule
    //FormularioComponent
    
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //MatTableDataSource,
    //TableFilteringExample
    MatTableModule,
    MatFormFieldModule,
    MatMenuModule,
    HttpClientModule,
    CommonModule,
   // MaterializeModule
  // FormularioComponent
  ],
  providers: [AuthGuardService, AcompanhamentoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
