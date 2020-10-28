const { Command } = require('discord-akairo');
const characterdata = require("../../models/characters.js");
const backgrounddata = require("../../models/backgrounds.js");
const storydata = require("../../models/stories.js");
class story extends Command {
    constructor() {
        super('story', {
            aliases: ['story'],
            category: 'default',
            ownerOnly: false,
            ratelimit: 1,
            description: "asdada."
        });
    }
    *args () {
      const storyID = yield { type: 'integer' , prompt: {
        start: message => `id?`,
        retry: message => `♻️`,
        retries: 5,
        Cooldown: 10000
      }};



      // When finished.
      return {storyID};

    }
async exec(message, args) {

var storyID = args.storyID
//console.log(storyID + " ID")
  var getDoc = await storydata.find({_id: storyID});

  var docMain = getDoc[0].main;
  var charMain = getDoc[0].characters;
  console.log(docMain);



for (var y in charMain) {


  await message.channel.createWebhook(charMain[y].name)
		const webhooks = await message.channel.fetchWebhooks();
    const webhook = webhooks.find(w => w.name == charMain[y].name);

    //console.log(webhook)
    webhook.send(docMain[y].dialogue)
  }
for (var x in docMain) {

//console.log(docMain[x].dialogue)


}

/*getDoc.main.forEach(x => {
  console.log("a")
})*/


/*

  await message.channel.createWebhook('Miko', {
  	avatar: 'https:\/\/imgur.com\/a\/2Xjxwsg',
  })
		const webhooks = await message.channel.fetchWebhooks();
    const webhook = webhooks.find(w => w.name == "Miko");

    console.log(webhook)
    webhook.send('test')

    */
}
}
module.exports = story;
