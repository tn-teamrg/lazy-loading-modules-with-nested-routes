import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormExamplesRoutingModule } from './reactive-form-examples-routing.module';
import { ReactiveFormExamplesComponent } from './reactive-form-examples.component';
import { NameEditorComponent } from './name-editor/name-editor.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

@NgModule({
  declarations: [
    ReactiveFormExamplesComponent,
    NameEditorComponent,
    ProfileEditorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormExamplesRoutingModule,
    ReactiveFormsModule

  ]
})
export class ReactiveFormExamplesModule { }
