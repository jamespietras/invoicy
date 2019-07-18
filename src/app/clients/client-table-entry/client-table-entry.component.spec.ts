import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTableEntryComponent } from './client-table-entry.component';

describe('ClientTableEntryComponent', () => {
  let component: ClientTableEntryComponent;
  let fixture: ComponentFixture<ClientTableEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientTableEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientTableEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
