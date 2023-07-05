export const environment = {
  production: false
};

const CONTROLLER = 'http://localhost:30635/api/';

const USER_CONTROLLER = CONTROLLER + 'User/';
const ROLE_CONTROLLER = CONTROLLER + 'Role/';
const PRODUCT_CONTROLLER = CONTROLLER + 'Product/';
const COLLECT_CONTROLLER = CONTROLLER + 'Collect/';

export const Controllers = {
  User: {
    SignIn: USER_CONTROLLER + 'SignIn',
    CreateUser: USER_CONTROLLER + 'CreateUser',
    CreateClient: USER_CONTROLLER + 'CreateClient',
    GetInfo: USER_CONTROLLER + 'GetUserInfo',
    GetUsers: USER_CONTROLLER + 'GetUsers',
    GetUserById: USER_CONTROLLER + 'GetUserById',
    DeleteUser: USER_CONTROLLER + 'DeleteUser',
    UpdateUser: USER_CONTROLLER + 'UpdateUser',
  },
  Role: {
    GetRoles: ROLE_CONTROLLER + 'GetRoles'
  },
  Products: {
    GetProducts: PRODUCT_CONTROLLER + 'GetProducts',
    DeleteProduct: PRODUCT_CONTROLLER + 'DeleteProduct',
    CreateProduct: PRODUCT_CONTROLLER + 'CreateProduct',
    UpdateProduct: PRODUCT_CONTROLLER + 'UpdateProduct',
    GetProductById: PRODUCT_CONTROLLER + 'GetProductById',
  },
  Collects: {
    GetCollects: COLLECT_CONTROLLER + 'GetCollects',
    GetCollectsDate: COLLECT_CONTROLLER + 'GetCollectsDate',
    DeleteCollect: COLLECT_CONTROLLER + 'DeleteCollect',
    CreateCollect: COLLECT_CONTROLLER + 'CreateCollect',
    UpdateCollect: COLLECT_CONTROLLER + 'UpdateCollect',
    GetCollectById: COLLECT_CONTROLLER + 'GetCollectById',
  }
}
