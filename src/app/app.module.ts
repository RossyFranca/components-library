import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CollapsibleComponent } from './collapsible/collapsible.component';
import { ItemComponent } from './collapsible/item/item.component';
import { ButtonComponent } from './button/button.component';
import { FieldComponent } from './field/field.component';
import { SharedModule } from './shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CollapsibleComponent,
    ItemComponent,
    ButtonComponent,
    FieldComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
