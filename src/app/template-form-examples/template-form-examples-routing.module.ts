import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormExamplesComponent } from './template-form-examples.component';
import { HeroFormComponent } from './hero-form/hero-form.component';

const routes: Routes = [
  { path: '', component: TemplateFormExamplesComponent },
  { path: 'hero-form', component: HeroFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateFormExamplesRoutingModule { }
