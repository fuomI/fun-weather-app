fetch('/citydata')
  .then(response => response.json())
  .then(data => console.log(data));