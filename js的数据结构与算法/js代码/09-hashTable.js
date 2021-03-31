function HashTable() {
  this.storage = []
  this.count = 0
  this.limit = 7
  
  HashTable.prototype.hashFunc = function(str, size) {
    var hashCode = 0
    for(var i=0; i<str.length; i++) {
      hashCode += str[i].charCodeAt()
    }
    hashCode = hashCode % size
    return hashCode
  }

  HashTable.prototype.put = function(key, value) {
    // 1. 判断key值的哈希值
    var index = this.hashFunc(key, this.limit)
    // 2. 根据哈希值放入对应位置的bucket
    // 2.1 如果对应位置没有bucket，先创建，再放入
    var bucket = this.storage[index]
    if (bucket === undefined) {
      bucket = []
      this.storage[index] = bucket
    }

    // 2.2 对应位置有bucket
    // 2.2.1 bucket中有key值，修改
    // 2.2.2 bucket中没有key值，添加
    var override = false
    for (var i=0; i < bucket.length; i++) {
      var turple = bucket[i]
      if (turple[0] === key) { // 更新
        turple[1] = value
        override = true
      }
    }
    if (!override) {
      bucket.push([key, value]) // 插入
      this.count += 1
      this.loadFacotr = this.count / this.limit
      if (this.count > 0.75 * this.limit) {
        var primeNum = this.getPrime(this.limit * 2)
        this.resize(primeNum)
      }
    }
  }

  HashTable.prototype.get = function(key) {
    var index = this.hashFunc(key, this.limit)
    var bucket = this.storage[index]
    if (bucket === null) return null

    for (var i=0; i < bucket.length; i++) {
      var turple = bucket[i]
      if (turple[0] === key) {
        return turple[1]
      }
    }

    return null
  }

  HashTable.prototype.remove = function(key) {
    var index = this.hashFunc(key, this.limit)
    var bucket = this.storage[index]
    if (bucket === null) return false

    for(var i=0; i < bucket.length; i++) {
      var turple = bucket[i]
      if (turple[0] === key) {
        bucket.splice(i, 1)
        this.count -= 1
        if (this.count < 0.25 * this.limit) {
          var primeNum = this.getPrime(Math.floor(this.limit / 2))
          this.resize(primeNum)
        }
        return true
      }
    }

    return false
  }

  HashTable.prototype.isEmpty = function() {
    return this.count === 0
  }

  HashTable.prototype.size = function() {
    return this.count
  }
  
  HashTable.prototype.resize = function(size) {
    this.limit = size
    var oldStorage = this.storage
    this.storage = []
    this.count = 0
    
    for(var i=0; i < oldStorage.length; i++) {
      var oldBucket = oldStorage[i]
      if (oldBucket !== undefined) {
        for (var j=0; j < oldBucket.length; j++) {
          var turple = oldBucket[j]
          this.put(turple[0], turple[1])
        }
      }
    }
  }

  HashTable.prototype.isPrime = function(value) {
    var temp = parseInt(Math.sqrt(value))
    for (var i=2; i <= temp; i++) {
      if (value % i === 0) {
        return false
      }
    }
    return true
  }

  HashTable.prototype.getPrime = function(value) {
    while(value++) {
      if (this.isPrime(value)) return value
    }
  }
}

var hashTable = new HashTable()
hashTable.put('aaa', 'aaa')
hashTable.put('bbb', 'bbb')
hashTable.put('ccc', 'ccc')

console.log(hashTable.get('ccc'))
hashTable.put('ccc', 'mmm')
console.log(hashTable.get('ccc'))

console.log(hashTable.size())
hashTable.remove('bbb')
console.log(hashTable.get('bbb'))

hashTable.put('ddd', 'ddd')
hashTable.put('eee', 'eee')
hashTable.put('fff', 'fff')
hashTable.put('abc', 'abc')
hashTable.put('cde', 'cde')
hashTable.put('cba', 'cba')
hashTable.put('dea', 'dea')
hashTable.put('dfr', 'dfr')
hashTable.put('yyy', 'yyy')
hashTable.put('eee', 'eee')
hashTable.put('ttt', 'cde')
hashTable.put('nnn', 'cba')
console.log(hashTable.size())