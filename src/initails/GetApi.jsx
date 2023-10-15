async function GetApi(url, method = "GET", body = undefined) {
  return await fetch(url, {
    method: method,
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
