import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Local } from '../../models/local';
import { LocaisProvider } from '../../providers/locais/locais';

/**
 * Generated class for the CadastroLocalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-local',
  templateUrl: 'cadastro-local.html',

})
export class CadastroLocalPage {

  private local: Local;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private provedor: LocaisProvider,
  ) {
    this.local = new Local();
    console.log(this.local);
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroLocalPage');
  }

  salvar() {
    this.provedor.salvar(this.local);
    this.navCtrl.pop();
  }

}
