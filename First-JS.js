// CIT31200 - Advanced Web Site Design
// Javascript Vol-1 Homework
// By Eric Dockter
setTimeout(function(){

    alert("It's the year 2250. The future is pretty nice; it's basically Futurama. You work as pizza delivery guy; a fairly mundane career. Nothing interesting every really happens to you.");
    alert("You arrive at a customer's house with your first delivery of the day. The door slot opens and you fire your pizza cannon into the slot.")
    
    var monsterHP = 20;     
    var playerHP = 25;
    
    var playerHitChance = 0.6;  // punish the player if they somehow pick another weapon
    var monsterHitChance = 0.5; // 50% chance, seems fair

    do {
        var weapon = prompt("Within reach is a sword, a bow and a footlong hot dog.  You're unsure why these items are on your dashboard but you don't have time for questions.  What do you choose?");

        if (weapon === "sword") {
            playerHitChance = 0.30;
        }
        else if (weapon === "bow") {
            playerHitChance = 0.40;
        }
        else if (weapon === "footlong hot dog") {
            playerHitChance = 0.1;      // Footlong hot dog is OP
        }
        else {
            alert("You reach for a " + weapon + " but forget that item is nowhere near you.  The monster feels embarassed for you. His snickering causes you to drop 1 health point.");
            playerHP -= 1;
        }
    } while (weapon != "sword" && weapon != "bow" && weapon != "footlong hot dog");

    alert("You pick up the " + weapon + " and prepare to do battle.  The monster seems surprised.");

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
                "You hit the monster and do " + playerDamage + " damage.  The monster now has " + monsterHP + " points.");
        }
        else {
            alert("You missed, ya dummy! That monster still has " + monsterHP + " points.");
        }
        
        if (monsterHit > monsterHitChance) {
            playerHP -= monsterDamage;
            alert("The monster's visibly annoyed. He takes a swing and does " + monsterDamage + " damage, leaving you with " + playerHP + " .  Your turn.");
        }
        else {
            alert("The monster misses, doing no damage to you or anyone else. You still have " + playerHP + " points.");
        }        
    }  while (monsterHP > 0 && playerHP > 0);

    if (monsterHP < 0) {
        alert("Congratulations. You have defeated the attacking monster and live to deliver more pizzas. He had a family you know; you didn't have to do that.");
    }
    else if (playerHP < 0) {
        alert("You died doing what you loved -- being beaten to death by a monster.  The monster took his " + monsterHP + " points and went back to school to change his life.  He went on to graduate summa cum laude from Taco Bell University (Harvard fell on hard times).");
    }
    else if (playerHP < 0 && monsterHP < 0) {
        alert("You and monster have both perished. The police assume this was a suicide pact between a husband and wife (you don't want to see your obituary, trust me). ");
    }

}, 2000);