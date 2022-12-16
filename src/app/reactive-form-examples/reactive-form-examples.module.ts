import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormExamplesRoutingModule } from './reactive-form-examples-routing.module';
import { ReactiveFormExamplesComponent } from './reactive-form-examples.component';


@NgModule({
  declarations: [
    ReactiveFormExamplesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormExamplesRoutingModule
  ]
})
export class ReactiveFormExamplesModule { }
