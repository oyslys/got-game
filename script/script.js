
/*jshint esversion: 6 */

const api = 'https://anapioficeandfire.com/api/characters/';
const characters = [347, 1311, 1303, 429, 438, 623, 1339, 238, 333, 1442];

for (let i = 0; i < characters.length; i++) {
	let url = api + characters[i];
	fetch(url)
		.then(result => result.json())
		.then((res) => {
			createCard(res);
		})
		.catch(err => console.log(err));
}




// lager korta som skal ut i css

const cards = document.getElementById('cards');
localStorage.clear();

function createCard(result) {

	let div1 = document.createElement('div');
	div1.classList.add('card');
	div1.classList.add('overlay');
	cards.appendChild(div1);

	let name = document.createElement('p');
	name.classList.add('name');
	div1.appendChild(name);
	name.innerHTML = 'Name: <b>' + result.name + '</b>';

	let shield = document.createElement('img');
	shield.classList.add('shield');
	div1.appendChild(shield);
	let shieldUrl = 'media/shields/shield';

	if (result.name === 'Edmyn Tully') { div1.style.backgroundColor = '#161616'; shield.src = shieldUrl + '1.svg';
}
	if (result.name === 'Dalla') { div1.style.backgroundColor = '#161616'; shield.src = shieldUrl + '2.png';
}
	if (result.name === 'Daenerys Targaryen') { div1.style.backgroundColor = '#161616'; shield.src = shieldUrl + '3.svg';
}
	if (result.name === 'Godric Borrell') { div1.style.backgroundColor = '#161616'; shield.src = shieldUrl + '4.png';
}
	if (result.name === 'Grazdan mo Eraz') { div1.style.backgroundColor = '#161616'; shield.src = shieldUrl + '5.png';
}
	if (result.name === 'Leo Tyrell') { div1.style.backgroundColor = '#161616'; shield.src = shieldUrl + '6.svg'; }
	if (result.name === 'Dorea Sand') { div1.style.backgroundColor = '#161616'; shield.src = shieldUrl + '7.svg';
}
	if (result.name === 'Cersei Lannister') { div1.style.backgroundColor = '#161616'; shield.src = shieldUrl + '8.svg';
}
	if (result.name === 'Durran') { div1.style.backgroundColor = '#161616'; shield.src = shieldUrl + '9.svg';
}
	if (result.name === 'Gregor Clegane') { div1.style.backgroundColor = '#161616'; shield.src = shieldUrl + '10.png';
}

	let gender = document.createElement('p');
	gender.classList.add('gender');
	div1.appendChild(gender);
	if (result.gender === 'Female') {
		gender.innerHTML = 'Gender: <b>Female</b>';
	} else {
		gender.innerHTML = 'Gender: <b>Male</b>';
	}

	let culture = document.createElement('p');
	culture.classList.add('culture');
	div1.appendChild(culture);
	if (result.culture === '') culture.innerHTML = 'Culture: <b>Unknown</b>';
	else culture.innerHTML = 'Culture: <b>' + result.culture + '</b>';

	let born = document.createElement('p');
	born.classList.add('born');
	div1.appendChild(born);
	if (result.born === '') {
		born.innerHTML = 'Born: <b>Unknown</b>';
	} else {
		born.innerHTML = 'Born: <b>' + result.born + '</b>';
	}


	div1.addEventListener('click', function () {
		if (localStorage.player1 && localStorage.player2) {
			localStorage.clear();
			reset();
			localStorage.player1 = result.name;
			div1.style.outline = '4px solid white';
			shield.style.transform = 'scale(1.1)';
			createBadgePlayer1();
		} else if (localStorage.player1) {
			localStorage.player2 = result.name;
			div1.style.outline = '4px solid white';
			shield.style.transform = 'scale(1.1)';
			createBadgePlayer2();
		} else {
			localStorage.player1 = result.name;
			div1.style.outline = '4px solid white';
			shield.style.transform = 'scale(1.1)';
			createBadgePlayer1();
		}
	});

	function createBadgePlayer1() {
		let badge = document.createElement('div');
		badge.classList.add('badge');
		badge.classList.add('badge1');
		div1.appendChild(badge);
	}

	function createBadgePlayer2() {
		let badge = document.createElement('div');
		badge.classList.add('badge');
		badge.classList.add('badge2');
		div1.appendChild(badge);
	}
}



// her resete eg og hente badge

function reset() {
	document.querySelectorAll(".badge").forEach(function (elem) {
		elem.remove();
	});
	document.querySelectorAll(".badge").forEach(function (elem) {
		elem.remove();
	});
	document.querySelectorAll(".card").forEach(function (elem) {
		elem.style.outline = 'none';
	});
	document.querySelectorAll(".shield").forEach(function (elem) {
		elem.style.transform = 'scale(1)';
	});
}



// her starte eg game
const startGame = document.querySelector('.start-button');

startGame.addEventListener('click', function () {
	if (localStorage.player1 && localStorage.player2) {
		startGame.href = 'game.html';
		startGame.click();
	} else {
		alert('Select 2 player!');
		startGame.href = '#';
	}
}, false);
