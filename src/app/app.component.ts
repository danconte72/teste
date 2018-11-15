import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
//import { environment } from '../environments/environment';

import { HomePage } from '../pages/home/home';
import { ListaUsuarioPage } from '../pages/lista-usuario/lista-usuario';
import { CadastroPage} from '../pages/cadastro/cadastro';
import { CadastroNoticiaPage} from '../pages/cadastro-noticia/cadastro-noticia';
import { LoginPage } from '../pages/login/login';



import { ListaLocalPage } from '../pages/lista-local/lista-local';
import { CadastroVisitantePage } from '../pages/cadastro-visitante/cadastro-visitante';
import { ListaVisitantePage } from '../pages/lista-visitante/lista-visitante';

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
      { title: 'Usuários', component: ListaUsuarioPage },
      { title: 'Cadastrar Usuários', component: CadastroPage },
      { title: 'Cadastrar uma Noticia', component: CadastroNoticiaPage},
      { title: 'Login', component: LoginPage},
      { title: 'Local', component: ListaLocalPage },
      { title: 'Visitantes', component: ListaVisitantePage },
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
