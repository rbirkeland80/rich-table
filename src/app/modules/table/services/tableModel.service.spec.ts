import { TestBed, inject, async } from '@angular/core/testing';

import { TableModelService } from './tableModel.service';
import { InputValueType } from '../enums/inputValueTypes.enum';
import { rawData, dataMockModel } from '../../testMocks/mock-data.ts/data-mock.model';
import { rawColumns, columnMockModel } from '../../testMocks/mock-data.ts/columns-mock.model';

describe('TableModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TableModelService
      ]
    });
  });

  it('should be created', inject([TableModelService], (service: TableModelService) => {
    expect(service).toBeTruthy();
  }));

  describe('validateInput method', () => {
    it('should throw missing input', inject([TableModelService], (service: TableModelService) => {
      expect(() => {
        service.validateInput(null, null);
      }).toThrowError('Please pass in columns and data to the rich-table');
    }));

    it('should throw invalid column input', inject([TableModelService], (service: TableModelService) => {
      expect(() => {
        service.validateInput('invalid', rawData);
      }).toThrowError('Invalid input type: Columns should either be IColumnDefModel[] or Observable<IColumnDefModel[]');
    }));

    it('should throw invalid data input', inject([TableModelService], (service: TableModelService) => {
      expect(() => {
        service.validateInput(rawColumns, 'invalid');
      }).toThrowError('Invalid input type: Data should either be IDataDefModel[] or Observable<IDataDefModel[]');
    }));
  });

  describe('buildTableDataObservable method', () => {
    it('should return mapped data observable', async(() => {
      const service = new TableModelService();

      service.buildTableDataObservable(InputValueType.DATA, rawData).subscribe(data => {
        expect(data.key).toBe(InputValueType.DATA);
        expect(data.data).toEqual(dataMockModel);
      });
    }));

    it('should return mapped column observable', async(() => {
      const service = new TableModelService();

      service.buildTableDataObservable(InputValueType.COLUMNS, rawColumns).subscribe(data => {
        expect(data.key).toBe(InputValueType.COLUMNS);
        expect(data.data).toEqual(columnMockModel);
      });
    }));
  });

});
