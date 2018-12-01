import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListaUsuarioPage } from '../pages/lista-usuario/lista-usuario';
import { ListPage } from '../pages/list/list';
import {CadastroMensagensPage} from '../pages/cadastro-mensagens/cadastro-mensagens';
import { ListaMensagensPage } from '../pages/lista-mensagens/lista-mensagens';
import { ListaMensagens2Page } from '../pages/lista-mensagens2/lista-mensagens2';
import { CadastroPage} from '../pages/cadastro/cadastro';
import { CadastroNoticiaPage} from '../pages/cadastro-noticia/cadastro-noticia';
import { LoginPage } from '../pages/login/login';
import { ListaLocalPage } from '../pages/lista-local/lista-local';
import { CadastroVisitantePage } from '../pages/cadastro-visitante/cadastro-visitante';
import { ListaVisitantePage } from '../pages/lista-visitante/lista-visitante';
import { ListaCargoPage } from '../pages/lista-cargo/lista-cargo';
import { ListaEntorpecentePage } from '../pages/lista-entorpecente/lista-entorpecente';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Listar Mensagens', component: ListaMensagensPage},
      { title: 'Listar Mensagens2', component: ListaMensagens2Page},
      { title: 'Usuários', component: ListaUsuarioPage },
      { title: 'List', component: ListPage },
      { title: 'Local', component: ListaLocalPage },
      { title: 'Visitantes', component: ListaVisitantePage },
      { title: 'Cargos', component: ListaCargoPage },
      { title: 'Entorpecentes', component: ListaEntorpecentePage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
