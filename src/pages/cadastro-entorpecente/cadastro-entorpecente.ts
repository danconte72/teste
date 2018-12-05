import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EntorpecenteProvider } from '../../providers/entorpecente/entorpecente';
import { Entorpecente } from '../../models/entorpencente';

/**
 * Generated class for the CadastroEntorpecentePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-entorpecente',
  templateUrl: 'cadastro-entorpecente.html',
})
export class CadastroEntorpecentePage {
  private entorpecente: Entorpecente;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private provedor: EntorpecenteProvider,
    ) {
      let id = this.navParams.data.id;
      if (id != null){// editar
        this.entorpecente = this.provedor.listarPorId(id);
      } else {//novo
        this.entorpecente = new Entorpecente();
      }
      console.log(this.entorpecente);
    }

  salvar() {
  
    console.log(this.entorpecente);
    console.log(this.provedor.salvar(this.entorpecente));
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

}