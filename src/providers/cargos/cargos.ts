import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cargo } from '../../models/cargo';


/*
  Generated class for the CargosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CargosProvider {

  private cargo;

  constructor(public http: HttpClient) {
    console.log('Hello cargosProvider Provider');
  }

  listar() {
    return this.http.get('https://caps-ad.herokuapp.com/public/cargos').toPromise()
    .then(
      data=>{
        this.cargo = data;
        return data;
      }
    );
  }

  salvar(cargo : Cargo) {
    if(cargo.id == null){
      return this.http.get(`https://caps-ad.herokuapp.com/public/cargos/cadastrar/${cargo.nome}/${cargo.setor}`).toPromise();
    } else {
      console.log("estou editando o seguinte usuario:");
    }
    console.log(cargo);
    return {
      "id": cargo.id
    }
  }

  listarPorId(id){
    let cargo = this.cargo
    .filter(
      function(elemento) {
        return elemento.id == id
      }
    )
    return cargo[0];
  }
}
