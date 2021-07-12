import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormfieldComponent } from './formfield/formfield.component';
import { FormradioComponent } from './formradio/formradio.component';
import { KlassendropdownComponent } from './klassendropdown/klassendropdown.component';
import { FormendComponent } from './formend/formend.component';
import { FormbuttonComponent } from './formbutton/formbutton.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    FormfieldComponent,
    FormradioComponent,
    KlassendropdownComponent,
    FormendComponent,
    FormbuttonComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
