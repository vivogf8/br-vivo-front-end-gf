import { Owner, OwnerModule } from './../owner.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OwnerListComponent } from '../owner-list/owner-list.component';


const routes: Routes = [
  { path: 'owners', component: OwnerListComponent }
];
 
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,    
    OwnerModule,
    
  ],
  declarations: []
})
export class OwnerRoutingModule { }