import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { Refresher } from 'ionic-angular';

@Injectable()
export class UsuariosProvider {


  private usuario;

  constructor(public http: HttpClient) {
    console.log('Hello UsuariosProvider Provider');
  }

  listar() {
    return this.http.get('https://caps-ad.herokuapp.com/public/usuarios').toPromise()
    .then(
      data=>{
        this.usuario = data;
        return data;
      }
    );
  }

  salvar(usuario: Usuario) {
    if(usuario.id == null){
      return this.http.get(`https://caps-ad.herokuapp.com/public/usuario/cadastrar/${usuario.nome}/${usuario.email}/${usuario.login}/${usuario.senha}/${usuario.sexo}/${usuario.telefone}/${usuario.cpf}/${usuario.datanasc}`).toPromise();
    } else {
      console.log(`https://caps-ad.herokuapp.com/public/usuario/cadastrar/${usuario.nome}/${usuario.email}/${usuario.login}/${usuario.senha}/${usuario.sexo}/${usuario.telefone}/${usuario.cpf}/${usuario.datanasc}/${usuario.id}`).toPromise();
    }
    console.log(usuario);
    return {
      "id": usuario.id
    }
  }

  listarPorId(id){
    let usuario = this.usuario
    .filter(
      function(elemento) {
        return elemento.id == id
      }
    )
    return usuario[0];
  }
}
