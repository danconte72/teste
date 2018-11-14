import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroVisitantePage } from './cadastro-visitante';

@NgModule({
  declarations: [
    CadastroVisitantePage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroVisitantePage),
  ],
})
export class CadastroVisitantePageModule {}
