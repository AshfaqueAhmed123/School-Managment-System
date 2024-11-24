const fetchWrapper = async (endpoint, method, headers, body) => {
  try {
    let res = await fetch(`http://localhost:4000${endpoint}`, {
      method: method,
      headers: {
        "content-type":"application/json",
        ...headers,
      },
      body: JSON.stringify(...body),
    });
    res = await res.json();
    return res;
  } catch (error) {
    return error;
  }
};

export { fetchWrapper };
