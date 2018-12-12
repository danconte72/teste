import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Refresher } from 'ionic-angular';
import { Usuario } from '../../models/usuario';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  private usuario: Usuario;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private provedor: UsuariosProvider,
  ) {
    let id = this.navParams.data.id;
    if (id != null){// editar
      this.usuario = this.provedor.listarPorId(id);
    } else {//novo
      this.usuario = new Usuario();
    }
    console.log(this.usuario);
  }

  salvar() {
  
    console.log(this.usuario);
    console.log(this.provedor.salvar(this.usuario));
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

}
