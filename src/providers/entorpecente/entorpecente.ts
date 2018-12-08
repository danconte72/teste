import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entorpecente } from '../../models/entorpencente';

@Injectable()
export class EntorpecenteProvider {

  private entorpecente;

  constructor(public http: HttpClient) {
    console.log('Hello EntorpecenteProvider Provider');
  }

  listar() {
    return this.http.get('https://caps-ad.herokuapp.com/public/entorpecentes').toPromise()
    .then(
      data=>{
        this.entorpecente = data;
        return data;
      }
    );
  }

  salvar(entorpecente : Entorpecente) {
    if(entorpecente.id == null){
      this.entorpecente.push(entorpecente);
      return this.http.get(`https://caps-ad.herokuapp.com/public/entorpecente/cadastrar/${entorpecente.nome}`).toPromise();      
    } else {
      console.log("estou editando o seguinte usuario:");
    }
    console.log(entorpecente);
    return {
      "id": entorpecente.id
    }
  }

  listarPorId(id){
    let entorpecentes = this.entorpecente
    .filter(
      function(elemento) {
        return elemento.id == id
      }
    )
    return entorpecentes[0];
  }
}