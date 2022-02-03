import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => { // before running each test case
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents(); // please load component
  });

  it('should create the component', () => { // it is test case
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should check addition'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.add(10, 34)
    expect(app.res).toBe(44)
  });

  it('should check addition on UI', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.add(10, 34)
    fixture.detectChanges(); // reflect results on the UI

    const compiled = fixture.nativeElement as HTMLElement;
    const actual = compiled.querySelector('#res')?.textContent
    const expcted = 'Addition is 44'
    expect(actual).toEqual(expcted)
  });
});
