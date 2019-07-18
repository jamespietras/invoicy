import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceTableEntryComponent } from './invoice-table-entry.component';

describe('InvoiceTableEntryComponent', () => {
  let component: InvoiceTableEntryComponent;
  let fixture: ComponentFixture<InvoiceTableEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceTableEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceTableEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
