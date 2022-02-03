import { BasicDirective } from './basic.directive';

describe('BasicDirective', () => {
  it('should create an instance', () => {
    const directive = new BasicDirective();
    expect(directive).toBeTruthy();
  });

  it('check logic', () => {
    const directive = new BasicDirective();
    
    directive.onIn()
    
    expect(directive.border).toBe('1px solid blue')
  })
});
