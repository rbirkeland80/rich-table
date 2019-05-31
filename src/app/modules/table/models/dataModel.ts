import { IDataDefModel } from '../interfaces/data.interface';
import { CustomFormatter } from '../interfaces/column.interface';
import { IAbstractData } from '../interfaces/abstractInput.interface';
import { TDataType } from '../interfaces/data.interface';
import { ColumnModel } from '../models/columnModel';

export class DataModel implements IAbstractData {

  [key: string]: any;

  constructor(data: IDataDefModel) {
    Object.keys(data).forEach(prop => {
      this[prop] = data[prop];
    });
  }

  public formatData(columns: ColumnModel[]): void {
    columns.forEach((column: ColumnModel) => {
      if (!column.formatters) {
        return;
      }

      const targetProp = Object.keys(this).find((key) => key === column.linkerProperty);

      if (!targetProp) {
        return;
      }

      this[targetProp] = this.applyFormattersOnValue(this[targetProp], column.formatters);
    });
  }

  private applyFormattersOnValue(value: TDataType, formatters: CustomFormatter<TDataType> | CustomFormatter<TDataType>[]): TDataType {
    if (!formatters) {
      return value;
    }

    const formattersArray = !Array.isArray(formatters) ? [formatters] : formatters;
    const formattersArrayCopy = [...formattersArray];
    const currentFormatter = formattersArrayCopy.shift();
    const currentValue = currentFormatter.format(value);

    while (formattersArrayCopy.length) {
      return this.applyFormattersOnValue(currentValue, formattersArrayCopy);
    }

    return currentValue;
  }

}
