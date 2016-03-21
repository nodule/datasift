var consumer = new datasift($.username, $.api_key);
consumer.connect();

//Emitted when stream is connected
if ($.connect) consumer.on('connect', $.connect);

//Emitted when there is an error
if ($.error) consumer.on('error', $.error);

//Emitted when there is a warning
if ($.warning) consumer.on('warning', $.warning);

//Emitted when disconnected
if ($.disconnect) consumer.on('disconnect', $.disconnect);

//Emitted when an interaction is received
if ($.interaction) consumer.on('interaction', $.interaction);

//Emitted when a delete message is received
if ($.delete) consumer.on('delete', $.delete);

output = {
  consumer: consumer
};
