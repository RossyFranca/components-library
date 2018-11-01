import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonePipe } from './phone.pipe';
import { NgxMaskModule } from 'ngx-mask'

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [
    PhonePipe
  ],
  exports: [
    PhonePipe,

  ]
})
export class SharedModule { }
