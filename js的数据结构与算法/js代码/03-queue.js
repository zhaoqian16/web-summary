// 普通队列
function Queue() {
  this.items = []

  Queue.prototype.enqueue = function(item) {
    return this.items.push(item)
  }

  Queue.prototype.dequeue = function() {
    return this.items.shift()
  }

  Queue.prototype.front = function() {
    return this.items[0]
  }

  Queue.prototype.isEmpty = function() {
    return !this.items.length
  }

  Queue.prototype.size = function() {
    return this.items.length
  }

  Queue.prototype.toString = function() {
    var formatStr = ''
    for(var i=0; i<this.items.length; i++) {
      formatStr = formatStr + this.items[i] + " "
    }
    return formatStr
  }
}
