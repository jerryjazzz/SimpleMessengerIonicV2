import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FacebookLogin } from '../../util/facebook-login';
import { Fire } from '../../util/fire';

@Component({
  templateUrl: 'build/pages/login/login.html',
})

export class LoginPage {

  constructor(private navCtrl: NavController, private fire: Fire) {

  }

  onLogin() {
    FacebookLogin.login(response => {
      this.fire.login(response.accessToken, () => {
        alert('success');
      }, error => {
        alert('error');
        //alert(error);
      });
    }, error => {
      alert(error);
    });
  }
}
