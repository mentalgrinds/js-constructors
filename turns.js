var wizards = [];
wizards.push( new Spellcaster('Wiz', 212, 2367)); 
wizards.push( new Spellcaster('woz', 345, 2678)); 
wizards.push( new Spellcaster('whoa', 387, 3204)); 
wizards.push( new FireSpellcaster('Diz', 245, 1405)); 
wizards.push( new FireSpellcaster('Daz', 388 , 2099)); 
wizards.push( new FireSpellcaster('Doh', 410, 2643)); 

var spellBook = [];
spellBook.push( new DamageSpell('Scorch', 5, 50, 'Deals a light amount of fire damage.'));
spellBook.push( new DamageSpell('Fireball', 27, 150, 'Deals moderate fire damage.'));
spellBook.push( new DamageSpell('Pyroblast', 52, 300, 'Deals heavy fire damage.'));
spellBook.push( new DamageSpell('Creamatorium', 104, 550, 'Deals heavy fire damage.'));
spellBook.push( new DamageSpell('Frostbolt', 25, 140, 'Deals moderate ice damage.'));
spellBook.push( new DamageSpell('Lightning Blast', 40, 221, 'Deals moderate-heavy lightning damage.'));
spellBook.push( new DamageSpell('Decree of Annihilation', 99, 600, 'Deals massive non-elemental damage.'));
spellBook.push( new DamageSpell('Staff whack', 0, 27, 'Whack an enemy with a staff.'));

var lastAttacker =  0;

function Turn (wizardArr, spellsArr) {
  this.wizardList = wizardArr;
  this.spellsList = spellsArr;
  
  this.owner = this.determineOwner();
  this.action = this.selectSpell();
  this.target = this.determineTarget(this.owner);

}

Turn.prototype.getRndIndex = function (length) {
  return Math.floor(Math.random() * length);
};

Turn.prototype.determineOwner = function () {
  // if (lastAttacker === null) {
  //   this.owner = this.wizardList[0];
  //   lastAttacker = 0;
  // } else {
  //   this.owner = this.wizardList[lastAttacker + 1];  
  //   lastAttacker++;
  // }
  this.owner = this.wizardList[lastAttacker];  
  lastAttacker++;
};

Turn.prototype.determineTarget = function (owner) {
  var target = this.wizardList[this.getRndIndex(this.wizardList.length)];

  while (owner == target) {
    this.determineTarget(owner);
  }
  return target;
};

Turn.prototype.selectSpell = function () {
  return this.spellsList[this.getRndIndex(this.spellsList.length)];
};














var testCounter = 6;

while (testCounter) {
  var turn = new Turn(wizards, spellBook);
  console.log(turn);
  testCounter--;
}