module.exports = {
  name: "subscribe",
  ns: "datasift",
  title: "DataSift subscribe",
  description: "subscribe",
  phrases: {
    active: "Datasift subscribe"
  },
  ports: {
    input: {
      consumer: {
        title: "Consumer",
        type: "function",
        required: "true"
      },
      hash: {
        title: "Service Hash",
        type: "string",
        required: "true",
        fn: function __HASH__(data, x, source, state, input, output) {
          var r = function() {
            input.consumer.subscribe(data);
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      }
    },
    output: {}
  },
  state: {}
}