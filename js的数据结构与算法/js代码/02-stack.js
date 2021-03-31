function Stack() {
  this.items = []

  Stack.prototype.push = function(item) {
    return this.items.push(item)
  }

  Stack.prototype.pop = function() {
    return this.items.pop()
  }

  Stack.prototype.top = function() {
    return this.items[this.items.length-1]
  }

  Stack.prototype.size = function() {
    return this.items.length
  }

  Stack.prototype.isEmpty = function() {
    return !this.items.length
  }

  Stack.prototype.toString = function() {
    var formatStr=''
    for(var i=0; i<this.items.length; i++) {
      formatStr = formatStr + this.items[i]
    }
    return formatStr
  }
}

function decimal2Binary(value) {
  var stack = new Stack()
  while (value >= 1) {
    value = Math.floor(value / 2)
    remainder = value % 2
    stack.push(remainder)
  }
  return stack.toString()
}