import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Entorpecente } from '../../models/entorpencente';
import { EntorpecenteProvider } from '../../providers/entorpecente/entorpecente';
import { CadastroEntorpecentePage } from '../cadastro-entorpecente/cadastro-entorpecente';


/**
 * Generated class for the ListaEntorpecentePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-entorpecente',
  templateUrl: 'lista-entorpecente.html',
})
export class ListaEntorpecentePage {

  private lista:any = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private provedor: EntorpecenteProvider,
  ) {
    this.provedor.listar().then( 
      data => {
        this.lista = data;
      }
    );
  }

  adicionar() {
    console.log("deveria chamar a tela de cadastro");
    this.navCtrl.push(CadastroEntorpecentePage);
  }

  editar(id) {
    console.log("deveria chamar a tela de ediçao");
    this.navCtrl.push(CadastroEntorpecentePage,
      {
      id: id
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaEntorpecentePage');
  }

}

 
