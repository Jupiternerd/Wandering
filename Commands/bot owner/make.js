/*
Author: Shokk
Purpose: Make.js
*/


const { Command, AkairoClient} = require('discord-akairo');
const characterdata = require("../../models/characters.js");
const backgrounddata = require("../../models/backgrounds.js");
const storydata = require("../../models/stories.js");
const fs = require('fs');
const https = require('https');
const request = require(`request`);
const readline = require('readline');
class make extends Command {
    constructor() {
        super('make', {
            aliases: ['make'],
            category: 'bot_Owner',
            ownerOnly: true,
            ratelimit: 1,
            description: "make stuff"
        });
    }
    *args () {
      const typeOfWork = yield {type: ["story", "character", "background"], match: "content", prompt: {
        start: message => `Enter the type of the work.`,
        retry: message => `Didn\'t get that! Try again.`,
        retries: 5,
        Cooldown: 10000
  }};
      const nameOfWork = yield {type: "uppercase", match: "content", prompt: {
        start: message => `Enter the name of the work.`,
        retry: message => `Didn\'t get that! Try again.`,
        retries: 5,
        Cooldown: 10000
      }
    };


      return {typeOfWork , nameOfWork};
    };
async exec(message, args) {
const client = this.client;
const channel = message.channel;
var typeOfWork = args.typeOfWork.toUpperCase();




async function readAndParse(parsedName, doc, data) {

  //let raw = fs.readFileSync(`./data/downloaded_${typeOfWork}/${parsedName}.json`);
  //console.log(data)

  var parsedJSON = JSON.parse(data);
  var docID;
  var getTopDoc = await doc.find().sort({_id: 'descending'}).limit(1);
  //console.log(getTopDoc + "sd")
  if (!getTopDoc[0]) {docID = 0} else {docID = getTopDoc[0]._id + 1;}
console.log(docID + " DOC ID")
//  console.log(getTopDoc + "THIS IS topDOC")
//  console.log(getTopDoc[0]._id + "getTopDocID")

console.log(parsedJSON.authors)
var Db;


switch(typeOfWork) {

case "STORY":
Db = new doc({
  _id: docID,
  name: parsedJSON.name,
  set: parsedJSON.set,
  description: parsedJSON.description,
  authors: parsedJSON.authors,
  cost: parsedJSON.cost,
  likes: 0,
  played: 0,
  characters: parsedJSON.characters,
  main: parsedJSON.main
});
break;


case "CHARACTER":

Db = new doc({
  _id: docID,
  name: parsedJSON.name,
  set: parsedJSON.set,
  description: parsedJSON.description,
  authors: parsedJSON.authors,
  cost: parsedJSON.cost,
  g_neutral: parsedJSON.g_neutral,
  g_happy: parsedJSON.g_happy,
  g_annoyed: parsedJSON.g_annoyed,
  g_angry: parsedJSON.g_angry,
  g_sad: parsedJSON.g_sad,
  g_surprised: parsedJSON.g_srprised,
  g_blush: parsedJSON.g_blush,
  gender: parsedJSON.gender,
  so: parsedJSON.so,
  bloodtype: parsedJSON.bloodtype,
  birthday: parsedJSON.birthday,
  likes: 0
});
break;

case "BACKGROUND":
Db = new doc({
  _id: docID,
  name: parsedJSON.name,
  set: parsedJSON.set,
  description: parsedJSON.description,
  authors: parsedJSON.authors,
  cost: parsedJSON.cost,
  g_normal: parsedJSON.g_normal,
  g_night: parsedJSON.g_normal,
  g_noon: parsedJSON.g_noon,
  g_afternoon : parsedJSON.g_afternoon,
  likes: 0
});
break;


}



  doc.findOne({
    _id: docID
  }, async (err, res) => {
  //  console.log("finding one "+ res);
    if (!res) {
//paste
      await Db.save().then(r => {
      console.log("asdsadsada")
      })
    } else {return;}
  })
/*
let i = 0;
let f = 4; //0 = name, 1 = author, 2 = set, 3 = like 4 = description
while(i > f) {


  i++
}
*/



}


  async function download(url, parsedName, doc){

    var request = https.get(url, async function(response) {

        var data = '';

        function read() {
            var chunk;
            while ( chunk = response.read() ) {
                data += chunk;
            }
        }

       response.on('readable', read)




       response.on('end', function () {


       fs.writeFile(`./data/downloaded_${typeOfWork}/${parsedName}.json`, data, (err) => {

    if (err) throw err;

    console.log(' saved!');
    readAndParse(parsedName, doc, data)
});

        });

    });

/*
    var wStream;
    await request.get(url)
          .pipe(wStream = fs.createWriteStream(`./data/downloaded_stories/${parsedName}+${message.author.discriminator}.txt`));
          console.log("doneee")
          wStream.end()
     readAndParse(parsedName)
     */
  }


var parsedName = args.nameOfWork.replace(/ /g,"_").toUpperCase(); //Changes the inputted nameOfWork to Uppercase and "_" in between.


/*
Below finds parsedName in the db. If its not found it continues. If it does find it it will prompt user to redo the command.

*/

const filter = m => m.attachments.first() && message.author === m.author;
var doc;
var Db;
/*
switch statement here!!!
*/

switch(typeOfWork) {
  case "STORY":
  doc = await storydata

break;
  case "CHARACTER":
  doc = await characterdata

break;

  case "BACKGROUND":
  doc = await backgrounddata

break;
}
var docCheck = doc.findOne({ name: parsedName });
console.log(docCheck)
if (!docCheck == null) return client.emit("custom_Error", message, `${docCheck.name} for ${typeOfWork} already exists!`);

channel.send("pls send")
channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
		.then(async collected => {
    var collectedFile = collected.first().attachments.first()
  //  console.log(collectedFile.filename)
    //  console.log(collectedFile.first())
      if(collectedFile.name.endsWith(`json`)){//Download only txt
        console.log(collectedFile.url + "json ")
          await download(collectedFile.url, parsedName, doc)



      }
		})










}


}
module.exports = make;
