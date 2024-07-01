function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch("https://anapioficeandfire.com/api/books")
  .then(resp => resp.json())
  //.then((books) => console.log(books))
  
  .then(books => renderBooks(books))
  //return fetchBooks()

  //.then((json) => console.log(renderBooks(json)));
  //return fetchBooks(books)
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
