module.exports = {
  name: "api",
  ns: "datasift",
  title: "Datasift api",
  description: "Api to datasift",
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
  fn: function api(input, $, output, state, done, cb, on, datasift) {
    var r = function() {
      var consumer = new datasift($.username, $.api_key);
      consumer.connect();

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