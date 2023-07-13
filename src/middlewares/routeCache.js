import NodeCache from "node-cache";
const cache = new NodeCache();

export default (duration) => (req, res, next) => {
  // is request a GET?
  if (req.method !== "GET") {
    console.error("Cannot cache non-GET methods");
  }
  // if not, call next
  // check if key exists in cache
  const key = req.originalUrl;
  const cachedResponse = cache.get(key);
  // if it exists,send cache result
  if (cachedResponse) {
    console.log(`Cache hit for the ${key}`);
    res.send(cachedResponse);
  } else {
    console.log(`Cache miss for ${key}`);
    res.originalSend = res.send;
    res.send = (body) => {
      res.originalSend(body);
      cache.set(key, body, duration);
    };
    next();
  }
  // if not, replace .send with method to set response to cache
};
