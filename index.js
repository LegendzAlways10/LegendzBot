const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => {
  console.log("LegendzBot is ONLINE 👑");
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  if (message.content === "!about") {
    message.reply("👑 LegendzBot — powering LEGENDZ ALWAYS!");
  }

  if (message.content === "!legend") {
    message.reply(`🔥 ${message.author.username} is officially a LEGEND! 👑`);
  }
});
client.login(process.env.TOKEN);
