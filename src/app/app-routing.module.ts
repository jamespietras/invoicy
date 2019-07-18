import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientsComponent } from './clients/clients.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InvoicingComponent } from './invoicing/invoicing.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'invoicing', component: InvoicingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
