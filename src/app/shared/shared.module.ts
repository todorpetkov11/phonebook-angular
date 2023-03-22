import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletePromptComponent } from './delete-prompt/delete-prompt.component';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    DeletePromptComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
