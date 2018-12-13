import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CargosProvider } from '../../providers/cargos/cargos';
import { Cargo } from '../../models/cargo';

/**
 * Generated class for the CadastrarCargoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-cargo',
  templateUrl: 'cadastro-cargo.html',
})
export class CadastroCargoPage {
  private cargo: Cargo;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private provedor: CargosProvider,
    ) {
      let id = this.navParams.data.id;
      if (id != null){// editar
        this.cargo = this.provedor.listarPorId(id);
        console.log(this.cargo);
      } else {//novo
        this.cargo = new Cargo();
      }
      console.log(this.cargo);
    }

  salvar() {
  
    console.log(this.cargo);
    console.log(this.provedor.salvar(this.cargo));
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

}
