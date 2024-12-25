import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleRoutingModule } from './sample-routing.module';
import { SampleComponent } from './sample.component';
import { FormatnumberPipe } from './formatnumber.pipe';
import { HighlightDirective } from './highlight.directive';
import { TruncatePipe } from './truncate.pipe';
import { ShowoffDirective } from './showoff.directive';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    SampleComponent,
    FormatnumberPipe,
    HighlightDirective,
    TruncatePipe,
    ShowoffDirective
  ],
  imports: [
    CommonModule,
    SampleRoutingModule,
    MatListModule
  ],
  providers: []
})
export class SampleModule { }
