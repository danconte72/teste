import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entorpecente } from '../../models/entorpencente';

 /*
  Generated class for the EntorpecenteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class EntorpecenteProvider {

  private entorpecentesFake = [
    {
      "id" : "1",
      "nome" : "maconha", 
    },
    {
      "id" : "2",
      "nome" : "metanfetamina"
    }
  ];

  constructor(public http: HttpClient) {
    console.log('Hello EntorpecenteProvider Provider');
  }

  listar() {
    return this.entorpecentesFake;
  }

  salvar(entorpecente : Entorpecente) {
    if(entorpecente.id == null){
      this.entorpecentesFake.push(entorpecente);
      console.log("estou salvando o seguinte usuario:");
    } else {
      console.log("estou editando o seguinte usuario:");
    }
    console.log(entorpecente);
    return {
      "id": entorpecente.id
    }
  }

  listarPorId(id){
    let entorpecentes = this.entorpecentesFake
    .filter(
      function(elemento) {
        return elemento.id == id
      }
    )
    return entorpecentes[0];
  }
}