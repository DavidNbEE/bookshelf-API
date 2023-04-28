const { addBooksHandler, getBooksHandler, getBooksIdHandler, deleteBooksHandler } = require("./handler");


const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooksHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBooksIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: deleteBooksHandler,
  },
];

module.exports = routes;
