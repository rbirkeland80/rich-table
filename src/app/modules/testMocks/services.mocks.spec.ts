import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { dataMockModel } from './mock-data.ts/data-mock.model';
import { columnMockModel } from './mock-data.ts/columns-mock.model';
import { InputValueType } from '../table/enums/inputValueTypes.enum';

@Injectable({
  providedIn: 'root'
})
export class MockTableModelService {

  constructor() {}

  public buildTableDataObservable(key, data): Observable<any> {
    return of({
      key: key,
      data: key === InputValueType.DATA ? dataMockModel : columnMockModel
    });
  }

  public validateInput(): void { }

}
