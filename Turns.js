function Turns (wizardArr, spellArr) {
  this.wizardList = wizardArr;
  this.spellList = spellArr;
  this.turnsStack = [];

}


Turns.prototype.play = function () {

  var testCycles = 10;
  while (testCycles) {
    console.log('before new Turn. cycle:', testCycles);
    var turn = new Turn(this);
    console.log('after new Turn.');
    testCycles--;
  }

  this.turnsStack.forEach(function (turnElement) {
    console.log(turnElement.outcome);
  });   

  return console.log('Turns completed!');
};

