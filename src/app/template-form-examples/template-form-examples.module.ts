import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateFormExamplesRoutingModule } from './template-form-examples-routing.module';
import { TemplateFormExamplesComponent } from './template-form-examples.component';


@NgModule({
  declarations: [
    TemplateFormExamplesComponent
  ],
  imports: [
    CommonModule,
    TemplateFormExamplesRoutingModule
  ]
})
export class TemplateFormExamplesModule { }
