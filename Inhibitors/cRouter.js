const { Inhibitor } = require('discord-akairo');
//const userdata = require("../models/users.js");
class cRouter extends Inhibitor {
    constructor() {
        super('cRouter', {
            reason: 'Doesn\'t have enough perms!',
            type: 'post',
            priority: 2
        })
    }
async exec(message, command) {
    if (message.guild === null) return;
    console.log('matching : ' + command.categoryID)
var auth = message.author;
switch(command.categoryID) {

  case "bot_Owner":
  console.log("bowner=====")
  console.log(auth.id == 328294624957300737)
  if (auth.id !== '328294624957300737') return command.categoryID;
  break;

  case "server_Owner":
  console.log("Sowner=====")
  if (auth.id !== message.guild.ownerID) return command.categoryID;
  break;

  default:
  console.log("default=====")
  console.log("A")
  break;

}





    }
}

module.exports = cRouter;
