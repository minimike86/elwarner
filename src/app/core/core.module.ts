import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from "../angular-material/angular-material.module";

import { AboutMeComponent } from "./about-me/about-me.component";
import { BlogListComponent } from './blog-list/blog-list.component';


@NgModule({
  declarations: [
    AboutMeComponent,
    BlogListComponent
  ],
  providers: [],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    AboutMeComponent
  ]
})
export class CoreModule { }
