import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../../models/usuario';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';
import { CadastroPage } from '../cadastro/cadastro';


@IonicPage()
@Component({
  selector: 'page-lista-usuario',
  templateUrl: 'lista-usuario.html',
})
export class ListaUsuarioPage {


  private lista: Array<Usuario>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private provedor: UsuariosProvider
  ) {
    this.lista = this.provedor.listar();
  }

  adicionar() {
    console.log("deveria chamar a tela de cadastro");
    this.navCtrl.push(CadastroPage);
  }

  editar(id) {
    console.log("deveria chamar a tela de ediçao");
    this.navCtrl.push(CadastroPage,
      {
      id: id
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaUsuarioPage');
  }

}
