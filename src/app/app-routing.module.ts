import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
    ]),
  ],
  exports: [RouterModule],
  providers: [],
  declarations: [],
})
export class AppRoutingModule {}
