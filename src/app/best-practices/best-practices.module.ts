import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BestPracticesRoutingModule } from './best-practices-routing.module';
import { BestPracticesComponent } from './best-practices.component';


@NgModule({
  declarations: [
    BestPracticesComponent
  ],
  imports: [
    CommonModule,
    BestPracticesRoutingModule
  ]
})
export class BestPracticesModule { }
