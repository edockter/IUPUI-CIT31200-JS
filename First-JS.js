// CIT31200 - Advanced Web Site Design
// Javascript Vol-1 Homework
// By Eric Dockter
setTimeout(function(){

    alert("It's the year 2250. Hot pants are the new currency. A skeleton approaches. Your collection of hot pants is in danger.");

    var monsterHP = 20;     // let's start with 20hp
    var playerHP = 25;
    var criticalString = "CRITICAL SHIT!  ";
    var hitChanceMultiplier = 0.4;

    do {
        var weapon = prompt("You see a sword, a bow and a footlong hot dog.  What do you choose?");     // What should I do for the first choice?

        if (weapon === "sword") {
            hitChanceMultiplier = 0.70;
        }
        else if (weapon === "bow") {
            hitChanceMultiplier = 0.60;
        }
        else if (weapon === "footlong hot dog") {
            hitChanceMultiplier = 1;      // Footlong hot dog is OP
        }
        else {
            alert("You reach for a " + weapon + " but forget that item is nowhere near you.  The monster feels embarassed for you and takes a half-hearted swipe, taking 1 of your hot pants.");
            playerHP -= 1;
        }
    } while (weapon != "sword" && weapon != "bow" && weapon != "footlong hot dog");

    alert("You pick up the " + weapon + " and prepare to do battle.  The skeleton seems surprised.");

    do {
        var playerDamage = Math.round(Math.random() * 5);
        var monsterDamage = Math.round(Math.random() * 4);
        var hit = Math.round(Math.random() * hitChanceMultiplier);
        var critical = Math.round(Math.random());
        
        if (critical === 1) {
            playerDamage += 4;
        }
        if (hit === 1) {    
            alert(((critical === 1) ? criticalString : "") + 
                "Hit landed! You did " + playerDamage + "damage.  The monster now has " + monsterHP + " hot pants.");
            
            monsterHP = monsterHP - playerDamage;
        }
        else {
            alert("You missed, ya dummy! That monster still has " + monsterHP + " hot pants.");
        }

        alert("The monster's visibly annoyed. He takes a swing and does " + monsterDamage + " damage, leaving you with " + playerHP + " .  Your turn.");
    }  while (monsterHP > 0 && playerHP > 0);

    if (monsterHP < 0) {
        alert("Congratulations. You have defeated the attacking monster and live to fight another day. He had a family you know.");
    }
    else if (playerHP < 0) {
        alert("Monster kicked your ass. Too bad, so sad. You died. The monster took his " + monsterHP + " hot pants and went on to graduate summa cum laude from Taco Bell University (Harvard fell on hard times).");
    }
    
}, 2000);