function LinkedList() {
  function Node(data) {
    this.data = data
    this.next = null
  }

  this.head = null
  this.length = 0

  LinkedList.prototype.append = function(data) {
    var node = new Node(data)
    if (this.head === null) {
      this.head = node
    } else {
      var current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.length++
  }

  LinkedList.prototype.insert = function(data, position) {
    if (position < 0 || position > this.length) return false
    var node = new Node(data)
    var current = this.head
    if (position === 0) {
      node.next = current
      this.head = node
    } else {
      var index = 0
      var previous
      while(index++ < position) {
        previous = current
        current = current.next
      }
      node.next = current
      previous.next = node
    }
    this.length++
    return true
  }

  LinkedList.prototype.removeAt = function(position) {
    if (position < 0 || position >= this.length) return false
    var current = this.head
    if (position === 0) {
      this.head = current.next
    } else {
      var index = 0
      var previous
      while(index++ < position) {
        previous = current
        current = current.next
      }
      previous.next = current.next
    }
    this.length--
    return true
  }

  LinkedList.prototype.indexOf = function(element) {
    var index = 0
    var current = this.head
    while(index < this.length) {
      var data = current.data
      if(data === element) {
        return index
      }
      current = current.next
      index++
    }
    return -1
  }

  LinkedList.prototype.get = function(position) {
    if (position < 0 || position >= this.length) return null
    var index = 0
    var current = this.head
    while(index++ < position) {
      current = current.next
    }
    return current.data
  }

  LinkedList.prototype.remove = function(element) {
    var index = this.indexOf(element)
    if (index === -1) return false
    return this.removeAt(index)
  }

  LinkedList.prototype.update = function(data, position) {
    if (position < 0 || position >= this.length) return false
    var index = 0
    var current = this.head
    while(index++ < position) {
      current = current.next
    }
    current.data = data
    return true
  }

  LinkedList.prototype.isEmpty = function() {
    if (this.length === 0) return true
    return false
  }

  LinkedList.prototype.size = function() {
    return this.length
  }

  LinkedList.prototype.toString = function() {
    var formatStr = ""
    var index = 0
    var current = this.head
    while(index++ < this.length) {
      formatStr += current.data + " "
      current = current.next
    } 
    return formatStr
  }
}