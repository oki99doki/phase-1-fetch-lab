function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch("https://anapioficeandfire.com/api/books")
  .then(resp => resp.json())
  //.then((books) => console.log(books))
  
  .then(json => renderBooks(json))
  //.catch(error => console.log(error))
  //return fetchBooks(book)
  //return resp.json
}
  //.then((json) => console.log(renderBooks(json)));
  //return fetchBooks(books)


function renderBooks(books) {
  //console.log(books)
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
    //console.log(book)
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})