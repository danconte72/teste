import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaMensagensVisitantePage } from './lista-mensagens-visitante';

@NgModule({
  declarations: [
    ListaMensagensVisitantePage,
  ],
  imports: [
    IonicPageModule.forChild(ListaMensagensVisitantePage),
  ],
})
export class ListaMensagensVisitantePageModule {}
