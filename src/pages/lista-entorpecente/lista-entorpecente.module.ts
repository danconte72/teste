import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaEntorpecentePage } from './lista-entorpecente';
import { EntorpecenteProvider } from '../../providers/entorpecente/entorpecente';


@NgModule({
  declarations: [
    ListaEntorpecentePage,
  ],
  providers: [
    EntorpecenteProvider,
  ],
  imports: [
    IonicPageModule.forChild(ListaEntorpecentePage),
  ],
})
export class ListaEntorpecentePageModule {}



