import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroPage } from './cadastro';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';

@NgModule({
  declarations: [
    CadastroPage,
  ],
  providers: [
    UsuariosProvider
  ],
  imports: [
    IonicPageModule.forChild(CadastroPage),
  ],
})
export class CadastroPageModule {}
