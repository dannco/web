var props = ["startClass","weaponType","offHand",
    "armor","magic","startGift"];

var values = [[ // Deprived not included
    "Warrior","Knight",
    "Wanderer","Thief",
    "Bandit","Hunter",
    "Sorcerer","Pyromancer",
    "Cleric"
],[
    "Fist Weapon","Hammer",
    "Great Hammer","Axe",
    "Greataxe","Dagger",
    "Thrust Sword","Straight Sword",
    "Greatsword","Ultra Greatsword",
    "Katana","Curved Sword",
    "Curved Greatsword","Spear",
    "Halberd","Whip"
],[
    "No off-hand","Light shield",
    "Normal shield","Large shield",
    "Dark hand", "Secondary weapon"
],[
"Starting Class Set"
,"Shadow Set"
,"Black Sorcerer Set"
,"Channeler Set"
,"Maiden Set"
,"Antiquated Set"
,"Hollow Thief Set"
,"Painting Guardian Set"
,"Hollow Warrior Set"
,"Hollow Soldier Set"
,"Dingy Set"
,"Gwyndolin Moonlight Set"
,"Big Hat's Set"
,"Gold-Hemmed Black Set"
,"Crimson Set"
,"Black Set"
,"Witch Set"
,"Xanthous Set"
,"Chain Set"
,"Great Lord Set"
,"Chester's Set DLC"
,"Lord's Blade Set DLC"
,"Iron Set"
,"Eastern Set"
,"Adventurer's Set"
,"Balder Set"
,"Thorns Set"
,"Dark Set"
,"Elite Knight Set"
,"Ornstein's Set"
,"Crystalline Set"
,"Brass Set"
,"Favor Set"
,"Catarina Set"
,"Silver Knight Set"
,"Black Knight Set"
,"Paladin Set"
,"Cleric Set"
,"Steel Set"
,"Artorias' Set DLC"
,"Gough's Set DLC"
,"Black Iron Set"
,"Giant Armor Set"
,"Havel's Set"
,"Smough's Set"
,"Iron Golem Set"
,"Stone Knight Set"
,"Guardian Set DLC"
],[
    "No magic","Sorcery","Pyromancy","Miracles"
],[ 
    "Binoculars","Black Firebomb",
    "Divine Blessing", "Master Key",
    "Old Witch's Ring", "Pendant",
    "Tiny Being's Ring", "Twin Humanities"
]];




function rollDS1() {
    for (i in props) {
        var roll = Math.floor(Math.random()*values[i].length);
        var result = values[i][roll];
        if (i==2 && roll==5) { // if dual wielding, roll the specific value from the weapon table.
            roll = Math.floor(Math.random()*values[1].length);
            result = values[1][roll];
        }
        // insert the rolled value into the element with the same name
        document.getElementById(props[i]).innerHTML = result; 
    }
}
function rollDS2() {}





