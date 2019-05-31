import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';

import { IDataDefModel } from './modules/table/interfaces/data.interface';
import { IColumnDefModel } from './modules/table/interfaces/column.interface';
import { rawData } from './modules/testMocks/mock-data.ts/data-mock.model';
import { rawColumns } from './modules/testMocks/mock-data.ts/columns-mock.model';

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
      this.data.next(rawData);
    }, 100);

    setTimeout(() => {
      this.columns.next(rawColumns);
    }, 500);
  }
}
