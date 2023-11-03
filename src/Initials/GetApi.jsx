async function GetApi(url, method = "GET", body) {
  return await fetch(url, {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((result) => {
      return result.json();
    })
    .catch((err) => {
      console.log(err);
      return undefined;
    });
}
export default GetApi;
