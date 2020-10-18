const { Inhibitor } = require('discord-akairo');
const userdata = require("../models/users.js");
class userDetecter extends Inhibitor {
    constructor() {
        super('userDetecter', {
            reason: 'retry.',
            type: 'all',
            priority: 1
        })
    }

exec(message) {
  if (message.guild === null) return;
  if (message.author.bot) return;
  var auth = message.author;
  userdata.findOne({
    _id: auth.id
  }, async (err, res) => {
  //  console.log("finding one "+ res);
    if (!res) {
      const Db = new userdata({
        _id: auth.id,
        username: auth.username,
        tag: auth.tag,
        vip: false,
        premium: false,
        options: {
          suffix: "san",
          fastRead: false,
          theme: null,
        },
        currency: 0,
        level: 1,
        exp: 0,
        stories: ["0", "1"]}
      );
      await Db.save().then(r => {
      console.log("new people!")
      })
    } else {return;}
  })
    }
}

module.exports = userDetecter;
