const SpeechToTextV1 = require('ibm-watson/speech-to-text/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const speechToText = new SpeechToTextV1({
  authenticator: new IamAuthenticator({
    apikey: 'TquQv7PVuXTZIVNUpgeoj0ku6Cl3UQZqwBeYdrQAaEFD',
  }),
  serviceUrl: 'https://api.us-south.speech-to-text.watson.cloud.ibm.com/instances/d59c31de-4682-43cc-9498-f65f564f1d1d',
});