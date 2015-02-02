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