import { Injectable } from '@angular/core';
import { Observable, isObservable, of } from 'rxjs';
import { take, map } from 'rxjs/operators';

import { IColumnDefModel } from '../interfaces/column.interface';
import { IDataDefModel } from '../interfaces/data.interface';
import { ITableObservableData } from '../interfaces/tableData.interface';
import { ColumnModel } from '../models/columnModel';
import { DataModel } from '../models/dataModel';
import { InputValueType } from '../enums/inputValueTypes.enum';

@Injectable({
  providedIn: 'root'
})
export class TableModelService {
  public buildTableDataObservable(
    key: InputValueType.DATA | InputValueType.COLUMNS,
    inputValue: any[] | Observable<any[]>
  ): Observable<ITableObservableData> {
    return (Array.isArray(inputValue) ? of(inputValue) : inputValue).pipe(
      map((data: any) => {
        return {
          key: key,
          data: data.map((item: IColumnDefModel | IDataDefModel) => this.createModel(key, item))
        };
      }),
      take(1)
    );
  }

  public validateInput(columns, data): void {
    if (!columns || !data) {
      throw new Error('Please pass in columns and data to the rich-table');
    }

    if (!isObservable(columns) && !Array.isArray(columns)) {
      throw new Error('Invalid input type: Columns should either be IColumnDefModel[] or Observable<IColumnDefModel[]');
    }

    if (!isObservable(data) && !Array.isArray(data)) {
      throw new Error('Invalid input type: Data should either be IDataDefModel[] or Observable<IDataDefModel[]');
    }
  }

  private createModel(type: InputValueType.DATA | InputValueType.COLUMNS, data: any): ColumnModel | DataModel {
    if (type === InputValueType.COLUMNS) {
      return new ColumnModel(data);
    } else if (type === InputValueType.DATA) {
      return new DataModel(data);
    } else {
      throw new Error('Only "data" model or "column" model are supported');
    }
  }
}
