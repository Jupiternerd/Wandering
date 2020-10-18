
const { Listener } = require('discord-akairo');
const Discord = require('discord.js')
const serverdata = require("../models/servers.js");
class botJoins extends Listener {
    constructor() {
        super('guildCreate', {
            emitter: 'client',
            event: 'guildCreate'
        });
    }
    async exec(guild) {
      console.log(guild)

      serverdata.findOne({
        _id: guild.id
      }, async (err, res) => {
        if (err) console.log(err);
        if (!res) {
          console.log('New Guild!')
          const Db = new serverdata({
            _id: guild.id,
            name: guild.name,
            ownerID: guild.ownerID,
            premium: null,
            members: guild.memberCount,
            region: guild.region,
            large: guild.large});
          await Db.save().then(r => {
console.log(r)
})
} else {
        console.log(res)
}
      })

}

}

module.exports = botJoins;
