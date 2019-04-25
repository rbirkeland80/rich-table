import { Component, OnInit, Input } from '@angular/core';
import { Observable, isObservable,  of } from 'rxjs';

import { IColumnDefModel } from './interfaces/column.interface';
import { IDataDefModel } from './interfaces/data.interface';

interface ITableData {
  columns?: IColumnDefModel[];
  data?: IDataDefModel[];
}

@Component({
  selector: 'rich-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() columns: IColumnDefModel[] | Observable<IColumnDefModel[]>;
  @Input() data: IDataDefModel[] | Observable<IDataDefModel[]>;

  public tableData: ITableData = {
    columns: [],
    data: []
  };

  constructor() { }

  ngOnInit() {
    this.validateInput();
    this.preprocessInputs();
  }

  private preprocessInputs() {
    Object.keys(this.tableData).forEach((key: string) => {
      const inputValue = this[key];
      const dataObservable = Array.isArray(inputValue)
        ? of(inputValue)
        : inputValue;

      dataObservable.subscribe((data: any) => {
        this.tableData[key] = data;
      });
    });
  }

  private validateInput() {
    if (!this.columns || !this.data) {
      throw new Error('Please pass in columns and data to the rich-table');
    }

    if (!isObservable(this.columns) && !Array.isArray(this.columns)) {
      throw new Error('Invalid input type: Columns should either be IColumnDefModel[] or Observable<IColumnDefModel[]');
    }

    if (!isObservable(this.data) && !Array.isArray(this.data)) {
      throw new Error('Invalid input type: Data should either be IDataDefModel[] or Observable<IDataDefModel[]');
    }
  }

}
