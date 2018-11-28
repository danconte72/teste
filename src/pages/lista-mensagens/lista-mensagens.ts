import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MensagensProvider } from '../../providers/mensagens/mensagens';
import { Mensagem } from '../../models/mensagem';
import { CadastroMensagensPage } from '../cadastro-mensagens/cadastro-mensagens';

/**
 * Generated class for the ListaMensagensPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-mensagens',
  templateUrl: 'lista-mensagens.html',
})
export class ListaMensagensPage {

  private lista: Array<Mensagem>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private provedor: MensagensProvider
    ) {
    this.lista = this.provedor.listar();
  }

  adicionar() {
    console.log("deveria chamar a tela de cadastro");
    this.navCtrl.push(CadastroMensagensPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaMensagensPage');
  }

}
