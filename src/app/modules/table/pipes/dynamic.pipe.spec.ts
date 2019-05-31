import { UpperCasePipe } from '@angular/common';

import { DynamicPipe } from './dynamic.pipe';

const injector = {
  get: () => {
    return new UpperCasePipe();
  }
};

describe('DynamicPipe', () => {
  let pipe: DynamicPipe;
  const testValue = 'testValue';

  beforeEach(() => {
    pipe = new DynamicPipe(injector);
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return original value if pipeToken is not provided', () => {
    expect(pipe.transform(testValue, null, null)).toEqual(testValue);
  });

  it('should apply pipe on the original value', () => {
    expect(pipe.transform(testValue, UpperCasePipe, null)).toEqual(testValue.toUpperCase());
  });
});
