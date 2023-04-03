import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletePromptComponent } from './delete-prompt/delete-prompt.component';
import { LoaderComponent } from './loader/loader.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    DeletePromptComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    LoaderComponent
  ]
})
export class SharedModule { }
