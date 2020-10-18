const { Listener } = require('discord-akairo');
const Discord = require('discord.js')
class commandBlocked extends Listener {
    constructor() {
        super('commandBlocked', {
            emitter: 'commandHandler',
            event: 'commandBlocked'
        });
    }

  async exec(message, command, reason) {
  message.channel.send(`${message.author}, Uh o. The command \`\`${command}\`\` couldn\'t be ran!\n[ **${reason}** ]`)
    }
}

module.exports = commandBlocked;
