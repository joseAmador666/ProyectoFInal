import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceStateComponent } from './invoice-state.component';

describe('InvoiceStateComponent', () => {
  let component: InvoiceStateComponent;
  let fixture: ComponentFixture<InvoiceStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
