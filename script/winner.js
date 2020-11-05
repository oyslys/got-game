/*jshint esversion: 6 */



const winnerKey = localStorage.key(0);
const winner = localStorage.getItem(winnerKey);





const shieldWinner = document.querySelector('.shield-winner');
const nameWinner = document.querySelector('.name-winner');

let winnerName = document.createElement('p');
winnerName.innerHTML = winner;
winnerName.classList.add('winner-name');
nameWinner.appendChild(winnerName);

let shield = document.createElement('img');
shield.classList.add('shield');
shieldWinner.appendChild(shield);


let shieldUrl = 'media/shields/shield';
let winnershield = '';

if (winner === 'Edmyn Tully') { shield.src = shieldUrl + '1.svg'; winnershield = shield; }
if (winner === 'Dalla') { shield.src = shieldUrl + '2.png'; winnershield = shield; }
if (winner === 'Daenerys Targaryen') { shield.src = shieldUrl + '3.svg'; winnershield = shield; }
if (winner === 'Godric Borrell') { shield.src = shieldUrl + '4.png'; winnershield = shield; }
if (winner === 'Grazdan mo Eraz') { shield.src = shieldUrl + '5.png'; winnershield = shield; }
if (winner === 'Leo Tyrell') { shield.src = shieldUrl + '6.svg'; winnershield = shield; }
if (winner === 'Dorea Sand') { shield.src = shieldUrl + '7.svg'; winnershield = shield; }
if (winner === 'Cersei Lannister') { shield.src = shieldUrl + '8.svg'; winnershield = shield; }
if (winner === 'Durran') { shield.src = shieldUrl + '9.svg'; winnershield = shield; }
if (winner === 'Gregor Clegane') { shield.src = shieldUrl + '10.png'; winnershield = shield; }
