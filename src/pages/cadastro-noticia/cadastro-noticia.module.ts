import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroNoticiaPage } from './cadastro-noticia';
import { UploadProvider } from '../../providers/upload';
import { NoticiaProvider } from '../../providers/noticia/noticia';

@NgModule({
  declarations: [
    CadastroNoticiaPage,
  ],
  providers:[
    UploadProvider,
    NoticiaProvider
 ],
  imports: [
    IonicPageModule.forChild(CadastroNoticiaPage),
  ],
})
export class CadastroNoticiaPageModule {}
