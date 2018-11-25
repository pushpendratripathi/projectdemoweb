import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services/services.component';
import {RouterModule } from '@angular/router';

@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule
  ],
  exports: [
  RouterModule,
  ]
})
export class NavModule { }
