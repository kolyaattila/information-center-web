import { writeFile } from 'fs';

require('dotenv').config();

const apiEndpoint = process.env.API_ENDPOINT || 'http://localhost:8880';
const productionMode = process.env.PRODUCTION_MODE || 'false';
const ngEnvironmentFile = process.env.ENVIRONMENT_FILE || 'environment.ts';

const targetPath = `./src/environments/${ngEnvironmentFile}`;

const envConfigFile = `const apiEndpoint = '${apiEndpoint}';
export const environment = {
  production: ${productionMode},
  subscription: apiEndpoint + '/subscription',
};
`;

writeFile(targetPath, envConfigFile, (err) => {
  if (err) {
    console.log(err);
  }
});
