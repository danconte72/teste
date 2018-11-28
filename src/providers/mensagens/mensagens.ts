import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mensagem } from '../../models/mensagem';

/*
  Generated class for the MensagensProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MensagensProvider {

  private Mensagens = [
    {
        "id" : "1",
        "texto": "bom dia, tudo bem?",
        "data": "22/09/2018",
        "hora": "10:11",
        "remetente": "V",
        "status": "E"
    },
    {
        "id" : "2",
        "texto": "bom dia, tudo e você?",
        "data": "22/09/2018",
        "hora": "10:12",
        "remetente": "A",
        "status": "E"
    },
]

  constructor(public http: HttpClient) {
    console.log('Hello MensagensProvider Provider');
  }

  listar() {
    ///Mensagens/
    return this.Mensagens;
  }
  
  salvar(mensagem: Mensagem) {
    this.Mensagens.push(mensagem);
    console.log("Mensagem Salva");
    console.log(mensagem);
    return {
      "id": "1"
    }
  }
}

