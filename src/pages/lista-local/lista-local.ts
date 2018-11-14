import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocaisProvider } from '../../providers/locais/locais';
import { Local } from '../../models/local';
import { CadastroLocalPage } from '../cadastro-local/cadastro-local';

/**
 * Generated class for the ListaLocalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-local',
  templateUrl: 'lista-local.html',
})
export class ListaLocalPage {

  private lista: Array<Local>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private provedor: LocaisProvider
  ) {
   this.lista = this.provedor.listar();
  }

  adicionar() {
    console.log("deveria chamar a tela de cadastro");
    this.navCtrl.push(CadastroLocalPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaUsuarioPage');
  }

}