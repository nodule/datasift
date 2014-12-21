module.exports = {
  name: "interaction",
  ns: "datasift",
  title: "DataSift interaction",
  description: "interaction",
  phrases: {
    active: "Datasift interaction"
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
      data: {
        type: "object"
      }
    }
  },
  fn: function interaction(input, output, state, done, cb, on) {
    var r = function() {
      input.consumer.interaction('interaction', function interactionCallback(data) {
        cb({
          data: data
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