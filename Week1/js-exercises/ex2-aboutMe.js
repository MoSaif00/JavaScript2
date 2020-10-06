/**
 
 ** Exercise 2: About me **

 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */

 document.body.style.fontFamily='Arial, sans-serif'; // change body tag style .

 // Replace each of the spans(nickname, fav - food, hometown) with your own information.
const nickName = document.getElementById('nickname');
const favouritFood = document.getElementById('fav-food');
const homeTown = document.getElementById('hometown');
nickName.innerText = " Saif ";
favouritFood.innerText = " Asian food ";
homeTown.innerText = " Ibb";

//Iterate through each li and change the class to "list-item".
const liElement=document.querySelectorAll('li');
for(const listClassName of liElement)
{
    listClassName.className='list-item'; //change the class to "list-item"
}

//Create a new img element and set its src attribute to a picture of you.Append that element to the page.
const imgElement = document.createElement('img');
imgElement.src = 'https://media-exp1.licdn.com/dms/image/C5103AQFEvEGzWDfjtQ/profile-displayphoto-shrink_200_200/0?e=1607558400&v=beta&t=qF9folzMi1FNQg2UyVJ1xgb8OdnEL7S3rYD7a3mfnRw';
document.body.appendChild(imgElement);