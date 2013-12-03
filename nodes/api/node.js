var consumer = new datasift(input.username, input.api_key);
consumer.connect();

output = {
  consumer: consumer
};
