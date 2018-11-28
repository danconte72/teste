import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario';

@Injectable()
export class UsuariosProvider {


  private usuariosFake = [
    { 
        "id" : "000001",
        "nome" : "volmar",
        "eMail" : "volmar@gmail.com",
        "login" : "volmar01",
        "senha" : "12345",
        "sexo" : "Masculino",
        "telefone" : "49 3567-0000",
        "cpf" : "000.111.222-33",
        "dataNasc" : "24-12-1924"    
    },  
    {
        "id" : "000002",
        "nome" : "guilherme",
        "eMail" : "guilhermer@gmail.com",
        "login" : "gui01",
        "senha" : "gloriadeus",
        "sexo" : "Masculino",
        "telefone" : "49 3567-1111",
        "cpf" : "012.345.678-90",
        "dataNasc" : "05-10-1998"
    } 
];

  constructor(public http: HttpClient) {
    console.log('Hello UsuariosProvider Provider');
  }

  listar() {
    return this.http.get('https://caps-ad.herokuapp.com/public/usuarios').toPromise();
  }

  salvar(usuario: Usuario) {
    if(usuario.id == null){
      return this.http.get(`https://caps-ad.herokuapp.com/public/usuario/cadastrarUsuario/${usuario.nome}/${usuario.eMail}/${usuario.login}/${usuario.senha}/${usuario.sexo}/${usuario.telefone}/${usuario.cpf}/${usuario.dataNasc}`).toPromise();
    } else {
      console.log("estou editando o seguinte usuario:");
    }
    console.log(usuario);
    return {
      "id": usuario.id
    }
  }

  listarPorId(id){
    let usuario = this.usuariosFake
    .filter(
      function(elemento) {
        return elemento.id == id
      }
    )
    return usuario[0];
  }

}
