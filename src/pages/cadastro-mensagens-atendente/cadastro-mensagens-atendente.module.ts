import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroMensagensAtendentePage } from './cadastro-mensagens-atendente';
import { MensagensProvider } from '../../providers/mensagens/mensagens';

@NgModule({
  declarations: [
    CadastroMensagensAtendentePage,
  ],
  providers: [
    MensagensProvider
  ],
  imports: [
    IonicPageModule.forChild(CadastroMensagensAtendentePage),
  ],
})
export class CadastroMensagensAtendentePageModule {}
