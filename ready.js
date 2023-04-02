const client = require("../darkdays");
const Discord = require("discord.js")
const fs = require("fs")
client.on("ready", () => {
console.log(`${client.user.tag} Aktif!`)
        setInterval(() => {
      const oynuyor = client.ayarlar.botDurum
      const index = Math.floor(Math.random() * (oynuyor.length));
      client.user.setPresence({
                activities: [{
                    name: `${oynuyor[index]}`, 
                    url: "https://www.twitch.tv/darkdays",
                    type: Discord.ActivityType.Streaming
                }],
                });
    }, 10000);
 
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
if (err) console.error(err);
console.log(`Toplam ${files.length} komut var!`);
files.forEach(f => {
let props = require(`../commands/${f}`);
    
console.log(`${props.help.name}.js Komutu aktif!`);
    
client.commands.set(props.help.name, props);
props.conf.aliases.forEach(alias => {
client.aliases.set(alias, props.help.name);
});
});
});
  
});
