import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowApiComponent } from './show-api/show-api.component';
import { TotalButtonComponent } from './total-button/total-button.component';
import { MoonSvgComponent } from './moon-svg/moon-svg.component';
import { SunSvgComponent } from './sun-svg/sun-svg.component';
import { HeaderComponent } from './header/header.component';
import { ThemeswitchComponent } from './themeswitch/themeswitch.component';
import { UserTestComponent } from './view/user-test/user-test.component';
import { AlertComponent } from './alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowApiComponent,
    TotalButtonComponent,
    MoonSvgComponent,
    SunSvgComponent,
    HeaderComponent,
    ThemeswitchComponent,
    UserTestComponent,
    AlertComponent,

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
