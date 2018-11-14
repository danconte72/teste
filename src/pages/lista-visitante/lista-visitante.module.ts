import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaVisitantePage } from './lista-visitante';

@NgModule({
  declarations: [
    ListaVisitantePage,
  ],
  imports: [
    IonicPageModule.forChild(ListaVisitantePage),
  ],
})
export class ListaVisitantePageModule {}
