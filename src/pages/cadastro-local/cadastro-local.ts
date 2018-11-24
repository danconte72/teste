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
<<<<<<< HEAD
  ) {
    this.local = new Local();
    console.log(this.local);
   }
=======
    ) {
      let id = this.navParams.data.id;
      if (id != null){// editar
        this.local = this.provedor.listarPorId(id);
      } else {//novo
        this.local = new Local();
      }
      console.log(this.local);
    }
>>>>>>> 5c440731165b6e7bb44f5f41b4f625e49ac3f9f0

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroLocalPage');
  }

  salvar() {
    this.provedor.salvar(this.local);
    this.navCtrl.pop();
  }

}
