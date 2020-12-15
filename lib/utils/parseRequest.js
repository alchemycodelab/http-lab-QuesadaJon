module.exports = rawRequest => {
  // POST, GET, DELETE, PUT
  // const method = `${rawRequest}`.match(/(^GET|POST|PUT|DELETE.)+/g);
  // const path = `${rawRequest}`.match(/\//);
  // const body = `${rawRequest}`.replace();

  // return { method: `${method}`, path: `${path}` };

  const [method, path] = rawRequest.split(' ');
  const [, body] = rawRequest.split('\r\n\r\n');
  if(body) {
    return {
      method,
      path,
      body
    };
  } else {
    return {
      method,
      path,
    };
  }
};
