const { Command } = require('discord-akairo');
class ping extends Command {
    constructor() {
        super('ping', {
            aliases: ['ping'],
            category: 'default',
            ownerOnly: false,
            ratelimit: 1,
            description: "asdada."
        });
    }

async exec(message) {
let botMsg = await message.channel.send("Pinging")
message.channel.send(
"**Server**: `" + (botMsg.createdAt - message.createdAt) + "ms`"
)

message.channel.send(
"**API**: `" + Math.round(this.client.ws.ping) + "ms`"
)
}
}
module.exports = ping;
