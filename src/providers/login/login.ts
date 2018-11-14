import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Login } from '../../models/login';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {


  private login = [
    { 
        "cpf" : "000001",
        "senha" : "mmmmmm", 
    }
];
  
  constructor(public http: HttpClient) {
    console.log('Hello LoginProvider Provider');
  }

}
