import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Login } from '../../models/login';
import { LoginProvider } from '../../providers/login/login';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private login : Login;
  constructor(
    public navCtrl:NavController,
      public navParams: NavParams,
      private provedor:LoginProvider

      ) {

        //his.login = new Login();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}

