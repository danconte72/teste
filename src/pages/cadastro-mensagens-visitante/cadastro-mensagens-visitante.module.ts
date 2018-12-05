import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroMensagensVisitantePage } from './cadastro-mensagens-visitante';

@NgModule({
  declarations: [
    CadastroMensagensVisitantePage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroMensagensVisitantePage),
  ],
})
export class CadastroMensagensVisitantePageModule {}
