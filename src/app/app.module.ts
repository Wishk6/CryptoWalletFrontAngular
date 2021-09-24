import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { ShowApiComponent } from './show-api/show-api.component';
import { TrainingComponent } from './training/training.component';
import { TotalButtonComponent } from './total-button/total-button.component';
import { MoonSvgComponent } from './moon-svg/moon-svg.component';
import { SunSvgComponent } from './sun-svg/sun-svg.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    ShowApiComponent,
    TrainingComponent,
    TotalButtonComponent,
    MoonSvgComponent,
    SunSvgComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
