function Set() {
  this.items = {}

  Set.prototype.has = function(value) {
    return this.items.hasOwnProperty(value)
  }

  Set.prototype.add = function(value) {
    if (!this.has(value)) {
      this.items[value] = value
      return true
    }
    return false
  }

  Set.prototype.remove = function(value) {
    if (!this.has(value)) return false
    delete this.items[value]
    return true
  }

  Set.prototype.clear = function() {
    this.items = {}
  }

  Set.prototype.size = function() {
    return Object.keys(this.items).length
  }

  Set.prototype.values = function() {
    return Object.keys(this.items)
  }

  Set.prototype.union = function(otherSet) {
    var set = new Set()
    var values = this.values()
    for(var i=0; i < values.length; i++) {
      set.add(values[i])
    }
  
    var otherValues = otherSet.values()
    for(var i=0; i < otherValues.length; i++) {
      set.add(otherValues[i])
    }
    return set
  }

  Set.prototype.intersection = function(otherSet) {
    var set = new Set()
    var values = otherSet.values()
    for(var i=0; i < values.length; i++) {
      var value = values[i]
      if (this.has(value)) {
        set.add(value)
      }
    }
    return set
  }

  Set.prototype.difference = function(otherSet) {
    var set = new Set()
    var values = otherSet.values()
    for(var i=0; i < values.length; i++) {
      var value = values[i]
      if (!this.has(value)) {
        set.add(value)
      }
    }
    return set
  }

  Set.prototype.subset = function(otherSet) {
    var otherValues = otherSet.values()
    for(var i=0; i < otherValues.length; i++) {
      if(!this.has(otherValues[i])) {
        return false
      }
    }
    return true
  }
}