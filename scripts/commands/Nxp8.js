const fs = require("fs");
module.exports = {
  config:{
	name: "npx19",
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
	if (body.indexOf(" ")==0 || body.indexOf("🕵️‍♀️")==0 || body.indexOf("😻")==0 || body.indexOf(" ")==0) {
		var msg = {
				body: "ওৃঁমা্ঁ তুঁমি্ঁ আৃঁমা্ঁরৃঁ উ্ঁপৃঁর্ঁ ক্রাৃঁশ্ঁ খেৃঁয়ে্ঁছোৃঁ না্ঁকিৃঁ 🤭🫠",
				attachment: fs.createReadStream(__dirname + `/ArYan/crash.m4a`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😒", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
}
