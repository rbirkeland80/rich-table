import { ColumnModel } from '../models/columnModel';

export interface IAbstractData {
  formatData(columns: ColumnModel[]): void;
}
