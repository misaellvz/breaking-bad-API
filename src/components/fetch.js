const fetch = (url) => {
  return (
    fetch(url)
    .then((data) => data.json())
  );
}

export default fetch;