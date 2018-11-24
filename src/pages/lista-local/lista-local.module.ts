import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaLocalPage } from './lista-local';

@NgModule({
  declarations: [
    ListaLocalPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaLocalPage),
  ],
})
export class ListaLocalPageModule {}
