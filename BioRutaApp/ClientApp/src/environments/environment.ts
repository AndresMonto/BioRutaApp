export const environment = {
  production: false
};

const USER_CONTROLLER  = 'http://localhost:30635' + '/api/User/';

export const Controllers = {
  User:{
      SignIn:  USER_CONTROLLER + 'SignIn',
      Create:  USER_CONTROLLER + 'CreateUser',
      GetInfo:  USER_CONTROLLER + 'GetUserInfo',
      GetUsers:  USER_CONTROLLER + 'GetUsers',
      DeleteUser:  USER_CONTROLLER + 'DeleteUser',
  }
}
