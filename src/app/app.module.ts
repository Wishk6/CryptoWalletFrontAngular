import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TotalButtonComponent } from './component/total-button/total-button.component';
import { HeaderComponent } from './component/header/header.component';
import { ThemeswitchComponent } from './component/themeswitch/themeswitch.component';
import { MenuComponent } from './view/menu/menu.component';
import { LoginModalComponent } from './component/login-modal/login-modal.component';
import { CookieService } from 'ngx-cookie-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SelectCryptoComponent } from './component/select-crypto/select-crypto.component';
import { DataViewComponent } from './view/data-view/data-view.component';
import { CommonModule } from '@angular/common';
import { DataGridComponent } from './component/dataGrid/data-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    DataViewComponent,
    TotalButtonComponent,
    HeaderComponent,
    DataGridComponent,
    ThemeswitchComponent,
    MenuComponent,
    LoginModalComponent,
    SelectCryptoComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [CookieService],  // root cookie 
  bootstrap: [AppComponent]
})
export class AppModule { }
