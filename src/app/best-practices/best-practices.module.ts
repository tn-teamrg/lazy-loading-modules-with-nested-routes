import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BestPracticesRoutingModule } from './best-practices-routing.module';
import { BestPracticesComponent } from './best-practices.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ItemDetailComponent } from './property-binding/item-detail/item-detail.component';
import { ItemListComponent } from './property-binding/item-list/item-list.component';


@NgModule({
  declarations: [
    BestPracticesComponent,
    PropertyBindingComponent,
    ItemDetailComponent,
    ItemListComponent
  ],
  imports: [
    CommonModule,
    BestPracticesRoutingModule
  ]
})
export class BestPracticesModule { }
