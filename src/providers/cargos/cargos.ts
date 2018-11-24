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

  private cargoFake = [
    {
      "id" : "1",
      "nome" : "Lorivaldo Paulek", 
      "cargo" : "Fisioterapeuta"
    },
    {
      "id" : "2",
      "nome" : "Ronaldinho Gaucho",
      "cargo" : "Direcao"
    }
  ];

  constructor(public http: HttpClient) {
    console.log('Hello cargosProvider Provider');
  }

  listar() {
    return this.cargoFake;
  }

  salvar(cargo : Cargo) {
    this.cargoFake.push(cargo);
    console.log("salvando o seguintes Cargos:");
    console.log(cargo);
    return {
      "id" : "3"
    }
  }
}
