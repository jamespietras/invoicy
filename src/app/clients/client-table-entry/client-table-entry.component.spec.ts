import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ClientTableEntryComponent } from './client-table-entry.component';

describe('ClientTableEntryComponent', () => {
  let component: ClientTableEntryComponent;
  let fixture: ComponentFixture<ClientTableEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientTableEntryComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientTableEntryComponent);
    component = fixture.componentInstance;
    component.client = {id: '1', name: 'Test', invoices: []};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
