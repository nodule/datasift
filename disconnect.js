module.exports = {
  name: "disconnect",
  ns: "datasift",
  title: "DataSift disconnect",
  description: "disconnect",
  phrases: {
    active: "Datasift disconnect"
  },
  ports: {
    input: {
      consumer: {
        title: "Consumer",
        type: "function",
        required: true
      }
    },
    output: {
      out: {
        type: "any"
      }
    }
  },
  fn: function disconnect(input, $, output, state, done, cb, on) {
    var r = function() {
      $.consumer.disconnect('disconnect', function disconnectCallback(out) {
        cb({
          out: out
        });
      });
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}