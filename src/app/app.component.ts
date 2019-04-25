import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { IDataDefModel } from './modules/table/interfaces/data.interface';
import { IColumnDefModel } from './modules/table/interfaces/column.interface';

@Component({
  // tslint:disable-next-line
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  columns = new Subject<IColumnDefModel[]>();
  data = new Subject<IDataDefModel[]>();

  ngOnInit() {
    setTimeout(() => {
      this.data.next([
        {
          test1: 'Data 1',
          test2: 'Data 2',
          test3: 'Data 3',
        }
      ]);
    }, 10000);

    setTimeout(() => {
      this.columns.next([
        {
          columnName: 'Test1',
          linkerProperty: 'test1'
        },
        {
          columnName: 'Test2',
          linkerProperty: 'test3'
        },
        {
          columnName: 'Test3',
          linkerProperty: 'test3'
        }
      ]);
    }, 5000);
  }
}
