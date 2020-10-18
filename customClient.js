const { AkairoClient, CommandHandler, InhibitorHandler, ListenerHandler } = require('discord-akairo');
require("dotenv").config();
const botdbs = require("./models/botdatas.js");
const mongoose = require("mongoose")
class CustomClient extends AkairoClient {
  constructor () {
    super({
        ownerID: '328294624957300737',
        blockBots: true
    }, {
        disableEveryone: true
    });
//------------------Command Handler----------------------
this.commandHandler = new CommandHandler(this, {
      directory: './Commands/',
      prefix: '+',
      handleEdits: true,
      commandUtil: true, //Kind of drain memory but it logs args for 5 mins at a time. DISABLED FOR NOW
      defaultCooldown: 5000, //5 seconds
      argumentDefaults: {
        prompt: {
            timeout: '🚫 • Don\'t you time yourself on tests? Prompt cancelled due to inactivity.',
            ended: '🚫 • Prompt ended.',
            cancel: '🚫 • Fine, prompts cancelled.',
            retries: 4,
            time: 10000
        }
    }
        });



  //Addes Settings Names into the type of argument IDs. Just like commandID, Csettings is now available.

//------------------Inhibitor Handler--------------------
this.inhibitorHandler = new InhibitorHandler(this, {
    directory: './Inhibitors/'
});

//------------------Listener Handler---------------------
this.listenerHandler = new ListenerHandler(this, {
    directory: './Listeners/'
});
/*this.listenerHandler.setEmitters({
    process: proccess,

});

*/
//------------------Setting Emitters---------------------
this.listenerHandler.setEmitters({
    commandHandler: this.commandHandler,
    inhibitorHandler: this.inhibitorHandler,
    listenerHandler: this.listenerHandler,


});
//-------------------CUSSTOM WIP------------------------

/*
const CustomHandler = require('./CustomHandler');
this.customHandler = new CustomHandler(this, {
    directory: './Customs/'
});

this.customHandler.loadAll();
                                                 */

//-----------------Loading Handlers----------------------

console.log(process.env.uri)
mongoose.connect(process.env.uri,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
.then(() => console.log( 'Database Connected' ))
.catch(err => console.log( err ));


/*const b = botdbs.find({})
console.log(b)*/
/*RankStrut.find({}, function(err, docs) {

    if (!err) {
        console.log(docs);
    }
    else {
        console.log(err)
        throw err;
    }
});*/


this.commandHandler.loadAll()
this.commandHandler.useInhibitorHandler(this.inhibitorHandler);
this.inhibitorHandler.loadAll();
this.commandHandler.useListenerHandler(this.listenerHandler);
this.listenerHandler.loadAll();
}

  login(token) {
      super.login(process.env.token)
}
}

//-------------------------------------------------------
module.exports = CustomClient;
