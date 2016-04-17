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
        required: true
      },
      hash: {
        title: "Service Hash",
        type: "string",
        required: true,
        fn: function __HASH__(data, source, state, input, $, output) {
          var r = function() {
            $.consumer.unsubscribe($.hash);
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