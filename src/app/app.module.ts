import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from "./angular-material/angular-material.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  providers: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
