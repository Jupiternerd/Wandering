const { Listener } = require('discord-akairo');
const Discord = require('discord.js')

const botdata = require("../models/botdatas.js");
class ready extends Listener {
    constructor() {
        super('ready', {
          emitter: 'client',
          event: 'ready'
        });
    }

    async exec() {
      async function setPresenceF (client, a, b, c) {
        console.log(c)
        client.user.setPresence({ activity: { name: a,type: b}, status: c })

      }
      botdata.findOne({
        _id: 1
      }, async (err, res) => {
        if (err) console.log(err);
        if (!res) {
          console.log('x')
          const Db = new botdata({
    _id: 1,
    name: "Watarimono",
    discordID: this.client.user.id,
    pause: false,
    inInteract: false,
    status: "dnd",
    type: "LISTENING",
    activity: "music.",
    eventID: null,
    description: "I roll around.",
    prefix: this.client.commandHandler.prefix});
          await Db.save().then(r => {
//this.client.emit('ready')
setPresenceF(this.client, r.activity, r.type, r.status)
})
} else {
        console.log(res)
setPresenceF(this.client, res.activity, res.type, res.status)
}
      })

    await console.log('Bot is Ready.');

}
}

module.exports = ready;
