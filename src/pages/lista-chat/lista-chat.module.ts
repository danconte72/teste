import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaChatPage } from './lista-chat';
import { MensagensProvider } from '../../providers/mensagens/mensagens';

@NgModule({
  declarations: [
    ListaChatPage,
  ],
  providers:[
    MensagensProvider,
  ],
  imports: [
    IonicPageModule.forChild(ListaChatPage),
  ],
})
export class ListaChatPageModule {}
