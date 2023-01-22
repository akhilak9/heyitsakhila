import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DockModule} from 'primeng/dock';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';
import {SpeedDialModule} from 'primeng/speeddial';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DockModule,
    CardModule,
    DividerModule,
    SpeedDialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
