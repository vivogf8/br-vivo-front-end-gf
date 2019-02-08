import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OverviewComponent } from './product-details/overview/overview.component';
import {MatMenuModule, MatFormFieldModule, MatButtonModule} from '@angular/material';

import { MenuComponent } from './tabela/menu.component';


//import { MatTableDataSource, MatMenuModule } from '@angular/material';
@NgModule({
  declarations: [ProductListComponent, ProductDetailsComponent, OverviewComponent],
  imports: [
    MatFormFieldModule,
    CommonModule,
    ProductsRoutingModule,
    MatMenuModule,
    MatButtonModule
    
    //MatTableDataSource
  ]
})
export class ProductsModule { }
