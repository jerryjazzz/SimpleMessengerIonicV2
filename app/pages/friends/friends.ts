import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Fire } from '../../util/fire';
import { FacebookLogin } from '../../util/facebook-login';

@Component({
  templateUrl: 'build/pages/friends/friends.html',
})
export class FriendsPage {

  friends: any = []

  constructor(private navCtrl: NavController, private fire: Fire) {
    this.initPage();
  }

  private initPage() {
    FacebookLogin.getFriends(this.fire.user, friends => {
      this.friends = friends;
    });
  }
}
