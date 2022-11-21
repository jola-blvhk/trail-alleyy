

class Queue {
  constructor(element) {
    this.element = {};
    this.head = 0;
    this.tail = 0;
  }

  //add to the queue
  enqueue(element) {
    this.elements.[this.tail] = element;
    this.tail++;
  }

  //remove from the queue 
  dequeue(element) {
    this.elements[this.head] = element;
    delete element;
    this head++;

  }
}

var Remi = 3


console.log(Remi)