const fs = require("fs");
module.exports = {
  config:{
	name: "npx12",
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
	if (body.indexOf(" ")==0 || body.indexOf("🕵️‍♀️")==0 || body.indexOf("😡")==0 || body.indexOf(" ")==0) {
		var msg = {
				body: "জা্ঁন্ঁ তু্ঁমি্ঁ এ্ঁত্ঁ রা্ঁগ্ঁ ক্ঁরো্ঁ কে্ঁনো্ঁ 😢😕",
				attachment: fs.createReadStream(__dirname + `/ArYan/jan rag.m4a`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥹", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
                                        }
