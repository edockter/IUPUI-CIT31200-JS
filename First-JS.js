// CIT31200 - Advanced Web Site Design
// Javascript Vol-1 Homework
// By Eric Dockter

// added 2 second timer. want this to load after html and apparently edge fonts takes forever
setTimeout(function(){

    alert("It's the year 2250. The future is pretty nice; its basically like Futurama with less jokes. You work as pizza delivery guy; a fairly mundane career.");
    alert("You arrive at a customer's house with your first delivery of the day. The door slot opens and you fire your pizza cannon at their house.");
    alert("I forgot to mention the worst thing about the future -- there are rogue skeletons roaming the streets. Against all logic, they love to steal and eat pizza. A skeleton popped out of the ground and ate the pizza in midair. You have to take action.");
    
    var monsterHP = 20;     
    var playerHP = 25;
    
    var playerHitChance = 0.6;  // punish the player if they somehow pick another weapon
    var monsterHitChance = 0.5; // 50% chance, seems fair

    do {
        var weapon = prompt("Within reach is a sword, a bow and a footlong hot dog.  You're unsure why these items are on your car's dashboard but you don't have time for questions.  What do you choose?");
        
        switch (weapon) {
        case "sword":
            playerHitChance = 0.30;
            break;
            
        case "bow":
            playerHitChance = 0.40;
            break;
        
        case "footlong hot dog":
            playerHitChance = 0.1;      // Footlong hot dog is OP
            break;
        
        default:
            alert("You reach for a " + weapon + " but forget that item is nowhere near you.  The skeleton feels embarassed for you. His snickering causes you to drop 1 health point.");
            playerHP -= 1;
        }
    } while (weapon != "sword" && weapon != "bow" && weapon != "footlong hot dog");

    alert("You pick up the " + weapon + " and prepare to do battle.  The skeleton grins (like always) and adopts a defensive posture.");

    do {
        var playerDamage = Math.round(Math.random() * 5);       // Give the player a "house advantage"
        var criticalDamage = 0;
        var monsterDamage = Math.round(Math.random() * 4);
        var hit = Math.random();
        var monsterHit = Math.Random();
        var critical = Math.round(Math.random());
        
        if (critical === 1) {
            criticalDamage += Math.round(Math.random() * 6);
            playerDamage += criticalDamage;
        }
        if (hit > playerHitChance) {
            monsterHP -= playerDamage;            
            alert(((critical === 1) ? "C-C-C-CRITICAL HIT!  You did "+ criticalDamage + "extra damage!  " : "") + 
                "You hit the skeleton and do " + playerDamage + " damage.  The monster now has " + monsterHP + " points.");
        }
        else {
            alert("You missed, ya dummy! That skeleton still has " + monsterHP + " points.");
        }
        
        if (monsterHit > monsterHitChance) {
            playerHP -= monsterDamage;
            alert("The skeleton continues grinning smugly. He takes a slice of piping hot pizza from his ribcage and throws it at you, doing " + monsterDamage + " of burn damage. You now have " + playerHP + " HP.  Your turn (isn't it nice of him to take turns?).");
        }
        else {
            alert("The skeleton throws a slice and misses, doing no damage to you but leaving a greasy smudge on your rocket-car. You still have " + playerHP + " points.");
        }        
    }  while (monsterHP > 0 && playerHP > 0);

    if (monsterHP < 0) {
        alert("You have defeated the attacking skeleton and can continue your work day. He was just trying to feed his skeleton family, you know; if you had asked him to stop he would have. Congratulations!");
    }
    else if (playerHP < 0) {
        alert("You died doing what you loved -- being beaten to death by a skeleton.  He took his " + monsterHP + " hit points and went back to school to change his life.  He went on to graduate summa cum laude from Taco Bell University (Harvard fell on hard times).");
    }
    else if (playerHP < 0 && monsterHP < 0) {
        alert("You and the skeleton have both perished. The police assume this was a suicide pact between a husband and wife (you don't want to see your obituary, trust me). ");
    }

}, 2000);