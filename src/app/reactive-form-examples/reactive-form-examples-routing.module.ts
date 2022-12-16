import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormExamplesComponent } from './reactive-form-examples.component';

const routes: Routes = [{ path: '', component: ReactiveFormExamplesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormExamplesRoutingModule { }
