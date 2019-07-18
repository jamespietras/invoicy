import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { InvoicingComponent } from './invoicing.component';
import { InvoiceTableEntryComponent } from './invoice-table-entry/invoice-table-entry.component';
import { ClientSummaryComponent } from './client-summary/client-summary.component';

describe('InvoicingComponent', () => {
  let component: InvoicingComponent;
  let fixture: ComponentFixture<InvoicingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceTableEntryComponent, ClientSummaryComponent, InvoicingComponent ],
      imports: [HttpClientTestingModule, FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
