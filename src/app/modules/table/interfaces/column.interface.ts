import { Pipe } from '@angular/core';

import { TDataType } from './data.interface';

export interface IColumnDefModel {
  columnName: string;
  linkerProperty: string;
  classNames?: string | string[];
  inlineStyles?: IInlineStyles;
  pipe?: Pipe;
  pipeParams?: string | string[];
  formatters?: CustomFormatter<TDataType> | CustomFormatter<TDataType>[];
}

export interface CustomFormatter<T> {
  format(input: T): TDataType;
}

export interface IInlineStyles {
  [key: string]: string;
}
