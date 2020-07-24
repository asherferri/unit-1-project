console.log("it's hooked!!!")
//testing dom destruction...
const myBody = document.querySelector('body')
console.log(myBody)
const myH1 = document.querySelector('h1')
myH1.innerText = 'FLing potatoes of the sky'

//couple of sleep hrs, before puttin in code what i got on paper...

const warZone = {
	grid: 7,
	attackFleet: 3,
	aircraftSize: 3,
	aircraftDown: 0,
//start coordinates
	enemyFleet: [
		{ coordinates: ["43", "53", "63"], kaputs: ["", "", ""] },
		{ coordinates: ["15", "25", "35"], kaputs: ["", "", ""] },
		{ coordinates: ["10", "11", "12"], kaputs: ["", "", ""] }
	],
}