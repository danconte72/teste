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
import { LocaisProvider } from '../providers/locais/locais';
import { CadastroLocalPage } from '../pages/cadastro-local/cadastro-local';
import { ListaLocalPage } from '../pages/lista-local/lista-local';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroPage,
    ListaUsuarioPage,
    ListPage,
    ListaLocalPage,
    CadastroLocalPage,
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
    ListPage,
    ListaLocalPage,
    CadastroLocalPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuariosProvider,
    LocaisProvider
  ]
})
export class AppModule {}
