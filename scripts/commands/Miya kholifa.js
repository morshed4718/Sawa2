const fs = require("fs");
module.exports.config = {
	name: "miyakholifa",
    version: "1.1.1",
prefix: true,
	permssion: 0,
	credits: "John Lester", 
	description: "Just Respond",
	category: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("miakholifa") || react.includes("bossk") || react.includes("karbot")) {
		var msg = {
				body: "🥰আসসালামুআলাইকুম🥰🥰!!আমি 𝗠𝗼𝗿𝘀𝗵𝗘𝗱 এর ভদ্র বট!! কোন অভিযোগ অথবা হেল্প এর জন্য আমার বস MorshEd কে নক করতে পারেন FB LINK :https://www.facebook.com/profile.php?id=100075133524968&mibextid=ZbWKwL🤍",
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
