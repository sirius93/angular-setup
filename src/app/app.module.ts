import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './containers/about/about.component';
import { HomeComponent } from './containers/home/home.component';

import { ApiService } from '../services';
import { AllRoutings } from '../routes/index.routing';
import { ExponentialStrengthPipe } from '../pipes/exponential-strength.pipe'

@NgModule({
  declarations: [
    AppComponent,AboutComponent,HomeComponent,ExponentialStrengthPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AllRoutings
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
