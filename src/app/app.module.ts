import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ClientsComponent } from './clients/clients.component';
import { InvoicingModule } from './invoicing/invoicing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    ClientsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    InvoicingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
