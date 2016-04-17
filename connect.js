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
        required: true
      },
      api_key: {
        title: "Api Key",
        type: "string",
        required: true
      },
      connect: {
        title: "Connect",
        type: "function",
        required: false
      },
      error: {
        title: "Error",
        type: "function",
        required: false
      },
      warning: {
        title: "Warning",
        type: "function",
        required: false
      },
      disconnect: {
        title: "Disconnect",
        type: "function",
        required: false
      },
      interaction: {
        title: "Interaction",
        type: "function",
        required: false
      },
      "delete": {
        title: "Delete",
        type: "function",
        required: false
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
  fn: function connect(input, $, output, state, done, cb, on, datasift) {
    var r = function() {
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
        consumer: $.create(consumer)
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