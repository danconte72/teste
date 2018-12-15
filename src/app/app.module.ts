import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { UsuariosProvider } from '../providers/usuarios/usuarios';
import { HttpClientModule } from '@angular/common/http';
import { ListaUsuarioPage } from '../pages/lista-usuario/lista-usuario';
import { MensagensProvider } from '../providers/mensagens/mensagens';
import { CadastroMensagensAtendentePage } from '../pages/cadastro-mensagens-atendente/cadastro-mensagens-atendente';
import { ListaMensagensAtendentePage } from '../pages/lista-mensagens-atendente/lista-mensagens-atendente';
import { CadastroMensagensVisitantePage } from '../pages/cadastro-mensagens-visitante/cadastro-mensagens-visitante';
import { ListaMensagensVisitantePage } from '../pages/lista-mensagens-visitante/lista-mensagens-visitante';
import { NoticiaProvider } from '../providers/noticia/noticia';
import { CadastroNoticiaPage } from '../pages/cadastro-noticia/cadastro-noticia';
import { LoginPage } from '../pages/login/login';
import { LoginProvider } from '../providers/login/login';
import { AngularFireModule } from '@angular/fire';
import { FIREBASE_CONFIG } from '../app/app.firebase.config';
import { UploadProvider } from '../providers/upload';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { LocaisProvider } from '../providers/locais/locais';
import { CadastroLocalPage } from '../pages/cadastro-local/cadastro-local';
import { ListaLocalPage } from '../pages/lista-local/lista-local';
import { VisitanteProvider } from '../providers/visitante/visitante';
import { CadastroVisitantePage } from '../pages/cadastro-visitante/cadastro-visitante';
import { ListaVisitantePageModule } from '../pages/lista-visitante/lista-visitante.module';
import { ListaVisitantePage } from '../pages/lista-visitante/lista-visitante';
import { CategoriasProvider } from '../providers/categorias/categorias';
import { CadastroCategoriaPage } from '../pages/cadastro-categoria/cadastro-categoria';
import { CadastroCategoriaPageModule } from '../pages/cadastro-categoria/cadastro-categoria.module';
import { CargosProvider } from '../providers/cargos/cargos';
import { ListaCargoPage } from '../pages/lista-cargo/lista-cargo';
import { CadastroCargoPage } from '../pages/cadastro-cargo/cadastro-cargo';
import { EntorpecenteProvider } from '../providers/entorpecente/entorpecente';
import { CadastroEntorpecentePage } from '../pages/cadastro-entorpecente/cadastro-entorpecente';
import { ListaEntorpecentePage } from '../pages/lista-entorpecente/lista-entorpecente';
import { ListaChatPage } from '../pages/lista-chat/lista-chat';
import { AuditProvider } from '../providers/audit/audit';
import { ListaAuditPage } from '../pages/lista-audit/lista-audit';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroPage,
    ListaUsuarioPage,
    ListaMensagensAtendentePage,
    CadastroMensagensAtendentePage,
    ListaMensagensVisitantePage,
    CadastroMensagensVisitantePage,
    CadastroNoticiaPage,
    LoginPage,
    ListaLocalPage,
    CadastroLocalPage,
    CadastroVisitantePage,
    ListaVisitantePage,
    CadastroCategoriaPage,
    ListaCargoPage,
    CadastroCargoPage,
    ListaEntorpecentePage,
    CadastroEntorpecentePage,
    ListaChatPage,
    ListaAuditPage,
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
    ListaMensagensAtendentePage,
    CadastroMensagensAtendentePage,
    ListaMensagensVisitantePage,
    CadastroMensagensVisitantePage,
    CadastroNoticiaPage,
    LoginPage,
    ListaLocalPage,
    CadastroLocalPage,
    CadastroVisitantePage,
    ListaVisitantePage,
    CadastroCategoriaPage,
    ListaCargoPage,
    CadastroCargoPage,
    ListaEntorpecentePage,
    CadastroEntorpecentePage,
    ListaChatPage,
    ListaAuditPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuariosProvider,
    MensagensProvider,
    NoticiaProvider,
    LoginProvider,
    UploadProvider,
    LocaisProvider,
    VisitanteProvider,
    CategoriasProvider,
    CargosProvider,
    EntorpecenteProvider,
    AuditProvider,
  
  ],
})
export class AppModule {}
