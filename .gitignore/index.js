const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("HorseBot, [?help]");
    console.log("Le bot à bien était connecté");
});

bot.login("Mzg2MTgxOTQ5MDk5NzM3MDg4.DQNN3w.KTNhONAwKY_FFKTz7K9-Slnq71M");
