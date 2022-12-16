import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateFormExamplesRoutingModule } from './template-form-examples-routing.module';
import { TemplateFormExamplesComponent } from './template-form-examples.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { FormsModule, NgForm } from '@angular/forms';


@NgModule({
  declarations: [
    TemplateFormExamplesComponent,
    HeroFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TemplateFormExamplesRoutingModule
  ]
})
export class TemplateFormExamplesModule { }
