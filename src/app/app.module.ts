import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsModule } from './clients/clients.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InvoicingModule } from './invoicing/invoicing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    InvoicingModule,
    ClientsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
