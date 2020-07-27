console.log("it's hooked!!!")
//testing dom destruction...
// const myBody = document.querySelector('body')
// console.log(myBody)
// const myH1 = document.querySelector('h1')
// myH1.innerText = 'FLing potatoes of the sky'

//couple of sleep hrs, before puttin in code what i got on paper...

//CORE OBJECT N FUNCTIONS
//==========================================================>
//Sets warZone,

const warZone = {
grid: 7,
attackFleet: 3,
aircraftSize: 3,
aircraftDown: 0,
//randomized initialized empty array.
enemyFleet: [
		{ coordinates: [0, 0, 0], kaputs: ["", "", ""] },
		{ coordinates: [0, 0, 0], kaputs: ["", "", ""] },
		{ coordinates: [0, 0, 0], kaputs: ["", "", ""] }
	],
aim: function(userGuess) {
	for (let i = 0; i < this.attackFleet; i++) {
		let aircraft = this.enemyFleet[i]
			let airInd = aircraft.coordinates.indexOf(userGuess)
				//we check if the aircraft was hit, if true spits a message
					if (aircraft.kaputs[airInd] === "hit") {
						promptController.promptToUser("Gir: We already destroyed that!!!!")
							return true
					} else if (airInd >= 0) {
						aircraft.kaputs[airInd] = "hit"
							promptController.promptKaputs(userGuess)
								promptController.promptToUser("Zim: A couple more misiles and you are dust!!")
					if (this.airDown(aircraft)) {
									promptController.promptToUser("Zim: Ha Ha Ha Stinky hoomannnss!!")
										this.aircraftDown++
						}
					return true
				}
			}
		promptController.promptHoomans(userGuess)
			promptController.promptToUser("Dib: You are not gonna win Zim!")
				return false
},
//conditionals for airCell hits
airDown: function(aircraft) {
	for (let i = 0; i < this.aircraftSize; i++)  {
		if (aircraft.kaputs[i] !== "hit") {
			return false
			}
		}
	return true
},
//feeds coordinates or random enemy aircrafts
aircraftPositioningRndmzd: function() {
	let coordinates
		for (let i = 0; i < this.attackFleet; i++) {
			do {
				coordinates = this.randomizedAircraftOrientationLocation()
					} while (this.airDownKaputs(coordinates))
						this.enemyFleet[i].coordinates = coordinates
		}
							console.log("Randomized Fleet coordinates: ")
								console.log(this.enemyFleet)
},
//orientation of the enermy aircraft 1 for horizontal anything 0 vertical
randomizedAircraftOrientationLocation: function() {
	let orientationVH = Math.floor(Math.random() * 2)
		let col
			let row
	if (orientationVH === 1) { 
		row = Math.floor(Math.random() * this.grid)
			col = Math.floor(Math.random() * (this.grid - this.aircraftSize + 1))
				} else { 
					col = Math.floor(Math.random() * this.grid)
						row = Math.floor(Math.random() * (this.grid - this.aircraftSize + 1))
		}
		let newAircraftSpots = []
			for (let i = 0; i < this.aircraftSize; i++) {
				if (orientationVH === 1) {
					newAircraftSpots.push(row + "" + (col + i))
						} else {
							newAircraftSpots.push((row + i) + "" + col)
			}
		}
		return newAircraftSpots
},

airDownKaputs: function(coordinates) {
		for (let i = 0; i < this.attackFleet; i++) {
			let aircraft = this.enemyFleet[i]
			for (let x = 0; x < coordinates.length; x++) {
				if (aircraft.coordinates.indexOf(coordinates[x]) >= 0) {
					return true
				}
			}
		}
		return false
	}	
}

//BEHAVIORS OF THE GAME
//==========================================================>
//Links DOM elements to the logic core.
let promptController = {
	promptHoomans: function(location) {
		let cell = document.getElementById(location)
		cell.setAttribute("class", "miss")
	},
	promptKaputs: function(location) {
		let cell = document.getElementById(location)
		cell.setAttribute("class", "pKaputs")
	},
	promptToUser: function(msg) {
		let inputFeedback = document.getElementById("inputFeedback")
		inputFeedback.innerHTML = msg
	},
}
//BEHAVIORS OF THE GAME
//==========================================================>
//Starts a variable and counts misiles.
let misileCounter = {
	userGuesses: 0,
	processGuess: function(userGuess) {
		let location = yLetterToNum(userGuess)
		if (location) {
			this.userGuesses++
			let hit = warZone.aim(location)
			if (hit && warZone.aircraftDown === warZone.attackFleet) {
				promptController.promptToUser("Zim: It only took " + this.userGuesses + " rockets to destroy your resources!!")
			}
		}
	}
}

//BEHAVIORS OF THE GAME
//==========================================================>
//checks for input validity, if passed turns the first letter from user coordinate into a number
function yLetterToNum(userGuess) {
	let alphabet = ["A", "B", "C", "D", "E", "F", "G"]
		if (userGuess === null || userGuess.length !== 2) {
			alert("Gir: Access your destruction coordinates Master Zim!!")
			} else {
					let firstChar = userGuess.charAt(0)
						let row = alphabet.indexOf(firstChar)
							let column = userGuess.charAt(1)
				if (isNaN(row) || isNaN(column)) {
									alert("Gir: Focus on your attack Map!! not Beyond!")
			} else if (row < 0 || row >= warZone.grid ||
		           							column < 0 || column >= warZone.grid) {
												alert("Gir: Focus on your attack Map!! not Beyond!")
			} else {
			return row + column
		}
	}
	return null
}

//BEHAVIORS OF THE GAME
//==========================================================>
// more DOm NOnSense Saveeee meeeeee from thiiissssss.....
function triggerShoot() {
	let userInput = document.getElementById("userInput")
//sends user input to Caps c to C
		let userGuess = userInput.value.toUpperCase()
			misileCounter.processGuess(userGuess)
				userInput.value = ""
}

function triggerShootWithK(kaboom) {
	let shoot = document.getElementById("shoot")
// old ie event doesnt pass to listener correctly so we use window
		kaboom = kaboom || window.event
		//listens to Enter Key to pass value
			if (kaboom.keyCode === 13) {
				shoot.click()
		return false
	}
}


// this phase is triggered after the page has fully loaded

window.onload = init

function init() {
// passes input to the funtion when you press enter
	let userInput = document.getElementById("userInput")
		userInput.onkeypress = triggerShootWithK
// randomized the aircraft on initialization
	warZone.aircraftPositioningRndmzd()
// trigger the function
	let shoot = document.getElementById("shoot")
		shoot.onclick = triggerShoot
}

//hardcoded testing coordinates
// enemyFleet: [
// 	{ coordinates: ["43", "53", "63"], kaputs: ["", "", ""] },
// 	{ coordinates: ["15", "25", "35"], kaputs: ["", "", ""] },
// 	{ coordinates: ["10", "11", "12"], kaputs: ["", "", ""] }
// ],

