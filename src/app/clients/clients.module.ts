import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ClientsComponent } from './clients.component';
import { ClientTableEntryComponent } from './client-table-entry/client-table-entry.component';

@NgModule({
  declarations: [ClientsComponent, ClientTableEntryComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [ClientsComponent]
})
export class ClientsModule { }
