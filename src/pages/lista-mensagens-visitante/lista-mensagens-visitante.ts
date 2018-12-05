import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MensagensProvider } from '../../providers/mensagens/mensagens';
import { Mensagem } from '../../models/mensagem';
import { CadastroMensagensAtendentePage } from '../cadastro-mensagens-atendente/cadastro-mensagens-atendente';
import { CadastroMensagensVisitantePage } from '../cadastro-mensagens-visitante/cadastro-mensagens-visitante';

/**
 * Generated class for the ListaMensagensVisitantePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-mensagens-visitante',
  templateUrl: 'lista-mensagens-visitante.html',
})
export class ListaMensagensVisitantePage {

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
    this.navCtrl.push(CadastroMensagensVisitantePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaMensagensVisitantePage');
  }

}
