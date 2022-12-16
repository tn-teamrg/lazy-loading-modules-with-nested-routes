import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormExamplesRoutingModule } from './reactive-form-examples-routing.module';
import { ReactiveFormExamplesComponent } from './reactive-form-examples.component';
import { NameEditorComponent } from './name-editor/name-editor.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ReactiveFormExamplesComponent,
    NameEditorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormExamplesRoutingModule,
    ReactiveFormsModule

  ]
})
export class ReactiveFormExamplesModule { }
