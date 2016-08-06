import {Injectable} from '@angular/core';

declare var firebase: any;

@Injectable()

export class Fire {
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
      successCallback();
    }, error => {
      errorCallback();
    });
  }
}