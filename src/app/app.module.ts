import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassesComponent } from './classes/classes.component';
import { SeriesComponent } from './series/series.component';
//import { ClassesComponent } from './classes/classes.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassesComponent,
    SeriesComponent,
    //ClassesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
