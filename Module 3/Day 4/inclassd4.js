const fetch = require('cross-fetch');

console.log("Hello");
fetch('http://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then((data) => console.log("Here's my data. We have " +  data.length + " entries"));

  console.log('goodbye');



