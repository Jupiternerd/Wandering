const { Listener } = require('discord-akairo');

class reactionRemoved extends Listener {
    constructor() {
        super('reactionRemoved', {
          emitter: 'client',
          event: 'messageReactionRemove'
        });
    }

  async exec(reaction, user) {
/*
//Will switch to a switch statement later on when I get more channels ready.
let uObj = reaction.message.guild.members.cache.get(user.id)
var logdb = await chanstrut.findOne({ name: "log" });
var log = reaction.message.guild.channels.cache.get(logdb._id)
if (user.bot == true) return;
  log.send(`🛑 • ${user.tag} • Reaction removed! ON \`\`${reaction.message.content}\`\`• MSGID ${reaction.message.id}.`)
*/
  }
}

module.exports = reactionRemoved;
