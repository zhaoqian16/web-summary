function PriorityQueue() {

  function QueueElement(element, priority) {
    this.element = element
    this.priority = priority
  }

  this.items = []
  PriorityQueue.prototype.enqueue = function(element, priority) {
    var queueElement = new QueueElement(element, priority)

    if (this.items.length === 0) {
      this.items.push(queueElement)
    } else {
      var added = false
      for (var i=0; i<this.items.length; i++) {
        if (queueElemnt.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement)
          added = true
          break
        }
      }
      if (!added) {
        this.items.push(queueElement)
      }
    }
  }
}