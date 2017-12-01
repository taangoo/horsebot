const Discord = require("discord.js");

var bot = new Discord.Client();
var prefix = ("?");

bot.on("ready", function() {
    bot.user.setGame("HorseBot, [?help]");
    console.log("Le bot à bien était connecté");
});

bot.login("Mzg2MTgxOTQ5MDk5NzM3MDg4.DQNN3w.KTNhONAwKY_FFKTz7K9-Slnq71M");

bot.on("message", message => {
    if (message.content === "ping"){
        message.reply("**pong**");
        console.log("ping pong");
    }
    if (message.content === "Qui est Tango?"){
        message.reply("**Tango est mon dévelopeur, c'est un proplayeur sur rainbow six!!**");
        console.log("Qui est Tango?");
    }
    if (message.content === "Qui est Trotro?"){
        message.reply("**Trotro est un vieu plat boost!!**");
        console.log("Qui est Trotro?");
    }
    if (message.content === prefix + "dev"){
        message.channel.sendMessage("**Je suis en dévelopement donc si vous avez trouvé des bug/fautes d'ortographes merci de le signaler à Tango®#9192**");
        console.log("?dev");
    }
    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#01FE88")
        .addField("Commandes du Bot", " ?dev :pour avoir des informations sur mon dévelopement ")
        message.channel.sendEmbed(help_embed);
        //message.channel.sendMessage("Voici les commandes du HorseBot:\n-?dev :pour avoir des informations sur mon dévelopement");
        console.log("?help");
    }
      
});
