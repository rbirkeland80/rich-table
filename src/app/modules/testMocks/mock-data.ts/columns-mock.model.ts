import { CurrencyPipe, UpperCasePipe, PercentPipe, DatePipe } from '@angular/common';

import { ColumnModel } from '../../table/models/columnModel';
import { CustomFormatter } from '../../table/interfaces/column.interface';

const testFormatter: CustomFormatter<string> = {
  format: (inputValue) => {
    if (inputValue) {
      return 'Active';
    } else {
      return 'Inactive';
    }
  }
};

const testFormatter1: CustomFormatter<string> = {
  format: (inputValue) => {
    if (inputValue === 'Active') {
      return '+ Active';
    } else {
      return '- Inactive';
    }
  }
};

export const rawColumns = [
  {
    columnName: 'Test1',
    linkerProperty: 'test1',
    inlineStyles: { 'background-color': 'grey', color: 'white' },
    pipe: UpperCasePipe
  },
  {
    columnName: 'Price',
    linkerProperty: 'test2',
    classNames: 'active',
    pipe: CurrencyPipe,
    pipeParams: ['CAD', 'code']
  },
  {
    columnName: 'Test3',
    linkerProperty: 'test3',
    classNames: ['disabled', 'invalid'],
    formatters: [testFormatter, testFormatter1],
    pipe: UpperCasePipe
  },
  {
    columnName: 'Percent',
    linkerProperty: 'test4',
    pipe: PercentPipe
  },
  {
    columnName: 'date',
    linkerProperty: 'test5',
    pipe: DatePipe,
    pipeParams: 'medium'
  }
];

export const columnMockModel = rawColumns.map(item => new ColumnModel(item));
