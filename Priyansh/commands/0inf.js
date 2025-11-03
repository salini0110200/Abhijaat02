module.exports.config = {
  name: "info",
  version: "1.0.1", 
  hasPermssion: 0,
  credits: "⑅⃝❥»𝑵𝑲𝑬𝑫𝑰𝑻𝑶𝑹❀✿＊",
  description: "Admin and Bot info.",
  commandCategory: "...",
  cooldowns: 1,
  dependencies: 
  {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
  const time = process.uptime(),
      hours = Math.floor(time / (60 * 60)),
      minutes = Math.floor((time % (60 * 60)) / 60),
      seconds = Math.floor(time % 60);
  const moment = require("moment-timezone");
  var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【HH:mm:ss】");
  var link =                                     
  ["https://i.ibb.co/DDkk6qCv/IMG-20250804-WA0735.jpg"]; // DP लिंक यहाँ अपडेट किया गया है
  var callback = () => api.sendMessage({
    body:` ╾━╤デ╦︻(▀̿Ĺ̯▀̿ ̿)🇮🇳 𝐀𝐃𝐌𝐈𝐍 𝐀𝐍𝐃 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 🇮🇳 
(⌐▀͡ ̯ʖ▀)︻̷┻̿═━一-

☄️Bot Name︎︎︎☄️  ${global.config.BOTNAME}

🔥Bot Admin🔥─━━◉❖𝑵𝑲≛𝑬𝑫𝑰𝑻𝑶𝑹❖◉━━─💔🥀

🙈bot andmin owner facebook id link🙈➪ https://www.facebook.com/profile.php?id=61577417285926 💞🕊️

👋For Any Kind Of Help Contact On Instagram 👇👇 https://www.instagram.com/nk_lovely_143_1?igsh=OXY4eDBsbzEzMnVr==

✧══════•❁❀❁•══════✧

🌸Bot Prefix🌸☞︎︎︎☜︎︎︎✰ ${global.config.PREFIX}

♥️Bot Owner♥️ ─━━◉❖𝑵𝑲≛𝑬𝑫𝑰𝑻𝑶𝑹❖◉━━─

🥳UPTIME🥳

🌪️Today is🌪️ ☞︎︎︎☜︎︎︎✰ ${juswa} 

⚡Bot is running⚡ ${hours}:${minutes}:${seconds}.

✅Thanks for using ${global.config.BOTNAME} 𝑁𝐾 𝐵𝑂𝑇🖤


🦢🍒•••ꞪɛᏒɛ ɪʂ ɮ❍┼ ❍ωɳɜɽ ɳaʍɜ•••🌷💞
┏━🕊️━━°❀•°:🎀🧸💙🧸🎀:°•❀°━━💞━┓
🌸✦✧✧✧✧✰🍒─━━◉❖ ɳƙ≛ ɘɗi͠𝗧❍r᩶ 🌿✰✧✧✧✧✦🌸
┗━🕊️━━°❀•°:🎀🧸💙🧸🎀:°•❀°━━💞━┛


`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")
  }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 

  return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
};
