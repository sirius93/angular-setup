import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AboutComponent } from './containers/about/about.component';
import { HomeComponent } from './containers/home/home.component';

import { ApiService } from '../services';
import { AllRoutings } from '../routes/index.routing';
import { ExponentialStrengthPipe } from '../pipes/exponential-strength.pipe';
import 'hammerjs';
@NgModule({
  declarations: [
    AppComponent,AboutComponent,HomeComponent,ExponentialStrengthPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AllRoutings,
    MaterialModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
