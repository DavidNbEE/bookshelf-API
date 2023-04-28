const { addBooksHandler, getBooksHandler, getBooksIdHandler, deleteBooksHandler, editDataBooksHandler } = require("./handler");


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
    path: '/books/{bookId}',
    handler: editDataBooksHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBooksHandler,
  },
];

module.exports = routes;
