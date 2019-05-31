import { ColumnModel } from '../models/columnModel';
import { DataModel } from '../models/dataModel';
import { InputValueType } from '../enums/inputValueTypes.enum';

export interface ITableData {
  columns?: ColumnModel[];
  data?: DataModel[];
}

export interface ITableObservableData {
  key: InputValueType.DATA | InputValueType.COLUMNS;
  data: ColumnModel[] | DataModel[];
}
