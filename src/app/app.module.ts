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
import { NoticiaProvider } from '../providers/noticia/noticia';
import { CadastroNoticiaPage } from '../pages/cadastro-noticia/cadastro-noticia';
import { LoginPage } from '../pages/login/login';
import { LoginProvider } from '../providers/login/login';
import { AngularFireModule } from '@angular/fire';
import { FIREBASE_CONFIG } from '../app/app.firebase.config';
import { UploadProvider } from '../providers/upload';
import { AngularFireStorageModule } from '@angular/fire/storage';


import { VisitanteProvider } from '../providers/visitante/visitante';
import { CadastroVisitantePage } from '../pages/cadastro-visitante/cadastro-visitante';
import { ListaVisitantePageModule } from '../pages/lista-visitante/lista-visitante.module';
import { ListaVisitantePage } from '../pages/lista-visitante/lista-visitante';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroPage,
    ListaUsuarioPage,
    ListPage,
    CadastroNoticiaPage,
    LoginPage,
    CadastroVisitantePage,
    ListaVisitantePage,
  ],
  imports: [ 

    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireStorageModule,
    HttpClientModule, 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroPage,
    ListaUsuarioPage,
    ListPage,
    CadastroNoticiaPage,
    LoginPage,
    CadastroVisitantePage,
    ListaVisitantePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuariosProvider,
    NoticiaProvider,
    LoginProvider,
    UploadProvider,
    VisitanteProvider
  ]
})
export class AppModule {}
