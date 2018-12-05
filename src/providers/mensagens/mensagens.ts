import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mensagem } from '../../models/mensagem';
import { chat } from '../../models/chat';

/*
  Generated class for the MensagensProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MensagensProvider {

  private Mensagens= [
    { 
      "protocolo": "1",
      "observacao": "bem observado",
      "entorpecente": "2",
      "dataFim": "13/10/1998"
    },
  ];

  constructor(public http: HttpClient) {
    console.log('Hello MensagensProvider Provider');
  }

  // listar(protocolo) {
  //   return this.http.get(`https://caps-ad.herokuapp.com/public/chat/${protocolo}/mensagens`).toPromise()
  //   .then(
  //     data=>{
  //       this.Mensagens = data;
  //       return data;
  //     }
  //   );
  // }

  listarChat() {
    // return this.http.get(`https://caps-ad.herokuapp.com/public/chat`).toPromise()
    // .then(
    //   data=>{
        // this.Mensagens = data;
        return this.Mensagens;
      }
    // );
  
  salvar(mensagem) {
    this.Mensagens.push(mensagem);
    console.log("Mensagem Salva");
    console.log(mensagem);
    return {
      "id": "1"
    }
  }
}