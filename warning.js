module.exports = {
  name: "warning",
  ns: "datasift",
  title: "DataSift warning",
  description: "warning",
  phrases: {
    active: "Datasift warning"
  },
  ports: {
    input: {
      consumer: {
        title: "Consumer",
        type: "function",
        required: "true"
      }
    },
    output: {
      warning: {
        type: "string"
      }
    }
  },
  fn: function warning(input, $, output, state, done, cb, on) {
    var r = function() {
      $.consumer.warning('warning', function warningCallback(warning) {
        cb({
          warning: warning
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