import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { TableModelService } from './services/tableModel.service';
import { MockDynamicPipe } from '../testMocks/pipes.mocks.spec';
import { MockTableModelService } from '../testMocks/services.mocks.spec';
import { rawColumns, columnMockModel } from '../testMocks/mock-data.ts/columns-mock.model';
import { rawData, dataMockModel } from '../testMocks/mock-data.ts/data-mock.model';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TableComponent,
        MockDynamicPipe
      ],
      providers: [
        {
          provide: TableModelService,
          useClass: MockTableModelService
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.columns = rawColumns;
    component.data = rawData;
    fixture.detectChanges();
  });

  it('should call validateInput of TableModelService', () => {
    spyOn(component.tableModelService, 'validateInput').and.stub();

    component.ngOnInit();

    expect(component.tableModelService.validateInput).toHaveBeenCalledWith(rawColumns, rawData);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create tableData', async(() => {
    spyOn(component.tableModelService, 'buildTableDataObservable').and.callThrough();

    component.ngOnInit();

    expect(component.tableModelService.buildTableDataObservable).toHaveBeenCalled();
    expect(component.tableData).toBeDefined();
    expect(component.tableData.columns).toEqual(columnMockModel);
    expect(component.tableData.data).toEqual(dataMockModel);
  }));
});

