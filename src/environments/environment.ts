const apiEndpoint = 'http://localhost:8880';
export const environment = {
  production: false,
  subscription: apiEndpoint + '/subscription',
  unsubscription: apiEndpoint + '/subscription/unsubscription',
  subscriptionActivation: apiEndpoint + '/subscription/activation',
  login: apiEndpoint + '/auth/oauth/token',
  register: apiEndpoint + '/account/',
  course: apiEndpoint + '/course-service/',
  topic: apiEndpoint + '/course-service/topic',
  video: apiEndpoint + '/video-service/video',
  account: apiEndpoint + '/account/',
  changePassword: apiEndpoint + '/auth',
  message: apiEndpoint + '/account/message',
  quiz: apiEndpoint + '/quiz/',
  school: apiEndpoint + '/quiz/school',
  question: apiEndpoint + '/quiz/question'
};
