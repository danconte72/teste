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

  private mensagens;

  constructor(public http: HttpClient) {
    console.log('Hello MensagensProvider Provider');
  }

  listar(protocolo) {
    return this.http.get(`https://caps-ad.herokuapp.com/public/chat/${protocolo}/mensagens`).toPromise()
    .then(
      data=>{
        this.mensagens = data;
        let mensagens = this.mensagens
        .filter(
          function(elemento) {
            return elemento.protocolo = protocolo;
          }
        )
        return mensagens;
      }
    );
  }

  listarChat() {
    return this.http.get(`https://caps-ad.herokuapp.com/public/chat`).toPromise()
    .then(
      data=>{
        this.mensagens = data;
        let mensagens = this.mensagens
        .filter(
          function(elemento) {
            return elemento.datafim == null
          }
        )
        return mensagens;
      }
    );
  }
  
  salvar(mensagem) {
    this.mensagens.push(mensagem);
    console.log("Mensagem Salva");
    console.log(mensagem);
    return {
      "id": "1"
    }
  }
}