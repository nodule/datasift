module.exports = {
  name: "connect",
  ns: "datasift",
  title: "DataSift Connect",
  description: "Connect to datasift",
  phrases: {
    active: "Connecting to datasift"
  },
  ports: {
    input: {
      username: {
        title: "Username",
        type: "string",
        required: "true"
      },
      api_key: {
        title: "Api Key",
        type: "string",
        required: "true"
      },
      connect: {
        title: "Connect",
        type: "function",
        required: "false"
      },
      error: {
        title: "Error",
        type: "function",
        required: "false"
      },
      warning: {
        title: "Warning",
        type: "function",
        required: "false"
      },
      disconnect: {
        title: "Disconnect",
        type: "function",
        required: "false"
      },
      interaction: {
        title: "Interaction",
        type: "function",
        required: "false"
      },
      "delete": {
        title: "Delete",
        type: "function",
        required: "false"
      }
    },
    output: {
      consumer: {
        type: "function"
      }
    }
  },
  dependencies: {
    npm: {
      datasift: require('datasift')
    }
  },
  fn: function connect(input, output, state, done, cb, on, datasift) {
    var r = function() {
      var consumer = new datasift(input.username, input.api_key);
      consumer.connect();

      //Emitted when stream is connected
      if (input.connect) consumer.on('connect', input.connect);

      //Emitted when there is an error
      if (input.error) consumer.on('error', input.error);

      //Emitted when there is a warning
      if (input.warning) consumer.on('warning', input.warning);

      //Emitted when disconnected
      if (iput.disconnect) consumer.on('disconnect', input.disconnect);

      //Emitted when an interaction is received
      if (input.interaction) consumer.on('interaction', input.interaction);

      //Emitted when a delete message is received
      if (input.delete) consumer.on('delete', input.delete);

      output = {
        consumer: consumer
      };
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}