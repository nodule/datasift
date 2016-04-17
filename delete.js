module.exports = {
  name: "delete",
  ns: "datasift",
  title: "DataSift Delete",
  description: "Delete",
  phrases: {
    active: "Datasift Delete"
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
      data: {
        type: "object"
      }
    }
  },
  fn: function _delete(input, $, output, state, done, cb, on) {
    var r = function() {
      $.consumer.delete('delete', function deleteCallback(data) {
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