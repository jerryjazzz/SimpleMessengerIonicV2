import {Facebook} from 'ionic-native';


export class FacebookLogin {
  static login(successCallback, errorCallback) {
    Facebook.login(['user_friends']).then(response => {
      successCallback(response.authResponse);
    }, error => {
      errorCallback(error);
    })
  }

  static getFriends(user, successCallback) {
    //Facebook.api('me/friends?access_token=' + user.token, []).then(response => {
    //this line mock a test user from facebook
    Facebook.api('me/friends?access_token=EAAB9DDGv50YBAKO8ZBcSpcZBM3W2nq7KjJTVjZCGcuvw1diNgS8i8WxyMDbNLn5pYgmOmFShUTzqGBMN5UdBBDcH7Rmyu7iZCWTZCl1KFdoaRlZCwI9jcilTmYa2blgPmQbLgZBfqa48zRJ0hOybgCPmPUc9BILVfiRU6w4UC3jcNZBS1n6ZCskal', []).then(response => {
     let friends = response.data;
     
     successCallback(friends); 
    });
  }
}