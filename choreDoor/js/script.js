
var doorImage1 = document.querySelector('#door1')
var doorImage2 = document.querySelector('#door2')
var doorImage3 = document.querySelector('#door3')

var beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg'
var botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg'
var spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg'

var openDoor1
var openDoor2
var openDoor3

var numClosedDoors

var currentlyPlaying = true

var closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg'

const startButton = document.querySelector('#start');





const randomChoreDoorGenerator = () =>{
	numClosedDoors = 3
	var choreDoor = Math.floor(Math.random() * numClosedDoors)

	if(choreDoor === 1){
		openDoor1 = beachDoorPath
		openDoor2 = botDoorPath
		openDoor3 = spaceDoorPath

	}else if(choreDoor === 2){
		openDoor2 = beachDoorPath
		openDoor3 = botDoorPath
		openDoor1 = spaceDoorPath

	}else{
		openDoor3 = beachDoorPath
		openDoor1 = botDoorPath
		openDoor2 = spaceDoorPath

	}
	
}


const playDoor = (door) =>{
	//console.log(numClosedDoors)
	numClosedDoors--
	if(numClosedDoors === 1){
		gameover('win')
	}
	if (isBot(door)){
		gameover()
	}
	
}




doorImage1.onclick = ()=>{	

	if(currentlyPlaying && !isClicked(doorImage1)){
		doorImage1.src = openDoor1
		playDoor(doorImage1)
	}
	
}	

doorImage2.onclick = ()=>{
	if(currentlyPlaying && !isClicked(doorImage2)){
		doorImage2.src = openDoor2
		playDoor(doorImage2)
	}
	
	
}

doorImage3.onclick = ()=>{
	if(currentlyPlaying && !isClicked(doorImage3)){
		doorImage3.src = openDoor3
		playDoor(doorImage3)
	}
	
}

startButton.onclick = () =>{
	if(currentlyPlaying === false)startRound()
}

var startRound = () =>{
	doorImage1.src = closedDoorPath
	doorImage2.src = closedDoorPath
	doorImage3.src= closedDoorPath
	numClosedDoors = 3
	startButton.innerHTML = 'Good luck!'
	currentlyPlaying = true
	randomChoreDoorGenerator()
}

var isBot = (door)=>{
	
	if(door.src == botDoorPath){
		
		return true
	}else {
		
		return false
	}
}

var isClicked = (door)=>{
	
	if(door.src === closedDoorPath){
		return false
	}else{
		return true
	}

}

var gameover = (status)=>{
	if(status === 'win'){
		startButton.innerHTML= 'win! Play again?'
	}else{
		startButton.innerHTML = 'You lose!'
	}
	currentlyPlaying = false
}

startRound()

