for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`)
   
}

const gifts = ["teddy bear", "drone", "doll"]

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wapped ${gifts[i]} and added a bow!`)
        debugger
    }
    return gifts;
}
wrapGifts(gifts);




function writeCards(names, event) {
    const newArray = [] 
    for (let g = 0; g < names.length; g++) {
        console.log(`Thank you, ${names[g]}, for the wonderful ${event} gift!`)
        newArray.push(`Thank you, ${names[g]}, for the wonderful ${event} gift!`)
}
return newArray
}
writeCards(["Charlie", "Samip", "Ali"], "birthday")



function countDown(number) {
    
    while (number >= 0) {
        console.log(number--)
    }
}

