const fs = require("fs");
module.exports = {
  config:{
	name: "npx16",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "Fahim", 
	description: "Fun",
	category: "no prefix",
	usages: "",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
	if (body.indexOf(" ")==0 || body.indexOf("🕵️‍♀️")==0 || body.indexOf("🤭")==0 || body.indexOf("🙊")==0) {
		var msg = {
				body: "ও্ঁলে্ঁ বা্ঁবু্ঁটা্ঁ ল্ঁজ্জা্ঁ পা্ঁই্ঁছো্ঁ কি্ঁ দে্ঁখে্ঁ ল্ঁজ্জা্ঁ পা্ঁই্ঁলা্ঁ গো্ঁ 🙈🤭",
				attachment: fs.createReadStream(__dirname + `/ArYan/lojja (1).mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😑", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
                                        }
