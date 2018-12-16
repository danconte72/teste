import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaAuditPage } from './lista-audit';

@NgModule({
  declarations: [
    ListaAuditPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaAuditPage),
  ],
})
export class ListaAuditPageModule {}