import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ClientsComponent } from './clients.component';
import { ClientTableEntryComponent } from './client-table-entry/client-table-entry.component';

describe('ClientsComponent', () => {
  let component: ClientsComponent;
  let fixture: ComponentFixture<ClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientTableEntryComponent, ClientsComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
