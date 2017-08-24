function StackDataStructure () {

  this.stackControl = [];
  this.MAX_SIZE = 3;
  this.isEmpty = function(){
    return this.stackControl.length === 0;
  };
  this.canPush = function(){
    if (this.stackControl.length>=this.MAX_SIZE) {
      return false;
    }
    else {
      return true;
    }

  };
  this.push = function(element){

    if (this.stackControl.length===this.MAX_SIZE) {
      return "Stack Overflow";
    }
    else {
      this.stackControl.push(element);
      return this.stackControl;
    }
  };
  this.pop = function(){
    if (this.stackControl.length === 0) {
      return "Stack Underflow";
    }
    else {
      return this.stackControl.pop();
    }
  };
}

StackDataStructure.push(19);
StackDataStructure.push(88);
