import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestPracticesComponent } from './best-practices.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';

const routes: Routes = [
  { path: '', component: BestPracticesComponent },
  { path: 'property-binding', component: PropertyBindingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BestPracticesRoutingModule { }
