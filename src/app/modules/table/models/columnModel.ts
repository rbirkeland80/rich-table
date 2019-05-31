import { Pipe } from '@angular/core';

import { IColumnDefModel, CustomFormatter, IInlineStyles } from '../interfaces/column.interface';
import { TDataType } from '../interfaces/data.interface';

export class ColumnModel {

  columnName: string;
  linkerProperty: string;
  classNames?: string | string[];
  inlineStyles?: IInlineStyles;
  pipe?: Pipe;
  pipeParams?: string | string[];
  formatters?: CustomFormatter<TDataType> | CustomFormatter<TDataType>[];

  constructor(data: IColumnDefModel) {
    this.columnName = data.columnName;
    this.linkerProperty = data.linkerProperty;

    if (data.classNames) {
      this.classNames = data.classNames;
    }

    if (data.inlineStyles) {
      this.inlineStyles = data.inlineStyles;
    }

    if (data.pipe) {
      this.pipe = data.pipe;
    }

    if (data.pipe && data.pipeParams) {
      this.pipeParams = data.pipeParams;
    }

    if (data.formatters) {
      this.formatters = data.formatters;
    }
  }

}
