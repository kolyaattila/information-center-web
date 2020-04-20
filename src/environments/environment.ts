const apiEndpoint = 'http://localhost:8880';
export const environment = {
  production: false,
  subscription: apiEndpoint + '/subscription',
  unsubscription: apiEndpoint + '/subscription/unsubscription',
  subscriptionActivation: apiEndpoint + '/subscription/activation',
  login: apiEndpoint + '/auth/oauth/token',
  register: apiEndpoint + '/account/',
  account: apiEndpoint + '/account/',
  topic: apiEndpoint + 'topic-service/topic',
  changePassword: apiEndpoint + '/auth',
  message: apiEndpoint + '/account/message'
};
