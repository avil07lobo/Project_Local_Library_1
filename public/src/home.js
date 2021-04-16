function getTotalBooksCount(books) {
  let result = books.reduce((acc, book)=> acc + 1, 0);
  return result;
}

function getTotalAccountsCount(accounts) {
  let count = 0;
  const result = accounts.forEach((account)=>count++);
  return count;
}

function getBooksBorrowedCount(books) {
  let count = 0;
  const result = books.forEach((book)=>{
    book.borrows.forEach((borrow)=>{
      if(!borrow.returned){
        count++
      }
    })
  })
  return count;
}

function getMostCommonGenres(books) {
  let obj = {};
  let arr = [];
  const result = books.forEach((book)=>{
    if(obj[book.genre]){
      obj[book.genre] += 1;
    }
    else {
      obj[book.genre] = 1;
    }
    return obj;
  })

  for (genres in obj){
    arr.push({name: genres, count: obj[genres]});  
  }
  
  arr.sort((arrA, arrB)=> (arrB.count - arrA.count));
  return arr.slice(0,5);
}

function getMostPopularBooks(books) {
  let obj = {};
  let arr = [];
  const result = books.forEach((book)=>{
    book.borrows.forEach((borrow)=>{
      if(obj[book.title]){
        obj[book.title] += 1;
      }
      else {
        obj[book.title] = 1
      }
      
      return obj;
    })
  })
  console.log(obj)
  for (popular in obj){
    arr.push({name: popular, count: obj[popular]});  
  }
  
  arr.sort((arrA, arrB)=> (arrB.count - arrA.count));
  return arr.slice(0,5);
}

function getMostPopularAuthors(books, authors) {
  const result = books.map((book)=>{
    const author = authors.find(author => author.id === book.authorId);
    return {
      name: `${author.name.first} ${author.name.last}`,
      count: book.borrows.length
    }
  })
  result.sort((a,b)=> b.count - a.count)
  return result.slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
