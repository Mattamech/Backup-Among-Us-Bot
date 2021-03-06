const Discord = require('discord.js');

const {prefix, token} = require('./config.json');

const client = new Discord.Client();

client.once('ready', async () => {
    console.log('Ready!')
	client.user.setActivity(`${prefix}info`)
})

client.on('message', message => {

    if(message.content.startsWith(`${prefix}info`)) {
        message.channel.send("Among Us Bot commands: ```A!info: Displays this. A!invite: Sends the bot invite A!join: Joins the VC you are in. A!dis: Disconects from the VC. A!mute: Mutes all members in the VC. A!unmute: Unmutes all members in the VC.```")
    }

    if(message.content.startsWith(`${prefix}invite`)) {
        message.channel.send("https://discord.com/oauth2/authorize?client_id=763810277548228680&scope=bot&permissions=22039552")
    }

    if(message.content.startsWith(`${prefix}join`)) {
        message.member.voice.channel.join();
    }

    if(message.content.startsWith(`${prefix}dis`)) {
       let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
        for (const [memberID, member] of channel.members) {
        member.voice.setMute(false);
        }
       message.member.voice.channel.leave();
    }

    if(message.content.startsWith(`${prefix}mute`)) {
        let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
        for (const [memberID, member] of channel.members) {
        member.voice.setMute(true);
        }
    }

    if(message.content.startsWith(`${prefix}unmute`)) {
        let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
        for (const [memberID, member] of channel.members) {
        member.voice.setMute(false);
        }
    }
})

client.login(token);
