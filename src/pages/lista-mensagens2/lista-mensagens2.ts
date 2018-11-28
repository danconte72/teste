import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MensagensProvider } from '../../providers/mensagens/mensagens';
import { Mensagem } from '../../models/mensagem';
import { CadastroMensagensPage } from '../cadastro-mensagens/cadastro-mensagens';
import { CadastroMensagens2Page } from '../cadastro-mensagens2/cadastro-mensagens2';

/**
 * Generated class for the ListaMensagensPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-mensagens2',
  templateUrl: 'lista-mensagens2.html',
})
export class ListaMensagens2Page {

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
    this.navCtrl.push(CadastroMensagens2Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaMensagens2Page');
  }

}
