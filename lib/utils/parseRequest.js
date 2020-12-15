module.exports = rawRequest => {
  // POST, GET, DELETE, PUT
  const method = `${rawRequest}`.match(/(^GET|POST|PUT|DELETE.)+/g);
  const path = `${rawRequest}`.match(/\//);
  const body = `${rawRequest}`.replace();

  console.log(method);
  return { method: `${method}`, path: `${path}` };
  // {
  //   method: `${method}`,
  //   path: `${path}`,
  //   body: `${body}`
  // };
};
