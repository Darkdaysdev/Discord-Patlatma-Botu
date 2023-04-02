const { EmbedBuilder } = require("discord.js");
const client = global.client
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.on("messageCreate", async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return;
  if (!message.content.startsWith(client.ayarlar.prefix)) return;
  let embed = new EmbedBuilder().setFooter({text: message.guild.name}).setTimestamp().setColor("#1a023a")
  let command = message.content.split(" ")[0].slice(client.ayarlar.prefix.length);
  let params = message.content.split(" ").slice(1);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    cmd.run(client, message, params, embed);
  }

});
