function findAuthorById(authors, id) {
  const result = authors.find((author)=>author.id === id)
  return result;
}

function findBookById(books, id) {
  const result = books.find((book)=>book.id === id)
  return result;
}

function partitionBooksByBorrowedStatus(books) {
  const result1 = books.filter((book)=>
    book.borrows[0].returned === false)
  
  
  
  const result2 = books.filter((book)=>
    book.borrows[0].returned == true)
  
return [result1, result2];
}

function getBorrowersForBook(book, accounts) {
  let bookBorrow = book.borrows.map((borrow)=>{
    let accValue = accounts.find((account)=>account.id === borrow.id);
    accValue.returned = borrow.returned;
    return accValue;
  }).slice(0, 10);
return bookBorrow;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
