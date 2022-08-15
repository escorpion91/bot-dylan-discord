const Discord = require('discord.js');

const TOKEN =
  'MTAwODgwMDEzOTgyMzA0MjU4MA.GxMBXw.QK9RKQ0nwiJ9GNpaoV6uAT2UHGYdnIbIccBf6I';

const client = new Discord.Client({
  intents: 32767,
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  client.application.commands.set([
    {
      name: 'ping',
      description: 'pong',
      options: [],
    },
  ]);
});

client.on('interactionCreate', (int) => {
  if (int.isCommand() && int.commandName === 'ping') {
    int.reply('Pong, cachud@');
  }
});

client.on('messageCreate', (message) => {
  if (message.content == 'hi') {
    message.reply('the times, they are a changin');
  }
});

client.login(TOKEN);
