import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondModaleComponent } from './second-modale.component';

describe('SecondModaleComponent', () => {
  let component: SecondModaleComponent;
  let fixture: ComponentFixture<SecondModaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondModaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondModaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
