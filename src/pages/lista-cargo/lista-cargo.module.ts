import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaCargoPage } from './lista-cargo';

@NgModule({
  declarations: [
    ListaCargoPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaCargoPage),
  ],
})
export class ListaCargoPageModule {}
