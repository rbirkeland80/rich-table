import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';

const columns: any = [
  {
    columnName: 'Test1',
    linkerProperty: 'test1'
  }
];
const data: any = [
  {
    test1: 'Data 1'
  }
];

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableComponent ]
    })
    .compileComponents();
  }));

  describe('Input validation', () => {
    it('should throw missing input', () => {
      expect(() => {
        fixture = TestBed.createComponent(TableComponent);
        fixture.detectChanges();
      }).toThrowError('Please pass in columns and data to the rich-table');
    });

    it('should throw invalid column input', () => {
      expect(() => {
        fixture = TestBed.createComponent(TableComponent);
        component = fixture.componentInstance;
        // @ts-ignore
        component.columns = 'invalid';
        component.data = data;
        fixture.detectChanges();
      }).toThrowError('Invalid input type: Columns should either be IColumnDefModel[] or Observable<IColumnDefModel[]');
    });

    it('should throw invalid data input', () => {
      expect(() => {
        fixture = TestBed.createComponent(TableComponent);
        component = fixture.componentInstance;
        component.columns = columns;
        // @ts-ignore
        component.data = 'invalid';
        fixture.detectChanges();
      }).toThrowError('Invalid input type: Data should either be IDataDefModel[] or Observable<IDataDefModel[]');
    });
  });

  describe('Component Creation', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(TableComponent);
      component = fixture.componentInstance;
      component.columns = columns;
      component.data = data;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should create tableData', () => {
      expect(component.tableData).toBeDefined();
      expect(component.tableData.columns).toEqual(columns);
      expect(component.tableData.data).toEqual(data);
    });
  });

});
