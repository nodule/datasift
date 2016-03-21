var consumer = new datasift($.username, $.api_key);
consumer.connect();

output = {
  consumer: $.create(consumer)
};
