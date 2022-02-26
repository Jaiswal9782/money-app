import Request from "./request";

async function post(url, params, headers, token) {
  const conn = await new Request(headers, token);
  return conn.post(url, params);
}

async function get(url, params, headers, token) {
  const conn = await new Request(headers, token);
  return conn.get(url, params);
}

async function put(url, params, headers, token) {
  const conn = await new Request(headers, token);
  return conn.put(url, params);
}

async function del(url, params, headers, token) {
  const conn = await new Request(headers, token);
  return conn.delete(url, params);
}

export default { post, get, put, del };
