import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroLocalPage } from './cadastro-local';
import { LocaisProvider } from '../../providers/locais/locais';

@NgModule({
  declarations: [
    CadastroLocalPage,
  ],
  providers: [
    LocaisProvider,
  ],
  imports: [
    IonicPageModule.forChild(CadastroLocalPage),
  ],
})
export class CadastroLocalPageModule {}
