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
        "sexo" : "Masculino",
        "telefone" : "49 3567-0000",
        "cpf" : "000.111.222-33",
        "dataNasc" : "24-12-1924"    
    },  
    {
        "id" : "000002",
        "nome" : "guilherme",
        "eMail" : "guilhermer@gmail.com",
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
    ///usuarios/
    return this.usuariosFake;
  }

  salvar(usuario: Usuario) {
    this.usuariosFake.push(usuario);
    console.log("estou salvando o seguinte usuario:");
    console.log(usuario);
    return {
      "id": "1"
    }
  }

  listarPorId(id){
    let usuario = {
      "id":"5",
      "nome":"zortéa",
      "cpf":"104.201.589-95"
    }
    return usuario;
  }

}
