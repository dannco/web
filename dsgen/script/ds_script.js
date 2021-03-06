var props = ["startClass","weaponType","offHand","armor","magic","startGift"];
    
var armors = [[
"Agdayne's Set","Astrologist's Set","Black Dragon Set","Black Hollow Mage Set","Black Set","Black Witch Set","Bone King Set","Brigand Set","Cale's Set","Chaos Set","Desert Sorceress Set","Dingy Set","Dragon Acolyte Set","Fume Sorcerer Set","Grave Warden Set","Hexer's Set","Hunter's Set","Imported Set","Jester's Set","Leydia Black Set","Leydia White Set","Lion Mage Set","Lion Warrior Set","Llewellyn Set","Lucatiel's Set","Manikin Set","Monastery Set","Moon Butterfly Set","Nahr Alma Set","Peasant Set","Priestess Set","Prisoner's Set","Rogue's Set","Saint's Set","Set of Aurous","Judgment Set","Shadow Set","Tattered Set","Thief Set","Tseldora Set","Varangian Set","Wanderer Set","White Hollow Mage Set","White Priest Set"
],[
"Alonne's Set","Alonne Captain Set","Alva Set","Archdrake Set","Aurous' Set","Bandit Set","Bell Keeper Set","Benhart's Set","Creighton's Set","Drakeblood Set","Elite Knight Set","Executioner Set","Falconer Set","Forlorn's Set","Gyrm Set","Hard Leather Set","Heide Knight Set","Hollow Infantry Set","Hollow Soldier Set","Infantry Set","Insolent Set","King's Set","Knight Set","Pate's Set","Penal Set","Royal Soldier Set","Royal Swordsman Set","Ruin Set","Targray's Set","Throne Watcher Set","Traveling Merchant Set","Xanthous Set"
],[
"Alonne Knight Set","Catarina Set","Dragonrider Set","Drakekeeper Set","Drangleic Set","Faraam Set","Gyrm Warrior Set","Havel's Set","Imperious Set","Ironclad Set","Looking Glass Set","Mad Warrior Set","Mastodon Set","Old Ironclad Set","Old Knight Set","Raime's Set","Rusted Mastodon Set","Sanctum Knight Set","Smelter Demon Set","Steel Set","Syan's Set","Throne Defender Set","Velstadt's Set","Vengarl's Set"
]];


var valuesDS1 = [[
"Warrior","Knight","Wanderer","Thief","Bandit","Hunter","Sorcerer","Pyromancer","Cleric"
],[
"Fist Weapon","Hammer","Great Hammer","Axe","Greataxe","Dagger","Thrust Sword","Straight Sword","Greatsword","Ultra Greatsword","Katana","Curved Sword","Curved Greatsword","Spear","Halberd","Whip"
],[
"No off-hand","Light shield","Normal shield","Large shield","Dark hand", "Secondary weapon"
],[
"Starting Class Set","Shadow Set","Black Sorcerer Set","Channeler Set","Maiden Set","Antiquated Set","Hollow Thief Set","Painting Guardian Set","Hollow Warrior Set","Hollow Soldier Set","Dingy Set","Gwyndolin Moonlight Set","Big Hat's Set","Gold-Hemmed Black Set","Crimson Set","Black Set","Witch Set","Xanthous Set","Chain Set","Great Lord Set","Chester's Set (DLC)","Lord's Blade Set (DLC)","Iron Set","Eastern Set","Adventurer's Set","Balder Set","Thorns Set","Dark Set","Elite Knight Set","Ornstein's Set","Crystalline Set","Brass Set","Favor Set","Catarina Set","Silver Knight Set","Black Knight Set","Paladin Set","Cleric Set","Steel Set","Artorias' Set (DLC)","Gough's Set (DLC)","Black Iron Set","Giant Armor Set","Havel's Set","Smough's Set","Iron Golem Set","Stone Knight Set","Guardian Set (DLC)"
],[
"No magic","Sorcery","Pyromancy","Miracles"
],[ 
"Binoculars","Black Firebomb","Divine Blessing", "Master Key","Old Witch's Ring", "Pendant","Tiny Being's Ring", "Twin Humanities"
]];

var valuesDS2 = [[
    "Warrior","Knight","Swordsman","Explorer","Bandit","Sorcerer","Cleric"
],[
    "Fist Weapon","Hammer","Great Hammer","Axe","Greataxe","Dagger","Thrust Sword","Straight Sword","Greatsword","Ultra Greatsword","Katana","Curved Sword","Curved Greatsword","Spear","Halberd","Whip","Twinblade"
],[
    "No off-hand","Light shield","Normal shield","Large shield","Secondary weapon"
],[
    "Light Armor : ","Medium Armor : ","Heavy Armor : "
],[
"No magic","Sorcery","Hexes","Pyromancy","Miracles"
],[ 
"Nothing","Life Ring","Human Effigy","Healing Wares","Homeward Bone","Seed of a Tree of Giants","Bonfire Ascetic","Petrified Something"
]];

function roll() {
    var rollDS2 = document.getElementById("toggle1").checked;
    var values = rollDS2?valuesDS2:valuesDS1;
    for (i in props) {
        var roll = Math.floor(Math.random()*values[i].length);
        var result = values[i][roll];
        if (i==2 && roll==4) { // if dual wielding, roll the specific value from the weapon table.
            roll = Math.floor(Math.random()*values[1].length);
            result = values[1][roll];
        } else if (rollDS2 && i==3) {
            result += armors[roll][Math.floor(Math.random()*armors[roll].length)]; 
        }
        // insert the rolled value into the element with the same name
        document.getElementById(props[i]).innerHTML = result; 
    }
}






