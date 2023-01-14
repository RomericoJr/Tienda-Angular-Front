import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APIModule } from './API/api.module';
import { AuthModule } from './Auth/auth.module';
import { TiendaModule } from './Tienda/tienda.module';
import { HeaderModule } from './header/header.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APIModule,
    AuthModule,
    TiendaModule,
    HeaderModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
