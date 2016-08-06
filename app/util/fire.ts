import {Injectable} from '@angular/core';

declare var firebase: any;

@Injectable()

export class Fire {
  user: any = {};

  constructor() {
    var config = {
      apiKey: "AIzaSyD8YN9i-M1MIyPFTadaXaqZD1g8u1rMd5Y",
      authDomain: "messenger-539a3.firebaseapp.com",
      databaseURL: "https://messenger-539a3.firebaseio.com",
      storageBucket: "",
    };

    firebase.initializeApp(config);
  }

  login(token: string, successCallback, errorCallback) {
    let credential = firebase.auth.FacebookAuthProvider.credential(token);

    firebase.auth().signInWithCredential(credential).then(response => {
      this.setUser(token, response.providerData[0]);
      successCallback();
    }, error => {
      errorCallback();
    });
  }

  private setUser(token: string, authData: any) {
    this.user.name   = authData.displayName;
    this.user.photo  = authData.photoURL;
    this.user.id     = authData.uid;
    this.user.token  = token;

    this.saveUser();
  }

  private saveUser() {
    firebase.database().ref('users').child(this.user.id).set({
      name: this.user.name,
      photo: this.user.photo
    });
  }
}