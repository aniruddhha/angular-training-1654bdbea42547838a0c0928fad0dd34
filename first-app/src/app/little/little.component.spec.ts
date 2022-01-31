import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleComponent } from './little.component';

describe('LittleComponent', () => {
  let component: LittleComponent;
  let fixture: ComponentFixture<LittleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LittleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LittleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
