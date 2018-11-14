import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Local } from '../../models/local';
import { LocaleData } from 'ionic-angular/umd/util/datetime-util';


@Injectable()
export class LocaisProvider {

  private localFake = [
    {
      "id" : "1",
      "cidade" : "cacador", 
      "bairro" : "Municipios"
    },
    {
      "id" : "2",
      "cidade" : "calmon",
      "bairro" : "centro"
    },
  ];

  constructor(public http: HttpClient) {
    console.log('Hello locaisProvider Provider');
  }

  listar() {
    return this.localFake;
  }

  salvar(local: Local) {
    this.localFake.push(local);
    console.log("salvando o seguintes locais:");
    console.log(local);
    return {
      "id" : "3"
    }
  }
}
