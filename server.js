console.log ('Hello, Twitch!');

const tmi = require('tmi.js');

const client = new tmi.Client({
    connection: {reconnect:true}, 
	channels: [ 'TempestF' ]
});

client.connect();

client.on('message', async (channel, context, message) => {
    console.log('channel', {
      channel,
      user: context.username,
      message
    });
  });
  
