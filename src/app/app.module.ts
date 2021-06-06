import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DetailsService } from './details.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
   BrowserAnimationsModule,
  ],

  declarations: [ AppComponent , HomeComponent],
  providers: [DetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
