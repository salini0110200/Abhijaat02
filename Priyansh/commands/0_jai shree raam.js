const fs = require("fs");
module.exports.config = {
  name: "Shri ram",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "ABHISHEK", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("jay shri ram") ||
     react.includes("jay siya ram") || react.includes("JAY SHRI RAM") || react.includes("jay mahakal") ||
react.includes("ram ram") ||
react.includes("Jay shri ram")) {
    var msg = {
        body: `【  🚩 जय श्री राम 🚩

राम नाम का जो सहारा लेता है,
वो जीवन में कभी हार नहीं मानता।
मर्यादा, शक्ति और धर्म का प्रतीक –
श्रीराम हर दिल में बसते हैं 🙏💫

🌸 राम के नाम से दिन की शुरुआत करो,
संकट खुद दूर हो जाएंगे रास्ते से।

✨ राम राम सत्य है,
राम में शक्ति है,
राम ही जीवन का सार है। ✨

— NK EDITOR ❤️

  】`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙏", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

    }
