import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroCargoPage } from './cadastro-cargo';

@NgModule({
  declarations: [
    CadastroCargoPage
  ],
  imports: [
    IonicPageModule.forChild(CadastroCargoPage),
  ],
})
export class CadastroCargoPageModule {}