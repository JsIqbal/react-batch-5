const police = {
    gun () {
        console.log("A function inside Object");
    },

    bullet: 20
}

police.gun();

console.log("I want to see your bullets!", police.bullet);