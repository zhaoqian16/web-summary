function ArrayList() {
  this.array = []

  ArrayList.prototype.insert = function(item) {
    this.array.push(item)
  }

  ArrayList.prototype.toString = function() {
    return this.array.join("-")
  }

  ArrayList.prototype.swap = function(m, n) {
    var temp = this.array[m]
    this.array[m] = this.array[n]
    this.array[n] = temp
  }

  // 冒泡排序
  // 原理：循环对比相邻两个数，按顺序交换位置
  ArrayList.prototype.bubbleSort = function() {
    for (var j = this.array.length-1; j >= 0; j--) {
      for (var i=0; i < j; i++) {
        if (this.array[i] > this.array[i+1]) {
          this.swap(i, i+1)
        }
      }
    }
  }

  // 选择排序
  ArrayList.prototype.selectionSort = function() {
    var length = this.array.length
    for (var i = 0; i < length-1; i++) {
      var minIndex = i
      for (var j = i+1; j < length; j++) {
        if (this.array[minIndex] > this.array[j]) {
          minIndex = j
        }
      }

      this.swap(i, minIndex)
    }
  }

  // 插入排序
  ArrayList.prototype.insertSort = function() {
    var length = this.array.length
    for (var i=1; i < length; i++ ) {
      var temp = this.array[i]
      var j = i
      while (j > 0 && this.array[j-1] > temp) {
        this.array[j] = this.array[j-1] 
        j--
      }
      this.array[j] = temp
    }
  }

  // 希尔排序
  ArrayList.prototype.shellSort = function() {
    var length = this.array.length
    var gap = Math.floor(length / 2)
    while (gap > 0) {
      for (var i=gap; i < length; i++) {
        var j = i
        var temp = this.array[j]
        while(j > gap-1 && this.array[j-gap] > temp) {
          this.array[j] = this.array[j-gap]
          j -= gap
        }
        this.array[j] = temp
      }
      gap = Math.floor(gap / 2)
    }
  }

  // 快速排序，寻找枢纽，分而治之
  ArrayList.prototype.quickSort = function() {
    this.quickSortRec(0, this.array.length-1)
  }

  ArrayList.prototype.median = function(left, right) {
    var center = Math.floor((left + right) / 2)

    if (this.array[left] > this.array[center]) {
      this.swap(left, center)
    }
    if (this.array[center] > this.array[right]) {
      this.swap(center, right)
    }
    if (this.array[left] > this.array[center]) {
      this.swap(left, center)
    }
    
    this.swap(center, right-1)

    return this.array[right-1]
  }

  ArrayList.prototype.quickSortRec = function(left, right) {
    if (left >= right || left+1 === right) return 
    var pivot = this.median(left, right)
    var lp = left
    var rp = right-1
    while(true) {
      while(this.array[++lp] < pivot) {}
      while(this.array[--rp] > pivot) {}
      if (lp < rp) {
        this.swap(lp, rp)
      } else {
        break
      }
    }
    console.log(pivot, lp)
    this.swap(lp, right-1)
    this.quickSortRec(left, lp-1)

    this.quickSortRec(lp+1, right)
  }
}

var al = new ArrayList()
al.insert(97)
al.insert(11)
al.insert(88)
al.insert(101)
al.insert(44)
al.insert(5)
al.insert(567)
al.insert(7)
al.insert(34)
al.insert(4)

console.log(al.toString())

// al.bubbleSort()
// console.log(al.toString())

// al.selectionSort()
// console.log(al.toString())

// al.selectionSort()
// console.log(al.toString())

// al.shellSort()
// console.log(al.toString())

al.quickSort()
console.log(al.toString())