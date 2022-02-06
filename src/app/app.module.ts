import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TotalButtonComponent } from './component/total-button/total-button.component';
import { ThemeSwitchComponent } from './component/theme-switch/theme-switch.component';
import { HeaderComponent } from './component/header/header.component';
import { MenuComponent } from './view/menu/menu.component';
import { DataViewComponent } from './view/data-view/data-view.component';
import { DataGridComponent } from './component/dataGrid/data-grid.component';
import { GraphicComponent } from './component/graphic/graphic.component';
import { FooterComponent } from './component/footer/footer.component';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DataViewComponent,
    TotalButtonComponent,
    HeaderComponent,
    DataGridComponent,
    ThemeSwitchComponent,
    GraphicComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],  
  bootstrap: [AppComponent]
})
export class AppModule { }
