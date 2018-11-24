import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { UsuariosProvider } from '../providers/usuarios/usuarios';
import { HttpClientModule } from '@angular/common/http';
import { ListaUsuarioPage } from '../pages/lista-usuario/lista-usuario';
import { MensagensProvider } from '../providers/mensagens/mensagens';
import { CadastroMensagensPage } from '../pages/cadastro-mensagens/cadastro-mensagens';
import { ListaMensagensPage } from '../pages/lista-mensagens/lista-mensagens';
import { CadastroMensagens2Page } from '../pages/cadastro-mensagens2/cadastro-mensagens2';
import { ListaMensagens2Page } from '../pages/lista-mensagens2/lista-mensagens2';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroPage,
    ListaUsuarioPage,
    ListaMensagensPage,
    CadastroMensagensPage,
    ListaMensagens2Page,
    CadastroMensagens2Page,
    ListPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule, 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroPage,
    ListaUsuarioPage,
    ListaMensagensPage,
    CadastroMensagensPage,
    ListaMensagens2Page,
    CadastroMensagens2Page,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuariosProvider,
    MensagensProvider
  ]
})
export class AppModule {}
