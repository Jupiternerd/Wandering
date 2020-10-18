const { Command } = require('discord-akairo');
class reload extends Command {
    constructor() {
        super('reload', {
            aliases: ['reload', 'r'],
            category: 'bot_Owner',
            ownerOnly: true,
            ratelimit: 1,
            description: "Reload Command."
        });
    }
*args () {
  const reloadType = yield { type: ["inhibitor", "listener", "commandAlias"], prompt: {
    start: message => `✋ • ${message.author}, What do type you want to reload?\nType it here! \`\`"inhibitor", "listener", "commandAlias\`\` • \`\`cancel\`\` to cancel.`,
    retry: message => `♻️ • ${message.author}, I don\'t think I can find that type..\nTry typing it again here! \`\`"inhibitor", "listener", "commandAlias"\`\` • \`\`cancel\`\` to cancel.`,
    retries: 5,
    Cooldown: 10000
  }};
  const reloadID = yield { type: reloadType, prompt:
  {
  start: message => `✋ • ${message.author}, What is the ID you want to reload? \nType it again! • \`\`cancel\`\` to cancel.`,
  retry: message => `♻️ • ${message.author}, I don\'t think I can find that ID..\nTry typing it again here! • \`\`cancel\`\` to cancel.`,
  retries: 5,
  Cooldown: 10000
}
};


  // When finished.
  return { reloadType, reloadID };

}

    async exec(message, args) {
      /*
      if (!args.commandID) return message.reply('Mention one of the commands!')
        this.handler.reload(args.commandID);
        return message.reply('reloading this command: ' + args.commandID);
        */
    switch (args.reloadType) {
    case "inhibitor":
    this.client.inhibitorHandler.reload(args.reloadID)
    break;
    case "listener":
    this.client.listenerHandler.reload(args.reloadID)
    break;
    case "commandAlias":
    this.handler.reload(args.reloadID)
    break;


    }

    message.channel.send(`Done! Reloaded \`\`${args.reloadID}\`\`!`)

    }
}
module.exports = reload;
