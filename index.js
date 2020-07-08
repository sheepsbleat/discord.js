const Discord = require("discord.js");
const { prefix, token } = require("./config.json");

const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(" ");
  const command = args.shift().toLowerCase();
  switch (command) {
    case "args-info":
      if (!args.length) {
        return message.channel.send(
          `You didn't provide any arguments, ${message.author}!`
        );
      }

      message.channel.send(`Command name: ${command}\nArguments: ${args}`);
      break;
    case "help":
      message.channel.send(
        "** never fear, help is near :cow: ** __commands__ ``` >args-info <args> ```"
      );
      break;
    default:
      message.channel.send("moo! (no valid command provided)");
      break;
  }
});

client.login(token);
