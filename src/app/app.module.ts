import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule,  NbSidebarModule, NbSidebarService} from '@nebular/theme';
import { ThemeModule } from './@theme/theme.module';
import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { FooterComponent } from './pages/footer/footer.component';
import { SidebarHeaderComponent } from './pages/sidebar-header/sidebar-header.component';
import { HeaderComponent } from './pages/header/header.component';
import { WashComponent } from './pages/wash/wash.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    FooterComponent,
    SidebarHeaderComponent,
    HeaderComponent,
    WashComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbSidebarModule,
    Ng2SmartTableModule
    
  ],
  providers: [NbSidebarService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
