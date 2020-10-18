const { Listener } = require('discord-akairo');
const Discord = require('discord.js')
class commandStarted extends Listener {
    constructor() {
        super('commandStarted', {
            emitter: 'commandHandler',
            event: 'commandStarted'
        });
    }

    async exec(message, command) {


    }
}

module.exports = commandStarted;
