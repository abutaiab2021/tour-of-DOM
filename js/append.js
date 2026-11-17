// 1.First select parent node ba dorlam.
const mainContainer = document.getElementById('main-container');

// 2.Create First Node
const placesSection = document.createElement('section');


// Create h1
const h1 = document.createElement('h1');
h1.innerText='Places i want to visit';
// console.log(h1);
placesSection.appendChild(h1);

// create ul
const ul =  document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText='Bandorban';
const li2 = document.createElement('li');
li2.innerText='sondurban';
const li3 = document.createElement('li');
li3.innerText='kasmir';
const li4 = document.createElement('li');
li4.innerText="cox's bazar";

// ul.append(li1,li2,li3,li4);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
placesSection.appendChild(ul);


// 3. Appand placesSection to the parent node.
mainContainer.appendChild(placesSection)


// mobile container crater using js
const mobilesContainer =  document.createElement('section');

mobilesContainer.innerHTML = `
<h1>Mobiles Brand Name I Need Mobile</h1>
<ul>
    <li>Techno</li>
    <li>Oppo</li>
    <li>Honor</li>
    <li>Iphone</li>
</ul>
`
mainContainer.appendChild(mobilesContainer);

