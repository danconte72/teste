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
    return this.http.get('https://caps-ad.herokuapp.com/public/local').toPromise();
  }

  salvar(local: Local) {
    if(local.id == null){
      this.localFake.push(local);
      console.log("estou salvando o seguinte usuario:");
    } else {
      console.log("estou editando o seguinte usuario:");
    }
    console.log(local);
    return {
      "id": local.id
    }
  }

  listarPorId(id){
    let local = this.localFake
    .filter(
      function(elemento) {
        return elemento.id == id
      }
    )
    return local[0];
  }
}
