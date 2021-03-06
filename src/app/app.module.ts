import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DemoShopHttpService } from './demo-shop-http.service';
import { AuthService } from './auth.service';
import {Ng2Webstorage} from 'ngx-webstorage';
import { appRoutes } from './app.routes';
import {ProductService} from "./product.service";
import {LoggedInGuard} from "./logged-in-guard";
import {UnAuthGuard} from "./un-auth-guard";
import { MainLayoutComponent } from './main-layout/main-layout.component';
import {MainLayoutModule} from "./main-layout/main-layout.module";
import { ProductPageComponent } from './product-page/product-page.component';
import { ActionResultPopupService } from './action-result-popup.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainLayoutComponent,
    ProductPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    Ng2Webstorage,
    appRoutes,
    MainLayoutModule
  ],
  providers: [
    { provide: 'ENV_URL', useValue: 'http://localhost:3000/api' },
    { provide: 'SESSION_TOKEN_KEY', useValue: 'session-token' },
    { provide: 'CURRENT_USER_KEY', useValue: 'current-user' },
    DemoShopHttpService,
    AuthService,
    ProductService,
    LoggedInGuard,
    UnAuthGuard,
    ActionResultPopupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
