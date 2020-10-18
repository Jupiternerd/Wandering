const { Listener } = require('discord-akairo');
class reactionAdded extends Listener {
    constructor() {
        super('reactionAdded', {
          emitter: 'client',
          event: 'messageReactionAdd'
        });
    }

  async exec(reaction, user) {
/*
//Will switch to a switch statement later on when I get more channels ready.
let uObj = reaction.message.guild.members.cache.get(user.id)
var logdb = await chanstrut.findOne({ name: "log" });
var log = reaction.message.guild.channels.cache.get(logdb._id)
if (user.bot == true) return;
log.send(`🟢 • ${user.tag} • Reaction added! ON \`\`${reaction.message.content}\`\`• MSGID ${reaction.message.id}.`)
*/
}

}

module.exports = reactionAdded;
