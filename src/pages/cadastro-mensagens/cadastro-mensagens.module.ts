import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroMensagensPage } from './cadastro-mensagens';
import { MensagensProvider } from '../../providers/mensagens/mensagens';

@NgModule({
  declarations: [
    CadastroMensagensPage,
  ],
  providers: [
    MensagensProvider
  ],
  imports: [
    IonicPageModule.forChild(CadastroMensagensPage),
  ],
})
export class CadastroMensagensPageModule {}
