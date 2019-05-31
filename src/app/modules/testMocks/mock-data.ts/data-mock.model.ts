import { DataModel } from '../../table/models/dataModel';

export const rawData = [
  {
    test1: 'data 1',
    test2: null,
    test3: true,
    test4: 0.05,
    test5: '1994-11-05T08:15:30-05:00'
  },
  {
    test1: 'data 2',
    test2: 0.32,
    test3: false
  }
];
export const dataMockModel = rawData.map(item => new DataModel(item));
