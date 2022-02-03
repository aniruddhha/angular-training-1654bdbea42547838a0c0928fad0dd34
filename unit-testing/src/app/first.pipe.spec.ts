import { FirstPipe } from './first.pipe';

describe('FirstPipe', () => {
  it('create an instance', () => {
    const pipe = new FirstPipe();
    expect(pipe).toBeTruthy();
  });
  it('pipe logic', () => {
    const pipe = new FirstPipe();
    
    const ip = 'abc,pqr,lmn,xsz'

    const actual = pipe.transform(ip, 1)
    const expected = 'pqr'

    expect(actual).toBe(expected)
  });
});
