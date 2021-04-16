function findAccountById(accounts, id) {
  const result = accounts.find((account)=>account.id === id);
  return result;
}

function sortAccountsByLastName(accounts) {
  const result = accounts.sort((accountA, accountB)=>accountA.name.last.toLowerCase() < accountB.name.last.toLowerCase() ? -1 : 1);
  return result;
}

function getTotalNumberOfBorrows(account, books) {
  let count = 0;
  const borrowId = books.forEach((book)=>{
    book.borrows.forEach((borr)=>{
      if(borr.id === account.id){
        count+=1;
      }
    })
  });
  return count;
}

function getBooksPossessedByAccount(account, books, authors) {
  let arr = []
  const possessed = books.map((book)=>{
    
    book.borrows.forEach((borrow)=>{
      if(!borrow.returned && borrow.id === account.id){
        book.author = findAccountById(authors, book.authorId);
        arr.push(book)
      }
    })
  });
  return arr;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
