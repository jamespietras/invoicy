import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { InvoiceTableEntryComponent } from './invoice-table-entry.component';

describe('InvoiceTableEntryComponent', () => {
  let component: InvoiceTableEntryComponent;
  let fixture: ComponentFixture<InvoiceTableEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceTableEntryComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceTableEntryComponent);
    component = fixture.componentInstance;
    component.invoice = {name: 'Test', netValue: 1, paid: true, company: {id: '1', name: 'Test'}, id: '1', tax: 1};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
