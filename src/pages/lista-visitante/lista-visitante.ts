import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Visitante } from '../../models/visitante';
import { VisitanteProvider } from '../../providers/visitante/visitante';
import { CadastroVisitantePage } from '../cadastro-visitante/cadastro-visitante';

/**
 * Generated class for the ListaVisitantePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-visitante',
  templateUrl: 'lista-visitante.html',
})
export class ListaVisitantePage {

  private lista: Array<Visitante>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private provedor: VisitanteProvider
  ) {
    this.lista = this.provedor.listar();
  }

  adicionar() {
    console.log("deveria chamar a tela de cadastro");
    this.navCtrl.push(CadastroVisitantePage);
  }
  
  editar(id) {
    console.log("deveria chamar a tela de ediçao");
    this.navCtrl.push(CadastroVisitantePage,
      {
      id: id
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaVisitantePage');
  }



}
