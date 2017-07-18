import { Injectable, Inject } from '@angular/core';
import { DemoShopHttpService } from './demo-shop-http.service';
import { UserModel } from './user.model';
import { LocalStorageService } from 'ngx-webstorage';
import {Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/do';
import {UserService} from "./user.service";

@Injectable()
export class AuthService {
  sessionTokenKey: string;

  constructor( private httpService: DemoShopHttpService,
              private localSt:LocalStorageService,
              private userService: UserService,
              @Inject('SESSION_TOKEN_KEY') sessionTokenKey: string ) {
    this.sessionTokenKey = sessionTokenKey;
  }

  login (user: UserModel): Observable<Response> {
    return this.httpService.post('/login', user)
      .do(res => {
        var sessionToken = res.headers.get(this.sessionTokenKey);
        this.localSt.store(this.sessionTokenKey, sessionToken);
        return res;
      })
      .do(res => {
        this.userService.setCurrentUser(user);
        return res;
      });
  }

  logout (user: UserModel) {
    this.httpService.post('/logout', user)
      .do(res => {
        this.localSt.clear(this.sessionTokenKey);
      });
  }
}
