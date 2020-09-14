const readline = require("readline-sync");

const userItems = ["lint ball", "NeoPet Plushie"]

const sayName = (name) => {
    console.log("\n\nGoodmorning " + name +".") 
}
//v

const playerName = readline.question("\nwhat is your name? ")
sayName(playerName)

console.log("It's hard to get out of such a welcoming bed. Your room is a comfortable assortment of pastel colors, namely the plushies covering the walls. But you smell something unusual comming from the hallway. Could this be what woke you up? With your favorite NeoPet plushie in your arms, you step out of bed. The air is a bit cold, and your hair stands up. Let's have a look around the room. Type \"LOOK\". For a list of basic commands, type \"COMMANDS\". ")

let input = readline.question("What will you do? ").toLowerCase()
let splitInput = input.split(" ")
let command = splitInput[0]
let subject = splitInput[1]

let room = "bedroom1" 

const describeRoom = () => { 
   
    if(room === "bedroom1"){ 
        console.log("Across the room is a dresser, topped with your collection of furbies, a pocket knife, and various trinkets and bobbles you've collected. For some reason there is a jar of bathwater here. To the right of the dresser is your desk, where you usually put on makeup. Your eyes meet the reflection in the makeup mirror. \"Yup, that's me.\" To the left of the dresser is your closet, where you hang clothes you would rather not fold. Shelves around the room house yet more furbies and stuffies. You have a lot of roomates. The morning sunlight is gently comming through your windows, and you can hear your neighbor mowing their lawn outside. Everything is clean and orderly, except your outfit from the night before is strewn in the middle of the room. ")

    } else if(room === "bedroom2"){
        console.log("Across the room is a dresser, topped with your collection of furbies, a pocket knife, and various trinkets and bobbles you've collected. To the right of the dresser is your desk, where you usually put on makeup. Your eyes meet the reflection in the makeup mirror. \"Yup, that's me.\" To the left of the dresser is your closet, where you hang clothes you would rather not fold. Shelves around the room house yet more furbies and stuffies. You have a lot of roomates. The morning sunlight is gently comming through your windows, and you can hear your neighbor mowing their lawn outside. Everything is clean and orderly, except your outfit from the night before is strewn in the middle of the room. ")
    }   
    
}    

let workingHands = 2

const breakHand = () => {
    if(workingHands > 0){
        workingHands--
    }
}


while(command !== "die"){
    console.log(command, "-", subject)
    if(command === "live") {
        console.log("you don't die")
    } else if(command === "get" || command === "take"){
        if(subject === "bathwater"){
            console.log("you get bathwater")
            userItems.push("bathwater")
            room = "bedroom2"   
        } else if (subject === "furbie"){
            console.log("Bitch, you already have a plushie, it's name is Dunkin... Bitch.")
        }       
    } else if(command === "commands"){
        console.log("\n  LOOK \(look around at your surroundings\), \n  INSPECT \(take a closer look at something) \n  TAKE\/GET \(pick something up and take it with you\) \n  OPEN \(open shit\) \n  TALK \(talk outloud. also try \"TALK TO\"\) \n  HIT\/PUNCH \(fucking punch something\) \n  EAT\/DRINK \(yum yum\) \n  DIE \(you just die\) \n  LIVE \(you don't die\) \n")
    } else if(command === "items"){
        console.log(userItems)
    } else if(command === "drink bathwater"){
        let userHasBathWater = false
        for(let i = 0; i < userItems.length; i++){
            if(userItems[i] === "bathwater"){ 
                console.log("Mmm Tasty")
                userItems.splice(i, 1)
                userHasBathWater = true
                break
            } 
        } 
        if(!userHasBathWater){
            console.log("you don't have bathwater.")
        } 
    } else if(command === "look"){
        describeRoom() 
        
    } else if(command === "hit" || command === "punch"){
        if(!subject){
            console.log("you violently swing your arm in the air.")

        }
        if(subject === "dresser"){
            if(workingHands <= 0){
                console.log("your hands are broken.")
            } else{
                console.log("f. You broke a hand")
                breakHand()
            }
        }
    } else {
        console.log("you're too stupid for this action.")
    } 
    input = readline.question("what will you do now? ").toLowerCase()
    splitInput = input.split(" ")
    command = splitInput[0]
    subject = splitInput[1]
}



console.log("you die")