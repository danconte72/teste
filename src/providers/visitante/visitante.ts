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
    return this.http.get('https://caps-ad.herokuapp.com/public/visitantes').toPromise()
    .then(
      data=>{
        this.visitantes = data;
        return data;
      }
    );
  }

  salvar(visitante: Visitante) {
    if(visitante.id == null){
      return this.http.get(`https://caps-ad.herokuapp.com/public/visitante/cadastrar/${visitante.nome}/${visitante.telefone}/${visitante.sexo}/${visitante.idade}/${visitante.local}`).toPromise();
    } else {
      return this.http.get(`https://caps-ad.herokuapp.com/public/visitante/cadastrar/${visitante.nome}/${visitante.telefone}/${visitante.sexo}/${visitante.idade}/${visitante.local}/${visitante.id}`).toPromise();
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
