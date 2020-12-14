const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
const { IamAuthenticator } = require('ibm-watson/auth');
    

module.exports.assistant = new LanguageTranslatorV3({
    serviceUrl: 'https://api.us-south.language-translator.watson.cloud.ibm.com/instances/2878c411-e3a1-4dc8-8375-4f27acd33565',
    version: '2018-05-01',
    authenticator: new IamAuthenticator({
        apikey: 'DZv8N3_mMnM8UF_mAyfk2-0WCy68fTGdaLiua2WEsxOD',
      }),
});

    