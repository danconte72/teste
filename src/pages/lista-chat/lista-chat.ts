import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MensagensProvider } from '../../providers/mensagens/mensagens';

/**
 * Generated class for the ListaChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-chat',
  templateUrl: 'lista-chat.html',
})
export class ListaChatPage {

  private lista;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private provedor: MensagensProvider,
    ) {
      this.lista = this.provedor.listarChat(); 
      //   data => {
      //     this.lista = data;
      //   }
      // ;
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaChatPage');
  }

}
