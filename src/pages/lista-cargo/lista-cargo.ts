import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CargosProvider } from '../../providers/cargos/cargos';
import { Cargo } from '../../models/cargo';
import { CadastroCargoPage } from '../cadastro-cargo/cadastro-cargo';

/**
 * Generated class for the ListaCargoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-cargo',
  templateUrl: 'lista-cargo.html',
})
export class ListaCargoPage {

  private lista:any = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private provedor: CargosProvider
    ) {
      this.provedor.listar().then( 
        data => {
          this.lista = data;
        }
      )
      ;
    }

  adicionar() {
    console.log("deveria chamar a tela de cadastro");
    this.navCtrl.push(CadastroCargoPage);
  }

  editar(id) {
    console.log("deveria chamar a tela de ediçao");
    this.navCtrl.push(CadastroCargoPage,
      {
      id: id
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaCargoPage');
  }

}
