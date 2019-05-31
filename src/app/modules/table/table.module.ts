import { NgModule } from '@angular/core';
import {
  CommonModule, CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe,
  PercentPipe, TitleCasePipe, UpperCasePipe
} from '@angular/common';

import { TableComponent } from './table.component';
import { TableModelService } from './services/tableModel.service';
import { DynamicPipe } from './pipes/dynamic.pipe';

@NgModule({
  declarations: [TableComponent, DynamicPipe],
  imports: [
    CommonModule
  ],
  exports: [TableComponent],
  entryComponents: [TableComponent],
  providers: [
    TableModelService,
    CurrencyPipe,
    DatePipe,
    DecimalPipe,
    LowerCasePipe,
    PercentPipe,
    TitleCasePipe,
    UpperCasePipe
  ]
})
export class TableModule { }
