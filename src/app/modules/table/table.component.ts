import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable, merge } from 'rxjs';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

import { TableModelService } from './services/tableModel.service';
import { IColumnDefModel } from './interfaces/column.interface';
import { IDataDefModel } from './interfaces/data.interface';
import { ITableData, ITableObservableData } from './interfaces/tableData.interface';
import { InputValueType } from './enums/inputValueTypes.enum';

@AutoUnsubscribe()
@Component({
  selector: 'rich-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy {

  @Input() columns: IColumnDefModel[] | Observable<IColumnDefModel[]>;
  @Input() data: IDataDefModel[] | Observable<IDataDefModel[]>;

  public tableData: ITableData = {
    columns: [],
    data: []
  };

  constructor(readonly tableModelService: TableModelService) { }

  ngOnInit() {
    this.tableModelService.validateInput(this.columns, this.data);
    this.setTableData();
  }

  ngOnDestroy() {}

  private setTableData(): void {
    const data$ = this.tableModelService.buildTableDataObservable(InputValueType.DATA, this.data);
    const columns$ = this.tableModelService.buildTableDataObservable(InputValueType.COLUMNS, this.columns);

    merge(columns$, data$).subscribe(
      (data: ITableObservableData) => {
        this.tableData[data.key] = data.data;
      },
      (error) => {
        throw new Error(error);
      },
      () => {
        this.tableData.data.forEach((item) => {
          item.formatData(this.tableData.columns);
        });
      }
    );
  }

}
