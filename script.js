/*
	 ico-1 = paper
	 ico-2 = rock
	 ico-3 = scissors
*/

//DOM select
const icons = document.getElementsByClassName('firstColumnIcon');
const myChoose = document.getElementById('myChoose');
const button = document.getElementById('button');
/*const buttonStop = document.getElementById('buttonStop');*/
const timer = document.getElementById('timer');
const enemyChoose = document.getElementById('enemyChoose');
const selectScoreUser = document.getElementById('scoreUser');
const selectScoreBot = document.getElementById('scoreBot');


const ico = document.createElement('img'); //create tag img cuz i need show that icon
const secondIco = document.createElement('img');  // create tag for a "bot" choose
ico.style.width = '125px'; // classes for icon that choosed
ico.style.height = '125px';
secondIco.style.width = '125px'; 
secondIco.style.height = '125px';


let check = 0;
let moveUser = '';
let moveBot = '';
let scoreUser = 0;
let scoreBot = 0;


for (let i = 0; i < icons.length; i++) {
	icons[i].addEventListener('click', click);
	function click() {
		myChoose.appendChild(ico); // adding img to div if user clicks 
		switch (i) {
			case 0:
				ico.src = 'ico-1.png';
				check = 1;
				moveUser = 'paper';
				break;
			case 1:
				ico.src = 'ico-2.png';
				check = 2;
				moveUser = 'rock';
				break;
			case 2:
				ico.src = 'ico-3.png';
				check = 3;
				moveUser = 'scissors';
				break;
		}
	}
}

button.addEventListener('click', clickOnButton);
function clickOnButton(){
	/*rand = Math.floor(Math.random() * 3) + 1; // random number to select the move*/
	enemyChoose.appendChild(secondIco); // adding img to div

	//show the timer
	let numberOfSecond = 4;
	setTimeout(count, 1000);
	function count() {
		let rand = Math.floor(Math.random() * 3) + 1; // random number to select the move
	    numberOfSecond--;
	    //algoritm of the game
	    if (numberOfSecond > 0) {
	      setTimeout(count, 1000);
	    } 
	    if (numberOfSecond === 0) {
	    	numberOfSecond = 4;
	    	count();//show again timer after 3sec over & over again before user's click "Stop game"

	    	//bot choose
	    	switch (rand) {
			case 1:
				secondIco.src = `ico-1.png`;
				moveBot = 'paper';
				break;
			case 2:
				secondIco.src = `ico-2.png`;
				moveBot = 'rock';
				break;
			case 3:
				secondIco.src = `ico-3.png`;
				moveBot = 'scissors';
				break;
		}

	    	/*buttonStop.onclick = function () {
				clearTimeout(count);
			}*/
	    }
	    timer.innerHTML = numberOfSecond;
	}

/*buttonStop.onclick = function () {
		console.log('clicked!');
		clearInterval(autoRun);
	}*/
	let timeDelay = numberOfSecond * 1000;
	let delay = (() => {
		//algoritm of the game
		if (moveBot === moveUser) {
			console.log('draw');
		}
		else if (moveUser === 'paper' && moveBot === 'rock') {
			console.log('user win!');
			scoreUser += 1; 
			selectScoreUser.innerHTML = scoreUser;
		}
		else if (moveUser === 'rock' && moveBot === 'scissors') {
			console.log('user win!');	
			scoreUser += 1;
			selectScoreUser.innerHTML = scoreUser;
		}
		else if (moveUser === 'scissors' && moveBot === 'paper') {
			console.log('user win!');
			scoreUser += 1;
			selectScoreUser.innerHTML = scoreUser;
		} else if (moveUser === '') {
			scoreBot = scoreBot;
			scoreUser = scoreUser;
		} else {
			console.log('you lose!');
			scoreBot += 1;
			selectScoreBot.innerHTML = scoreBot;
		}
	});
	setInterval(delay, timeDelay);//run the game over and over again before user's scick on "stop game" 
}




