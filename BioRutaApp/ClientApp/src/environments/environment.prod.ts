export const environment = {
  production: true
};

const CONTROLLER = 'https://webapibioruta.azurewebsites.net/';

const USER_CONTROLLER = CONTROLLER + 'User/';
const ROLE_CONTROLLER = CONTROLLER + 'Role/';

export const Controllers = {
  User: {
    SignIn: USER_CONTROLLER + 'SignIn',
    CreateUser: USER_CONTROLLER + 'CreateUser',
    CreateClient: USER_CONTROLLER + 'CreateClient',
    GetInfo: USER_CONTROLLER + 'GetUserInfo',
    GetUsers: USER_CONTROLLER + 'GetUsers',
    GetUserById: USER_CONTROLLER + 'GetUserById',
    DeleteUser: USER_CONTROLLER + 'DeleteUser',
    Update: USER_CONTROLLER + 'UpdateUser',
  },
  Role: {
    GetRoles: ROLE_CONTROLLER + 'GetRoles'
  }
}
