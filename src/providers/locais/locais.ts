import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Local } from '../../models/local';
import { LocaleData } from 'ionic-angular/umd/util/datetime-util';


@Injectable()
export class LocaisProvider {

  private local;

  constructor(public http: HttpClient) {
    console.log('Hello locaisProvider Provider');
  }

  listar() {
    return this.http.get('https://caps-ad.herokuapp.com/public/local').toPromise()
    .then(
      data=>{
        this.local = data;
        return data;
      }
    );
  }

  salvar(local: Local) {
    if(local.id == null){
      return this.http.get(`https://caps-ad.herokuapp.com/public/local/cadastrarLocal/${local.cidade}/${local.bairro}`).toPromise();
    } else {
      console.log("estou editando o seguinte usuario:");
    }
    console.log(local);
    return {
      "id": local.id
    }
  }

  listarPorId(id){
    let local = this.local
    .filter(
      function(elemento) {
        return elemento.id == id
      }
    )
    return local[0];
  }
}
