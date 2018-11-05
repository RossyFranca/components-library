import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';
import { HeaderComponent } from './header/header.component';
import { CollapsibleComponent } from './collapsible/collapsible.component';
import { ItemComponent } from './collapsible/item/item.component';
import { ButtonComponent } from './button/button.component';
import { FieldComponent } from './field/field.component';
import { FieldRadioComponent } from './field-radio/field-radio.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgxMaskModule.forRoot(),
    FormsModule

  ],
  declarations: [
    HeaderComponent,
    CollapsibleComponent,
    ItemComponent,
    ButtonComponent,
    FieldComponent,
    FieldRadioComponent,
  ],
  exports: [
    HeaderComponent,
    CollapsibleComponent,
    ItemComponent,
    ButtonComponent,
    FieldComponent,
    FieldRadioComponent,
  ]
})
export class ComponentsModule { }
