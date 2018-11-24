import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Mensagem } from '../../models/mensagem';
import { MensagensProvider } from '../../providers/mensagens/mensagens';

/**
 * Generated class for the CadastroMensagensPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-mensagens2',
  templateUrl: 'cadastro-mensagens2.html',
})
export class CadastroMensagens2Page {

  private mensagem : Mensagem;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private provedor: MensagensProvider
  ) {
    this.mensagem = new Mensagem();
  }

  salvar() {
    this.mensagem.remetente="V";
    console.log(this.mensagem);
    console.log(this.provedor.salvar(this.mensagem));
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroMensagens2Page');
  }

}
