import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiComponent } from './api/api.component';



@NgModule({
  declarations: [
    ApiComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ApiComponent
  ]
})
export class APIModule { }
