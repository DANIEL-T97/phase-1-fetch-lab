function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch('https://anapioficeandfire.com/api/books') 
  .then(response => response.json())
  .then(data => renderBooks(data));
}
function renderBooks(books){
  console.log(books);
}