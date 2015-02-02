function Turns (wizardArr, spellArr) {
  this.wizardList = wizardArr;
  this.spellList = spellArr;
  this.turnsStack = [];

}


Turns.prototype.play = function () {

  while (this.wizardList.length > 2) {
    var turn = new Turn(this);
  }

  this.turnsStack.forEach(function (turnElement) {
    console.log(turnElement.outcome);
  });   

  return console.log('Turns completed!');
};

