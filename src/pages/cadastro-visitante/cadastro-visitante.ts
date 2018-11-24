import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Visitante } from '../../models/visitante';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { VisitanteProvider } from '../../providers/visitante/visitante';

/**
 * Generated class for the CadastroVisitantePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-visitante',
  templateUrl: 'cadastro-visitante.html',
})
export class CadastroVisitantePage {

  private visitante: Visitante;
  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     private provedor: VisitanteProvider,
     ) {
<<<<<<< HEAD
    this.visitante=new Visitante();
  }
=======
      let id = this.navParams.data.id;
      if (id != null){// editar
        this.visitante = this.provedor.listarPorId(id);
      } else {//novo
        this.visitante = new Visitante();
      }
      console.log(this.visitante);
    }
>>>>>>> 5c440731165b6e7bb44f5f41b4f625e49ac3f9f0

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroVisitantePage');
  }

  salvar(){
    this.provedor.salvar(this.visitante);
    this.navCtrl.pop();
  }
}
