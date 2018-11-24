import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoticiaProvider } from '../../providers/noticia/noticia';
import { Noticia } from '../../models/noticia';
import { UploadProvider } from '../../providers/upload';

/**
 * Generated class for the CadastroNoticiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-noticia',
  templateUrl: 'cadastro-noticia.html',
})
export class CadastroNoticiaPage {

  files:Array<any>;
  images = [];

private noticia : Noticia;
  constructor(
    public navCtrl:NavController,
      public navParams: NavParams,
      private provedor: NoticiaProvider,
      private uploadProvider:UploadProvider,
      ) {

        this.noticia = new Noticia();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroNoticiaPage');
  }


  detectFiles(event) {
    let fileList: FileList = event.target.files;
    let reader = new FileReader();
    reader.onloadend= (e) => {
      this.images = [reader.result];
      this.files = Array.from(event.target.files);
      this.uploadProvider.create(this.files[0])
      .then(
        data=>{
          this.noticia["imagem"]=data;
          console.log (this.noticia);
        }
      );
    }
    reader.readAsDataURL(fileList.item(0));  
  }

  removeFile() {
    this.images.pop();
    this.files.pop();
  }

}
