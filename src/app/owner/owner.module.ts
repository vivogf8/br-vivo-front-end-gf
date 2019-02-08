import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerRoutingModule } from './owner-routing/owner-routing.module';
import { MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule ,  MatTableModule } from '@angular/material';

@NgModule({
  declarations: [OwnerListComponent],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule
  ],
  exports: [
      MatTableModule
  ],
})


export class OwnerModule { }

export interface Owner{
  id: string;
  name: string;
  dateOfBirth: Date;
  address: string;
}