/**
  
 ** Exercise 1: The book list **

  I 'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

  */

'use strict';
function createBookList(books) {
  // your code goes in here, return the ul element
  const itemList = document.createElement('ul'); //Use a `<ul>`  and `<li>` to display the books.

  //Iterate through the array of books.
  for (let i=0 ; i<books.length; i++){
    const liTag = document.createElement('li');//Use a `<ul>`  and `<li>` to display the books.
    itemList.appendChild(liTag);
    const pTag= document.createElement('p');
    pTag.innerText = `${books[i].title} - ${books[i].author}`;//For each book, create a `<p>` element with the book title and author and append it to the page.
    liTag.appendChild(pTag); 
    const imgTag = document.createElement('img');
    imgTag.src = books[i].bImage; //Add an `<img>` to each book that links to a URL 
    liTag.appendChild(imgTag);

    /* style */
    itemList.style.display='flex'; 
    liTag.style.width='30%';
    liTag.style.margin='10px';
    pTag.style.textAlign= 'center';
    pTag.style.fontSize='larger';
    pTag.style.padding='10px 20px 10px 20px';
    pTag.style.textDecoration='underline';
    imgTag.style.width= '20vw';
    imgTag.style.margin='auto';
    imgTag.style.display='flex';

    if(books[i].alreadyRead === true){
      liTag.style.backgroundColor='green';
    }else
    {
      liTag.style.backgroundColor='red';
    } //Change the style of the book depending on whether you have read it(green) or not(red).
  }
  return itemList;
}

const books = [{
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
    bImage:'https://mediapark.com/wp-content/uploads/2019/11/design-of-everyday-things.jpg'
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    bImage:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264i/8884400._UY472_SS472_.jpg'
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
    bImage :'https://target.scene7.com/is/image/Target/GUEST_cbf4cc12-fd67-404a-a1db-c77e98e3c5f8'
  }
];
let ulElement = createBookList(books);

document.querySelector("#bookList").appendChild(ulElement);