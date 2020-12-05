
module.exports.index = function (app, req, res) {
    res.render('index');
};

module.exports.chatbot = function (app, req, res) {
    res.render('chatbot');
};

module.exports.carrinho = function (app, req, res) {
    res.render('carrinho');
};

module.exports.callAssistant = function (app, req, res) {

    const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
    const { IamAuthenticator } = require('ibm-watson/auth');
    

    var texto = req.body.text;
    var languageDetected;
    var textTranslated;

    const languageTranslator = new LanguageTranslatorV3({
      version: '2018-05-01',
      authenticator: new IamAuthenticator({
        apikey: 'DZv8N3_mMnM8UF_mAyfk2-0WCy68fTGdaLiua2WEsxOD',
      }),
      serviceUrl: 'https://api.us-south.language-translator.watson.cloud.ibm.com/instances/2878c411-e3a1-4dc8-8375-4f27acd33565',
    });
    
    const identifyParams = {
        text: texto
    };


    const translateParams = {
        text: texto,
        modelId: 'en-pt',
     };
          
        languageTranslator.translate(translateParams)
            .then(translationResult => {
              //console.log(JSON.stringify(translationResult, null, 2));
              textTranslated = translationResult.result.translations[0].translation;
              console.log("maooooooi:"+textTranslated);

              const ibmWatson = require('../lib/ibmWatsonCredentials');

              //recupera mensagem de texto e contexto da conversa
              var { text, contextDialog } = req.body;
              text = textTranslated;
              context = JSON.parse(contextDialog);
      
              
              // constroi json para envio dos dados ao serviço
          
              const params = {
                  input: { text },
                  workspaceId: '2b1863b7-816a-4d5f-b9b8-7b212ce3d1cc',
                  context
              };
              //envia os dados ao serviço e retorna mensagem 
              ibmWatson.assistant.message(
                  params,
                  function(err, response){
                      if(err) res.json({ status: 'ERRO', data: err.toString() });
                      else res.json({ status:'OK', data: response });
                  }
              );




        })
            .catch(err => {
              console.log('error:', err);
        });
    
   
   








};


module.exports.speechToText = function (app, req, res){
    const fs = require('fs');
    const { IamAuthenticator } = require('ibm-watson/auth');
    const SpeechToTextV1 = require('ibm-watson/speech-to-text/v1');
    var link = req.body.blob;


    var W3CWebSocket = require('websocket').w3cwebsocket;

    var IAM_access_token = 'TquQv7PVuXTZIVNUpgeoj0ku6Cl3UQZqwBeYdrQAaEFD';
    var wsURI = 'wss://api.us-south.speech-to-text.watson.cloud.ibm.com/instances/d59c31de-4682-43cc-9498-f65f564f1d1d/v1/recognize'
    + '?access_token=' + IAM_access_token
  + '&model=es-ES_BroadbandModel';
    //var websocket = new WebSocket(wsURI);

    
    var client = new W3CWebSocket(wsURI, 'echo-protocol');
    
    client.onerror = function() {
        console.log('Connection Error');
    };
    
    client.onopen = function() {
        console.log('WebSocket Client Connected');
       
          if (client.readyState === client.OPEN) {
            var message = {
                'action': 'start',
                'content-type': 'audio/l16;rate=22050'
              };
              client.send(JSON.stringify(message));
          }

    };
    
    client.onclose = function(err) {
        console.log('echo-protocol Client Closed'+err);
    };
    
    client.onmessage = function(e) {
        if (typeof e.data === 'string') {
            console.log("Received: '" + e.data + "'");
        }
    };

    };










    module.exports.produto =  function (app, req, res) {
        res.render('produto');


};

