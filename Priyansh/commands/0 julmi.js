module.exports.config = {
  name: "owner",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "⑅⃝❥»̶̶͓͓͓̽̽̽»̶̶͓͓̽̽̽ℕ𝑲~ʌ̋̋̋̋̋̋̋̋̋̋̋̋̋̋̋̋̋̋𝑬𝑫𝑰𝑻𝑶𝑹~»̶̶͓͓͓̽̽̽⑅⃝✺❀✿＊",
  description: "War In Chatbox",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
  dependencies: {
      "fs-extra": "",
      "axios": ""
  }
}

module.exports.run = async function({ api, args, Users, event}) {
  var mention = Object.keys(event.mentions)[0];

  let name = event.mentions[mention];
  var arraytag = [];
  arraytag.push({id: mention});
  
  // सबसे पहले owner info text भेजें:
  api.sendMessage(
    "🔰𝙊𝙒𝙉𝙀𝙍 𝙄𝙉𝙁𝙊🔰\n\n⑅⃝❥»̶̶͓͓͓̽̽̽»̶̶͓͓̽̽̽ℕ𝑲~ʌ̋̋̋̋̋̋̋̋̋̋̋̋̋̋̋̋̋̋𝑬𝑫𝑰𝑻𝑶𝑹~»̶̶͓͓͓̽̽̽⑅⃝✺❀✿＊\n\n👇👇https://www.facebook.com/profile.php?id=61577417285926\n\n𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 𝐋𝐢𝐧𝐤:-👉https://www.instagram.com/nk_lovely_143_1?igsh=OXY4eDBsbzEzMnVr",
    event.threadID,
    () => {
      // अब उसके बाद DP/photo भेजें
      api.sendMessage(
        {
          attachment: {  
            type: "image",
            payload: {
              url: "https://i.ibb.co/DDkk6qCv/IMG-20250804-WA0735.jpg",
              is_reusable: true
            }
          }
        },
        event.threadID
      );
    }
  );
}
