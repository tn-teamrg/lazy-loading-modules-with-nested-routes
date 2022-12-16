import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormExamplesComponent } from './template-form-examples.component';

const routes: Routes = [{ path: '', component: TemplateFormExamplesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateFormExamplesRoutingModule { }
