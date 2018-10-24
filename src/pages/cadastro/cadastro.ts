import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
    this.usuario = new Usuario;
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
