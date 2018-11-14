import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaUsuarioPage } from './lista-usuario';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';

@NgModule({
  declarations: [
    ListaUsuarioPage,
  ],
  providers: [
    UsuariosProvider
  ],
  imports: [
    IonicPageModule.forChild(ListaUsuarioPage),
  ],
})
export class ListaUsuarioPageModule {}
