import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterTasksPipe } from './filter-tasks.pipe';



@NgModule({
  declarations: [
    FilterTasksPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
