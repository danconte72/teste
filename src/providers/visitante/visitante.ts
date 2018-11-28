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
    return this.http.get('https://caps-ad.herokuapp.com/public/visitante').toPromise();
  }

  salvar(visitante: Visitante) {
    if(visitante.id == null){
      this.visitantesFake.push(visitante);
      console.log("estou salvando o seguinte usuario:");
    } else {
      console.log("estou editando o seguinte usuario:");
    }
    console.log(visitante);
    return {
      "id": visitante.id
    }
  }

  listarPorId(id){
    let visitantes = this.visitantesFake
    .filter(
      function(elemento) {
        return elemento.id == id
      }
    )
    return visitantes[0];
  }
}
