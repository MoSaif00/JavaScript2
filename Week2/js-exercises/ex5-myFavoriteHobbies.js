/**
 
 ** Exercise 5: My favorite hobbies **
 
 Write a program that outputs each of these inside an HTML file
 Create an HTML and JavaScript file, link them together
 Use the map and / or forEach function to put each hobby into a list item
 Put the list items in an unordered list
 */

function createHTMLList(arr) {
  // your code goes in here

/* add header and style the page */
  const header= document.createElement('h2');
  document.body.appendChild(header);
  header.innerText= 'my favorite hobbies';
  header.style.textTransform = 'UpperCase';
  header.style.textDecoration= ' underline ';
  document.body.style.textAlign='center';

  const ulElement = document.createElement('ul'); // add unordered list 
  document.body.appendChild(ulElement); // append Ul list to body tag 

  const hobbiesList = arr.forEach(element => {
    const liElemets = document.createElement('li'); // add list item 
    liElemets.innerText = element; // teke the paremeter and push the elements into the list items 
    ulElement.appendChild(liElemets); // append li to Ul
    liElemets.style.listStyle='none';
  });  
  return hobbiesList;
};

const myHobbies = [
  'Reading',
  'Programming',
  'Hanging out with friends',
  'playing chess',
  'cycling',
  'drinking coffee',
];
createHTMLList(myHobbies);

// const mySkills = [
//   'programming',
//   'debugging',
//   'troubleshoting'
// ];
// createHTMLList(mySkills);