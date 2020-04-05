const apiEndpoint = 'http://localhost:8880';
export const environment = {
  production: false,
  subscription: apiEndpoint + '/subscription',
  unsubscription: apiEndpoint + '/subscription/unsubscription',
  subscriptionActivation: apiEndpoint + '/subscription/activation',
  login: apiEndpoint + '/auth/oauth/token',
  register: apiEndpoint + '/account/',
  currentAccount: apiEndpoint + "/account/"
};
