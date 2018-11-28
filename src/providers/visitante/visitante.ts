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

  private visitantes;
  
  constructor(public http: HttpClient) {
    console.log('Hello VisitanteProvider Provider');
  }

  listar() {
    return this.http.get('https://caps-ad.herokuapp.com/public/visitante').toPromise()
    .then(
      data=>{
        this.visitantes = data;
        return data;
      }
    );
  }

  salvar(visitante: Visitante) {
    if(visitante.id == null){
      return this.http.get(`https://caps-ad.herokuapp.com/public/visitante/cadatrarVisitante/${visitante.nome}/${visitante.telefone}/${visitante.sexo}/${visitante.idade}/${visitante.local}`).toPromise();
    } else {
      console.log("estou editando o seguinte usuario:");
    }
    console.log(visitante);
    return {
      "id": visitante.id
    }
  }

  listarPorId(id){
    let visitantes = this.visitantes
    .filter(
      function(elemento) {
        return elemento.id == id
      }
    )
    return visitantes[0];
  }
}
