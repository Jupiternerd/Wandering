const { Command } = require('discord-akairo');
class hook extends Command {
    constructor() {
        super('hook', {
            aliases: ['hook'],
            category: 'bot_Owner',
            ownerOnly: true,
            ratelimit: 1,
            description: "asdada."
        });
    }

async exec(message) {

  await message.channel.createWebhook('Miko', {
  	avatar: 'https:\/\/imgur.com\/a\/2Xjxwsg',
  })
		const webhooks = await message.channel.fetchWebhooks();
    const webhook = webhooks.find(w => w.name == "Miko");

    console.log(webhook)
    webhook.send('test')



  //const webhookClient = new Discord.WebhookClient(wC.ID, config.webhookToken);



}


}
module.exports = hook;
