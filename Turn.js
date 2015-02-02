function Turn (turns) {
  this.turnsMgr = turns;
  this.wizLst = turns.wizardList;
  this.spells = turns.spellList;
  this.outcome;

  if (this.turnsMgr.turnsStack) {
    this.owner = this.determineOwner(this.wizLst[this.wizLst.length - 1]);  
  } else {
    this.owner = this.determineOwner();
  }
  
  this.action = this.selectSpell();
  this.target = this.determineTarget(this.owner);
  this.outcome = this.resolveAttack();
  this.turnsMgr.turnsStack.push(this);

}

Turn.prototype.getRndIndex = function (length) {
  return Math.floor(Math.random() * length);
};

Turn.prototype.determineOwner = function (lastAttacker) {
  if (lastAttacker === undefined) {
    return this.wizLst[0];
  } else {
    
    var lastAttackerIdx = this.wizLst.indexOf(lastAttacker);

    if (lastAttackerIdx === -1 || lastAttackerIdx >= this.wizLst.length - 1) {
      return this.wizLst[0];
    } else {
      return this.wizLst[lastAttackerIdx + 1];
    }
  }

};

Turn.prototype.determineTarget = function (owner) {
  var ownerIndex = this.wizLst.indexOf(owner);
  var ownerlessWizardList = this.wizLst.slice(ownerIndex, ownerIndex + 1);
  var target = ownerlessWizardList[this.getRndIndex(ownerlessWizardList.length)];
  
  return target;
};

Turn.prototype.selectSpell = function () {
  return this.spells[this.getRndIndex(this.spells.length)];
};

Turn.prototype.resolveAttack = function () {
  if (this.owner && this.action && this.target) {
    this.owner.invoke(this.action, this.target);
    console.log(this.target.name, 'health ', this.target.health);
    var outcome = '';
    if (this.target.isAlive) {
      outcome = outcome.concat(this.owner.name);
      outcome = outcome.concat(' cast ', this.action.name);
      outcome = outcome.concat(' at ', this.target.name);
      outcome = outcome.concat(', for ', this.action.damage);
      return outcome;
    } else {
      outcome = outcome.concat(this.owner.name);
      outcome = outcome.concat(' killed ', this.target.name);
      outcome = outcome.concat(' with ', this.action.name);
      outcome = outcome.concat(', for ', this.action.damage);
      this.wizLst.splice(this.wizLst.indexOf(this.target),1);
      return outcome;
    }
  } else {
    console.log('ERROR: Check Owner=>' + this.owner + ' Check Action=>' + this.action + ' Check Target=>' + this.target);
  }

  
};