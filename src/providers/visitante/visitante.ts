import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Visitante } from '../../models/visitante';

/*
  Generated class for the VisitanteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VisitanteProvider {

  private visitantesFake = [
    { 
      "id" : "000001",
      "nome" : "volmar",
      "telefone" : "49 3567-0000",
      "sexo" : "Masculino",
      "idade" : "43",
      "local" : "caçador"    
    },  
    {
      "id" : "000002",
      "nome" : "gui",
      "telefone" : "49 3567-6056",
      "sexo" : "Masculino",
      "idade" : "20",
      "local" : "caçador"  
    } 
];

  constructor(public http: HttpClient) {
    console.log('Hello VisitanteProvider Provider');
  }

  listar() {
    return this.visitantesFake;
  }

  salvar(visitante: Visitante) {
    this.visitantesFake.push(visitante);
    console.log("estou salvando o seguinte visitante:");
    console.log(visitante);
    return {
      "id": "1"
    }
  }
}
