export const environment = {
  production: true
};

const USER_CONTROLLER  = 'api/User/';

export const Controllers = {
  User:{
      SignIn:  USER_CONTROLLER + 'SignIn',
      Create:  USER_CONTROLLER + 'CreateUser',
      GetInfo:  USER_CONTROLLER + 'GetUserInfo',
  }
}
