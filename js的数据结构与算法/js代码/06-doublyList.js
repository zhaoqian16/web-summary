function DoublyList() {
  function Node(data) {
    this.data = data
    this.prev = null
    this.next = null
  }
  this.head = null
  this.tail = null
  this.length = 0

  DoublyList.prototype.append = function(data) {
    // 情况1：this.length = 0
    // 情况2：this.length != 0
    var node = new Node(data)
    if (this.length === 0) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.length += 1
  }

  DoublyList.prototype.forwardString = function() {
    var formatStr = ""
    var current = this.tail
    while(current) {
      formatStr += current.data + " "
      current = current.prev
    }
    return formatStr
  }

  DoublyList.prototype.backwordString = function() {
    var formatStr = ""
    var current = this.head
    while(current) {
      formatStr += current.data + " "
      current = current.next
    }
    return formatStr
  }

  DoublyList.prototype.toString = function() {
    return this.backwordString()
  }

  DoublyList.prototype.insert = function(data, position) {
    if (position < 0 || position > this.length) return false
    var node = new Node(data)
    if (this.length === 0) {
      this.head = node
      this.tail = node
    } else {
      if (position === 0) {
        node.next = this.head
        this.head.prev = node
        this.head = node
      } else if (position === this.length) {
        node.prev = this.tail
        this.tail.next = node
        this.tail = node
      } else {
        var index = 0
        var current = this.head
        while(index++ < position) {
          current = current.next
        }
        current.prev.next = node
        node.prev = current.prev
        current.prev = node
        node.next = current
      }
    }
    this.length += 1
    return true
  }

  DoublyList.prototype.get = function(position) {
    if (position < 0 || position > this.length-1)  return null
    if (position <= this.length / 2) { // 从前向后找
      var index = 0
      var current = this.head
      while(index++ < position) {
        current = current.next
      }
      return current.data
    } else if (position > this.length / 2) { // 从后向前找
      var index = this.length-1
      var current = this.tail
      while(index-- > position) {
        current = current.prev
      }
      return current.data
    }
  }

  DoublyList.prototype.indexOf = function(data) {
    var index = 0
    var current = this.head
    while(current) {
      if (data === current.data) return index
      current = current.next
      index++
    }
    return -1
  }

  DoublyList.prototype.removeAt = function(position) {
    if (position < 0 || position > this.length-1) return false
    if (position === 0) {
      this.head = this.head.next
      this.head.prev = null
    } else if (position === this.length-1) {
      this.tail = this.tail.prev
      this.tail.next = null
    } else {
      if (position <= this.length / 2) {
        var index = 0
        var current = this.head
        while(index++ < position) {
          current = current.next
        }
        current.prev.next = current.next
        current.next.prev = current.prev
      } else if (position > this.length / 2) {
        var index = this.length-1
        var current = this.tail
        while(index-- > position) {
          current = current.prev
        }
        current.prev.next = current.next
        current.next.prev = current.prev
      }
    }
    this.length -= 1
    return true
  }

  DoublyList.prototype.remove = function(data) {
    var index = this.indexOf(data)
    if (index === -1) return false
    return this.removeAt(index)
  }

  DoublyList.prototype.isEmpty = function() {
    return this.length === 0
  }
  
  DoublyList.prototype.size = function() {
    return this.length
  }
  
  DoublyList.prototype.getHead = function() {
    return this.head.data
  }
  
  DoublyList.prototype.getTail = function() {
    return this.tail.data
  }
}