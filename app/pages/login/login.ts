import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FacebookLogin } from '../../util/facebook-login'

@Component({
  templateUrl: 'build/pages/login/login.html',
})

export class LoginPage {

  constructor(private navCtrl: NavController) {

  }

  onLogin() {
    FacebookLogin.login(response => {
      alert(response);
    }, error => {
      alert(error);
    });
  }
}
