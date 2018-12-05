import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaMensagensAtendentePage } from './lista-mensagens-atendente';

@NgModule({
  declarations: [
    ListaMensagensAtendentePage,
  ],
  imports: [
    IonicPageModule.forChild(ListaMensagensAtendentePage),
  ],
})
export class ListaMensagensAtendentePageModule {}
