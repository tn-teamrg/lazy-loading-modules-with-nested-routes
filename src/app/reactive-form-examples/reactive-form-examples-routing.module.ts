import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormExamplesComponent } from './reactive-form-examples.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { NameEditorComponent } from './name-editor/name-editor.component';

const routes: Routes = [
  { path: '', component: ReactiveFormExamplesComponent },
  { path: 'name-editor', component: NameEditorComponent },
  { path: 'profile-editor', component: ProfileEditorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormExamplesRoutingModule { }
