/*jshint esversion: 8 */


// henter data fra localStorage player selecter

const playerKey1 = localStorage.key(0);
const playerKey2 = localStorage.key(1);
const player1 = localStorage.getItem(playerKey1);
const player2 = localStorage.getItem(playerKey2);



// her lager eg den banneren som som spelaren valgte

const shieldPlayer1 = document.querySelector('.shield-player1');
const shieldPlayer2 = document.querySelector('.shield-player2');

let shield1 = document.createElement('img');
let shield2 = document.createElement('img');
shield1.classList.add('shield');
shield2.classList.add('shield');

shieldPlayer1.appendChild(shield1);
shieldPlayer2.appendChild(shield2);

let shieldUrl = 'media/shields/shield';

let player1shield = '';
let player2shield = '';

if (player1 === 'Edmyn Tully') { shield1.src = shieldUrl + '1.svg'; player1shield = shield1; }
if (player1 === 'Dalla') { shield1.src = shieldUrl + '2.png'; player1shield = shield1; }
if (player1 === 'Daenerys Targaryen') { shield1.src = shieldUrl + '3.svg'; player1shield = shield1; }
if (player1 === 'Godric Borrell') { shield1.src = shieldUrl + '4.png'; player1shield = shield1; }
if (player1 === 'Grazdan mo Eraz') { shield1.src = shieldUrl + '5.png'; player1shield = shield1; }
if (player1 === 'Leo Tyrell') { shield1.src = shieldUrl + '6.svg'; player1shield = shield1; }
if (player1 === 'Dorea Sand') { shield1.src = shieldUrl + '7.svg'; player1shield = shield1; }
if (player1 === 'Cersei Lannister') { shield1.src = shieldUrl + '8.svg'; player1shield = shield1; }
if (player1 === 'Durran') { shield1.src = shieldUrl + '9.svg'; player1shield = shield1; }
if (player1 === 'Gregor Clegane') { shield1.src = shieldUrl + '10.png'; player1shield = shield1; }

if (player2 === 'Edmyn Tully') { shield2.src = shieldUrl + '1.svg'; player2shield = shield2; }
if (player2 === 'Dalla') { shield2.src = shieldUrl + '2.png'; player2shield = shield2; }
if (player2 === 'Daenerys Targaryen') { shield2.src = shieldUrl + '3.svg'; player2shield = shield2; }
if (player2 === 'Godric Borrell') { shield2.src = shieldUrl + '4.png'; player2shield = shield2; }
if (player2 === 'Grazdan mo Eraz') { shield2.src = shieldUrl + '5.png'; player2shield = shield2; }
if (player2 === 'Leo Tyrell') { shield2.src = shieldUrl + '6.svg'; player2shield = shield2; }
if (player2 === 'Dorea Sand') { shield2.src = shieldUrl + '7.svg'; player2shield = shield2; }
if (player2 === 'Cersei Lannister') { shield2.src = shieldUrl + '8.svg'; player2shield = shield2; }
if (player2 === 'Durran') { shield2.src = shieldUrl + '9.svg'; player2shield = shield2; }
if (player2 === 'Gregor Clegane') { shield2.src = shieldUrl + '10.png'; player2shield = shield2; }



// variabler

let whosTurn = 1;
let player1score = 0;
let player2score = 0;

const obstacle1 = 5;
const obstacle2 = 10;
const obstacle3 = 15;
const obstacle4 = 20;
const obstacle5 = 25;

let currentXpositionPlayer1 = 0;
let currentYpositionPlayer1 = 115;
let currentXpositionPlayer2 = 0;
let currentYpositionPlayer2 = 115;

let rollSumPlayer1 = 0;
let rollSumPlayer2 = 0;


// setter game area

const gameArea = document.querySelector('#game-area');

let gameshield1 = document.createElement('img');
let gameshield2 = document.createElement('img');
gameshield1.classList.add('gameshield');
gameshield1.classList.add('gameshield1');
gameshield2.classList.add('gameshield');
gameshield2.classList.add('gameshield2');

gameshield1.src = player1shield.src;
gameshield2.src = player2shield.src;

gameArea.appendChild(gameshield1);
gameArea.appendChild(gameshield2);

const diceUrl = 'media/dice/';





// rolling av terning

const player1are = document.querySelector('#position1');
const player2are = document.querySelector('#position2');

// terning spelar 1
const button1 = document.querySelector('#roll1');
button1.style.backgroundColor = 'black';

const dice1 = document.querySelector('#dice1');
const diceSvg1 = document.createElement('img');
diceSvg1.classList.add('dice');
dice1.appendChild(diceSvg1);

const startHereButton = document.querySelector('.start-here');
button1.addEventListener('click', rollPlayer1);

function rollPlayer1() {
	if (whosTurn === 1) {

		document.onkeydown = function (e) {
			switch (e.key) {
				case 'q':
						console.warn('Dont try to cheat');
					break;
				case 'w':
						console.warn('Dont try to cheat');
			}
		};

		rollSumPlayer1++;
		startHereButton.style.display = 'none';
		let gameLog1 = document.querySelector('#gamelog1');
		let diceout1 = Math.floor(Math.random() * 6) + 1;

		button1.style.backgroundColor = 'gray';
		button1.disabled = "disabled";
		button1.style.cursor = 'not-allowed';

		switch (diceout1) {
			case 1:
				setTimeout(function () { diceSvg1.src = diceUrl + '2.svg'; }, 100);
				setTimeout(function () { diceSvg1.src = diceUrl + '3.svg'; }, 200);
				setTimeout(function () { diceSvg1.src = diceUrl + '4.svg'; }, 300);
				setTimeout(function () { diceSvg1.src = diceUrl + '1.svg'; }, 400);
				break;
			case 2:
				setTimeout(function () { diceSvg1.src = diceUrl + '2.svg'; }, 100);
				setTimeout(function () { diceSvg1.src = diceUrl + '3.svg'; }, 200);
				setTimeout(function () { diceSvg1.src = diceUrl + '4.svg'; }, 300);
				setTimeout(function () { diceSvg1.src = diceUrl + '2.svg'; }, 400);
				break;
			case 3:
				setTimeout(function () { diceSvg1.src = diceUrl + '2.svg'; }, 100);
				setTimeout(function () { diceSvg1.src = diceUrl + '3.svg'; }, 200);
				setTimeout(function () { diceSvg1.src = diceUrl + '4.svg'; }, 300);
				setTimeout(function () { diceSvg1.src = diceUrl + '3.svg'; }, 400);
				break;
			case 4:
				setTimeout(function () { diceSvg1.src = diceUrl + '2.svg'; }, 100);
				setTimeout(function () { diceSvg1.src = diceUrl + '3.svg'; }, 200);
				setTimeout(function () { diceSvg1.src = diceUrl + '1.svg'; }, 300);
				setTimeout(function () { diceSvg1.src = diceUrl + '4.svg'; }, 400);
				break;
			case 5:
				setTimeout(function () { diceSvg1.src = diceUrl + '2.svg'; }, 100);
				setTimeout(function () { diceSvg1.src = diceUrl + '3.svg'; }, 200);
				setTimeout(function () { diceSvg1.src = diceUrl + '4.svg'; }, 300);
				setTimeout(function () { diceSvg1.src = diceUrl + '5.svg'; }, 400);
				break;
			case 6:
				setTimeout(function () { diceSvg1.src = diceUrl + '2.svg'; }, 100);
				setTimeout(function () { diceSvg1.src = diceUrl + '3.svg'; }, 200);
				setTimeout(function () { diceSvg1.src = diceUrl + '4.svg'; }, 300);
				setTimeout(function () { diceSvg1.src = diceUrl + '6.svg'; }, 400);
		}

		let info1 = document.createElement('p');
		gameLog1.appendChild(info1);
		info1.innerHTML = 'Rolled ' + diceout1;

		async function asyncCall() {
			console.log('move');
			for (let i = 0; i < diceout1; i++) {
				(function () {
					setTimeout(function () {
						moveShield();
					}, i * 500);
				})(i);
			}
			let result = await resolveAfterXSeconds();
			console.log(result);
		}
		asyncCall();

		function resolveAfterXSeconds() {
			return new Promise(resolve => {
				setTimeout(() => {
					resolve('stop');
					checkWhosTurn();
					checkObstacle();

				}, diceout1 * 510);
			});
		}

		function moveShield() {
			player1score++;
			player1are.innerHTML = player1score;

			if (player1score >= 1 && player1score <= 6) stepRight(); //➡
			if (player1score === 7) stepDown(); //⬇
			if (player1score >= 8 && player1score <= 13) stepLeft(); //⬅
			if (player1score === 14) stepDown(); //⬇
			if (player1score >= 15 && player1score <= 20) stepRight(); //➡
			if (player1score === 21) stepDown(); //⬇
			if (player1score >= 22 && player1score <= 27) stepLeft(); //⬅
			if (player1score === 28) stepDown(); //⬇
			if (player1score >= 29 && player1score <= 30) stepRight(); //⬅

			checkWinner();
		}

		function stepDown() {
			gameshield1.style.top = currentYpositionPlayer1 + 'px';
			currentYpositionPlayer1 += 100;
		}

		function stepLeft() {
			currentXpositionPlayer1 -= 100;
			gameshield1.style.transform = 'translateX(' + currentXpositionPlayer1 + 'px)';
		}

		function stepRight() {
			currentXpositionPlayer1 += 100;
			gameshield1.style.transform = 'translateX(' + currentXpositionPlayer1 + 'px)';
		}

		function checkWhosTurn() {
			if (diceout1 === 6) {
				hitSix();
				info1.innerHTML = 'Rolled a 6: one free roll';
				whosTurn = 1;
				button2.style.backgroundColor = 'gray';
				button1.style.backgroundColor = 'black';
				button1.disabled = "enable";
				button2.style.cursor = 'not-allowed';
				button1.style.cursor = 'pointer';

			} else {
				whosTurn = 2;
				button1.style.backgroundColor = 'gray';
				button2.style.backgroundColor = 'black';
				button1.disabled = "disabled";
				button1.style.cursor = 'not-allowed';
				button2.style.cursor = 'pointer';

			}
		}


		function checkObstacle() {
			if (player1score === obstacle1) {
				player1score = player1score - 2;
				hitObstacle('White Walker', 2);
				info1.innerHTML = ('Hit a White Walker, go back 2 tiles');
				currentXpositionPlayer1 = 300;
				setTimeout(function(){
					gameshield1.style.transform = 'translateX(' + currentXpositionPlayer1 + 'px)';
					player1are.innerHTML = player1score;
					}, 500);
			}
			if (player1score === obstacle2) {
				player1score = player1score - 2;
				hitObstacle('White Walker', 2);
				info1.innerHTML = ('Hit a White Walker, go back 2 tiles');
				currentXpositionPlayer1 = 500;
				setTimeout(function(){
					gameshield1.style.transform = 'translateX(' + currentXpositionPlayer1 + 'px)';
					player1are.innerHTML = player1score;
				}, 500);
			}
			if (player1score === obstacle3) {
				player1score = player1score - 1;
				hitObstacle('White Walker', 1);
				info1.innerHTML = ('Hit a White Walker, go back 1 tiles');
				currentXpositionPlayer1 = 0;
				setTimeout(function(){
					gameshield1.style.transform = 'translateX(' + currentXpositionPlayer1 + 'px)';
					player1are.innerHTML = player1score;
				}, 500);
			}
			if (player1score === obstacle4) {
				player1score = player1score - 4;
				hitObstacle('White Walker', 4);
				info1.innerHTML = ('Hit a White Walker, go back 4 tiles');
				currentXpositionPlayer1 = 200;
				setTimeout(function(){
					gameshield1.style.transform = 'translateX(' + currentXpositionPlayer1 + 'px)';
					player1are.innerHTML = player1score;
				}, 500);
			}
			if (player1score === obstacle5) {
				player1score = player1score - 2;
				hitObstacle('White Walker', 2);
				info1.innerHTML = ('Hit a White Walker, go back 2 tiles');
				currentXpositionPlayer1 = 400;
				setTimeout(function(){
					gameshield1.style.transform = 'translateX(' + currentXpositionPlayer1 + 'px)';
					player1are.innerHTML = player1score;
				}, 500);
			}
		}

		function checkWinner() {
			if (player1score === 30) {
				localStorage.winner = player1;
				setTimeout(function(){
					document.getElementById("winner-button").click();
				}, 2000);
			}
		}
	}
}


// terning spelar 2
const button2 = document.querySelector('#roll2');

button2.addEventListener('click', rollPlayer2);
button2.style.backgroundColor = 'gray';

const dice2 = document.querySelector('#dice2');
const diceSvg2 = document.createElement('img');
diceSvg2.classList.add('dice');
dice2.appendChild(diceSvg2);

function rollPlayer2() {
	if (whosTurn === 2) {


		rollSumPlayer2++;
		let gameLog2 = document.querySelector('#gamelog2');
		let diceout2 = Math.floor(Math.random() * 6) + 1;

		button2.style.backgroundColor = 'gray';
		button2.disabled = "disabled";
		button2.style.cursor = 'not-allowed';

		switch (diceout2) {
			case 1:
				setTimeout(function () { diceSvg2.src = diceUrl + '2.svg'; }, 100);
				setTimeout(function () { diceSvg2.src = diceUrl + '3.svg'; }, 200);
				setTimeout(function () { diceSvg2.src = diceUrl + '4.svg'; }, 300);
				setTimeout(function () { diceSvg2.src = diceUrl + '1.svg'; }, 400);
				break;
			case 2:
				setTimeout(function () { diceSvg2.src = diceUrl + '2.svg'; }, 100);
				setTimeout(function () { diceSvg2.src = diceUrl + '3.svg'; }, 200);
				setTimeout(function () { diceSvg2.src = diceUrl + '4.svg'; }, 300);
				setTimeout(function () { diceSvg2.src = diceUrl + '2.svg'; }, 400);
				break;
			case 3:
				setTimeout(function () { diceSvg2.src = diceUrl + '2.svg'; }, 100);
				setTimeout(function () { diceSvg2.src = diceUrl + '3.svg'; }, 200);
				setTimeout(function () { diceSvg2.src = diceUrl + '4.svg'; }, 300);
				setTimeout(function () { diceSvg2.src = diceUrl + '3.svg'; }, 400);
				break;
			case 4:
				setTimeout(function () { diceSvg2.src = diceUrl + '2.svg'; }, 100);
				setTimeout(function () { diceSvg2.src = diceUrl + '3.svg'; }, 200);
				setTimeout(function () { diceSvg2.src = diceUrl + '1.svg'; }, 300);
				setTimeout(function () { diceSvg2.src = diceUrl + '4.svg'; }, 400);
				break;
			case 5:
				setTimeout(function () { diceSvg2.src = diceUrl + '2.svg'; }, 100);
				setTimeout(function () { diceSvg2.src = diceUrl + '3.svg'; }, 200);
				setTimeout(function () { diceSvg2.src = diceUrl + '4.svg'; }, 300);
				setTimeout(function () { diceSvg2.src = diceUrl + '5.svg'; }, 400);
				break;
			case 6:
				setTimeout(function () { diceSvg2.src = diceUrl + '2.svg'; }, 100);
				setTimeout(function () { diceSvg2.src = diceUrl + '3.svg'; }, 200);
				setTimeout(function () { diceSvg2.src = diceUrl + '4.svg'; }, 300);
				setTimeout(function () { diceSvg2.src = diceUrl + '6.svg'; }, 400);
		}

		let info2 = document.createElement('p');
		gameLog2.appendChild(info2);
		info2.innerHTML = 'Rolled ' + diceout2;

		async function asyncCall() {
			console.log('move');
			for (var i = 0; i < diceout2; i++) {
				(function () {
					setTimeout(function () {
						moveShield();
					}, i * 500);
				})(i);
			}
			let result = await resolveAfterXSeconds();
			console.log(result);
		}
		asyncCall();

		function resolveAfterXSeconds() {
			return new Promise(resolve => {
				setTimeout(() => {
					resolve('stop');
					checkWhosTurn();
					checkObstacle();
				}, diceout2 * 510);
			});
		}

		function moveShield() {
			player2score++;
			player2are.innerHTML = player2score;

			if (player2score >= 1 && player2score <= 6) stepRight(); //➡
			if (player2score === 7) stepDown(); //⬇
			if (player2score >= 8 && player2score <= 13) stepLeft(); //⬅
			if (player2score === 14) stepDown(); //⬇
			if (player2score >= 15 && player2score <= 20) stepRight(); //➡
			if (player2score === 21) stepDown(); //⬇
			if (player2score >= 22 && player2score <= 27) stepLeft(); //⬅
			if (player2score === 28) stepDown(); //⬇
			if (player2score >= 29 && player2score <= 30) stepRight(); //⬅

			checkWinner();
		}

		function stepDown() {
			gameshield2.style.top = currentYpositionPlayer2 + 'px';
			currentYpositionPlayer2 += 100;
		}

		function stepLeft() {
			currentXpositionPlayer2 -= 100;
			gameshield2.style.transform = 'translateX(' + currentXpositionPlayer2 + 'px)';
		}

		function stepRight() {
			currentXpositionPlayer2 += 100;
			gameshield2.style.transform = 'translateX(' + currentXpositionPlayer2 + 'px)';
		}

		function checkWhosTurn() {
			if (diceout2 === 6) {
				hitSix();
				info2.innerHTML = '	Rolled a 6: free roll';
				whosTurn = 2;
				button1.style.backgroundColor = 'gray';
				button2.style.backgroundColor = 'black';
				button2.disabled = "enable";
				button2.style.cursor = 'pointer';
				button1.style.cursor = 'not-allowed';


			} else {
				whosTurn = 1;
				button2.style.backgroundColor = 'gray';
				button1.style.backgroundColor = 'black';
				button2.disabled = "disabled";
				button1.style.cursor = 'pointer';
				button2.style.cursor = 'not-allowed';

			}
		}


		function checkObstacle() {
			if (player2score === obstacle1) {
				hitObstacle('White Walker', 2);
				info2.innerHTML = ('Hit a White Walker, go back 2 tiles');
				setTimeout(function(){
					player2score = player2score - 2;
					currentXpositionPlayer2 = 300;
					gameshield2.style.transform = 'translateX(' + currentXpositionPlayer2 + 'px)';
					player2are.innerHTML = player2score;
				}, 500);
			}
			if (player2score === obstacle2) {
				hitObstacle('White Walker', 2);
				info2.innerHTML = ('Hit a White Walker, go back 2 tiles');
				setTimeout(function(){
					player2score = player2score - 2;
					currentXpositionPlayer2 = 500;
					gameshield2.style.transform = 'translateX(' + currentXpositionPlayer2 + 'px)';
					player2are.innerHTML = player2score;
				}, 500);
			}
			if (player2score === obstacle3) {
				hitObstacle('White Walker', 1);
				info2.innerHTML = ('Hit a White Walker, go back 1 tiles');
				setTimeout(function(){
					player2score = player2score - 1;
					currentXpositionPlayer2 = 0;
					gameshield2.style.transform = 'translateX(' + currentXpositionPlayer2 + 'px)';
					player2are.innerHTML = player2score;
				}, 500);
			}
			if (player2score === obstacle4) {
				hitObstacle('White Walker', 4);
				info2.innerHTML = ('Hit a White Walker, go back 4 tiles');
				setTimeout(function(){
					player2score = player2score - 4;
					currentXpositionPlayer2 = 200;
					gameshield2.style.transform = 'translateX(' + currentXpositionPlayer2 + 'px)';
					player2are.innerHTML = player2score;
				}, 500);
			}
			if (player2score === obstacle5) {
				hitObstacle('White Walker', 2);
				info2.innerHTML = ('Hit a White Walker, go back 2 tiles');
				setTimeout(function(){
					player2score = player2score - 2;
					currentXpositionPlayer2 = 400;
					gameshield2.style.transform = 'translateX(' + currentXpositionPlayer2 + 'px)';
					player2are.innerHTML = player2score;
				}, 500);
			}
		}

		function checkWinner() {
			if (player2score === 30) {
				localStorage.winner = player2;
				setTimeout(function(){
					document.getElementById("winner-button").click();
				}, 2000);
			}
		}
	}
}



// den som vinner
const body = document.querySelector('body');
const winnerButton = document.createElement('a');
winnerButton.id = 'winner-button';
winnerButton.href = 'winner.html';

body.appendChild(winnerButton);







// traps

const obstacleText1 = document.querySelector('.obstacle-text1');
const obstacleText2 = document.querySelector('.obstacle-text2');
const obstacleText3 = document.querySelector('.obstacle-text3');
const obstacle = document.querySelector('.obstacle');
const obstacleContainer = document.querySelector('.obstacle-container');

function hitObstacle(icon, backTile) {
	obstacle.style.opacity = '1';
	obstacleText1.innerHTML = 'WHOOA"';
	obstacleText2.innerHTML = 'You hit a ' + icon;
	obstacleText3.innerHTML = 'go back ' + backTile + ' tiles!';
	obstacleContainer.style.background = 'rgba(0, 0, 0, 0.25)';

	setTimeout(function(){
		obstacle.style.opacity = '0';
		obstacleText1.innerHTML = '';
		obstacleText2.innerHTML = '';
		obstacleText3.innerHTML = '';
		obstacleContainer.style.background = 'transparent';
	}, 1400);
}



// viss nokon roller 6
function hitSix() {
	obstacle.style.opacity = '1';
	obstacleText1.innerHTML = 'HODOR!!!';
	obstacleText2.innerHTML = 'You rolled a 6';
	obstacleText3.innerHTML = 'Free roll';
	obstacleContainer.style.background = 'rgba(0, 0, 0, 0.30)';

	setTimeout(function(){
		obstacle.style.opacity = '0';
		obstacleText1.innerHTML = '';
		obstacleText2.innerHTML = '';
		obstacleText3.innerHTML = '';
		obstacleContainer.style.background = 'transparent';
	}, 1400);
}
