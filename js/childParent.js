// document.getElementById('players-container').childNodes[3].childNodes[0].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode

// 1. create new li element
const newChild = document.createElement('li');
newChild.innerText='New born baby footballer';

// 2. find a parent where you add the li item
const playersList = document.getElementById('players-list');
// console.log(playersList);

// 3. append the child in parent container
playersList.appendChild(newChild);
