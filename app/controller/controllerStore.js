
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
    const ibmWatson = require('../lib/ibmWatsonCredentials');

    //recupera mensagem de texto e contexto da conversa
    var { text, contextDialog } = req.body;
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



};

module.exports.produto =  function (app, req, res) {
    res.render('produto');


};