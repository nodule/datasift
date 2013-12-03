var consumer = new datashift(input.username, input.api_key);
consumer.connect();

output = {
  consumer: consumer
};
