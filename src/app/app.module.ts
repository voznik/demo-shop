import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DemoShopHttpService } from './demo-shop-http.service';
import { AuthService } from './auth.service';
import {Ng2Webstorage} from 'ngx-webstorage';
import { ProductListComponent } from './product-list/product-list.component';
import { appRoutes } from './app.routes';
import {ProductService} from "./product.service";
import { ProductTileComponent } from './product-tile/product-tile.component';
import {UserService} from "./user.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ProductListComponent,
    ProductTileComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    Ng2Webstorage,
    appRoutes
  ],
  providers: [
    { provide: 'ENV_URL', useValue: 'http://localhost:3000/api' },
    { provide: 'SESSION_TOKEN_KEY', useValue: 'session-token' },
    DemoShopHttpService,
    AuthService,
    ProductService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
