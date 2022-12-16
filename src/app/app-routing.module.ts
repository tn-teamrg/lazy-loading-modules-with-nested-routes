import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'reactive-form-examples', loadChildren: () => import('./reactive-form-examples/reactive-form-examples.module').then(m => m.ReactiveFormExamplesModule) },
  { path: 'template-form-examples', loadChildren: () => import('./template-form-examples/template-form-examples.module').then(m => m.TemplateFormExamplesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
