var consumer = new datasift(input.username, input.api_key);
consumer.connect();

//Emitted when stream is connected
if(input.connect) consumer.on('connect', input.connect);

//Emitted when there is an error
if(input.error) consumer.on('error', input.error);

//Emitted when there is a warning
if(input.warning) consumer.on('warning', input.warning);

//Emitted when disconnected
if(iput.disconnect) consumer.on('disconnect', input.disconnect);

//Emitted when an interaction is received
if(input.interaction) consumer.on('interaction', input.interaction);

//Emitted when a delete message is received
if(input.delete) consumer.on('delete', input.delete);

output = {
  consumer: consumer
};
