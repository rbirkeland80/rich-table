import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';

import { IDataDefModel } from './modules/table/interfaces/data.interface';
import { IColumnDefModel } from './modules/table/interfaces/column.interface';

@Component({
  // tslint:disable-next-line
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  columns = new Subject<IColumnDefModel[]>();
  data = new Subject<IDataDefModel[]>();

  ngOnInit() {
    setTimeout(() => {
      this.data.next([
        {
          test1: 'Data 1',
          test2: null,
          test3: true
        }
      ]);
    }, 100);

    setTimeout(() => {
      this.columns.next([
        {
          columnName: 'Test1',
          linkerProperty: 'test1',
          inlineStyles: { 'background-color': 'grey', color: 'white' }
        },
        {
          columnName: 'Test2',
          linkerProperty: 'test2',
          classNames: 'active'
        },
        {
          columnName: 'Test3',
          linkerProperty: 'test3',
          classNames: ['disabled', 'invalid']
        }
      ]);
    }, 500);
  }
}
