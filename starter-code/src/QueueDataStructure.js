
function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 3;
  this.isEmpty = function (){
    if (this.queueControl.length===0) {
      return true;
    }
    else {
      return false;
    }
  };

  this.canEnqueue = function(){
    if (this.queueControl.length>=this.MAX_SIZE) {
      return false;
    }
    else {
      return true;
    }
  };

  this.enqueue = function(element){

    if (this.queueControl.length===this.MAX_SIZE) {
      return "Queue Overflow";
    }
    else {
      this.queueControl.unshift(element);
      return this.queueControl;
    }
  };


  this.dequeue = function(element){
    if (this.queueControl.length === 0) {
      return "Queue Underflow";
    }
    else {
      return this.queueControl.pop(element);
    }
  };

}

var queue = new QueueDataStructure();
