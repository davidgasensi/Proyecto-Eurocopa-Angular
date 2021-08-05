import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegovalorComponent } from './juegovalor.component';

describe('JuegovalorComponent', () => {
  let component: JuegovalorComponent;
  let fixture: ComponentFixture<JuegovalorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegovalorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegovalorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
