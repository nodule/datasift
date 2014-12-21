module.exports = {
  name: "error",
  ns: "datasift",
  title: "DataSift error",
  description: "error",
  phrases: {
    active: "Datasift error"
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
      error: {
        type: "object"
      }
    }
  },
  fn: function error(input, output, state, done, cb, on) {
    var r = function() {
      input.consumer.error('error', function errorCallback(error) {
        cb({
          error: error
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