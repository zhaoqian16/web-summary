function Dictionary() {
  this.items = {}

  Dictionary.prototype.has = function(key) {
    return this.items.hasOwnProperty(key)
  }

  Dictionary.prototype.set = function(key, value) {
    this.items[key] = value
  }

  Dictionary.prototype.remove = function(key, value) {
    if (!this.has(key)) return false
    delete this.items[key]
    return true
  }

  Dictionary.prototype.get = function(key) {
    return this.has(key) ? this.items[key] : null
  }

  Dictionary.prototype.clear = function(key) {
    this.items = {}
  }

  Dictionary.prototype.size = function() {
    return this.keys().length
  }

  Dictionary.prototype.keys = function() {
    return Object.keys(this.items)
  }

  Dictionary.prototype.values = function() {
    return Object.values(this.items)
  }
}

// var dict = new Dictionary()
// dict.set('name', 'zhaoqian')
// dict.set('age', 18)
// console.log(dict.keys())
// console.log(dict.values())
// console.log(dict.size())

// console.log(dict.get('name'))
// console.log(dict.remove('age'))
// console.log(dict.remove('sex'))

// console.log(dict.keys())
// console.log(dict.values())

// dict.clear()
// console.log(dict.size())