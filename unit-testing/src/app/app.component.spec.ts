import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FirstPipe } from './first.pipe';

describe('AppComponent', () => {
  beforeEach(async () => { // before running each test case
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FirstPipe
      ],
    }).compileComponents(); // please load component
  });

  // component is created or not
  it('should create the component', () => { // it is test case
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // this checks logic addtion is correct or not
  it(`should check addition'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.add(10, 34)
    expect(app.res).toBe(44)
  });

  // actually 44 is rendered on screen or not
  it('should check addition on UI', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.add(10, 34)
    fixture.detectChanges(); // reflect results on the UI

    const compiled = fixture.nativeElement as HTMLElement;
    const actualTextContext = compiled.querySelector('#res')?.textContent
    const expctedTextContent = 'Addition is 44'
    expect(actualTextContext).toEqual(expctedTextContent)
  });

  it('check if 99', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.onBtn()
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const actualTextContext = compiled.querySelector('#res')?.textContent
    const expctedTextContent = 'Addition is 99'
    expect(actualTextContext).toEqual(expctedTextContent)
  })

  it('check first pipe', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.countries = 'abc,pqr,lmn,xyz,hij'
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const actualTextContext = compiled.querySelector('#dv')?.textContent
    const expctedTextContent = 'First Country is : pqr'
    expect(actualTextContext).toEqual(expctedTextContent)
  })
});
