const { Listener } = require('discord-akairo');

class custom_Error extends Listener {
    constructor() {
        super('custom_Error', {
            emitter: 'client',
            event: 'custom_Error',

        });
    }

    exec(message, error) {
        message.channel.send(error)
    }
}

module.exports = custom_Error;
