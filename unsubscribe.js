module.exports = {
  name: "unsubscribe",
  ns: "datasift",
  title: "DataSift unsubscribe",
  description: "unsubscribe",
  phrases: {
    active: "Datasift unsubscribe"
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
            input.consumer.unsubscribe(data);
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