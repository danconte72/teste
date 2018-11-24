import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NoticiaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export class NoticiaProvider {
  private noticiaFake = [
    { 
      "id" : "1",
      "conteudo" : "caps"
    },
  ];    

  constructor(public http: HttpClient) {
    console.log('Hello NoticiaProvider Provider');
  }
  listarPorId(id){
    let noticia = this.noticiaFake
    .filter(
      function(elemento) {
        return elemento.id == id
      }
    )
    return noticia[0];
  }
  }
  

