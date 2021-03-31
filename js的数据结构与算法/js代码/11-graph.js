import './02-queue'

function Graph() {
  this.vertexes = []
  this.adjList = new Dictionary()

  // 添加节点
  Graph.prototype.addVertex = function(v) {
    this.vertexes.push(v)
    this.adjList.set(v, [])
  }

  // 添加节点的相邻节点
  Graph.prototype.addEdge = function(v1, v2) {
    this.adjList.get(v1).push(v2)
    this.adjList.get(v2).push(v1)
  }

  // 将图转化为字符串
  Graph.prototype.toString = function() {
    var resultStr = ""
    for (var i=0; i < this.vertexes.length; i++) {
      resultStr += this.vertexes[i] + "-->"
      var adj = this.adjList.get(this.vertexes[i])
      for (var j=0; j < adj.length; j++) {
        resultStr += adj[j] + " "
      }
      resultStr += '\n'
    }
    return resultStr
  }

  Graph.prototype.initializeColor = function() {
    var colors = {}
    for (var i=0; i < this.vertexes.length; i++) {
      colors[this.vertexes[i]] = "white"
    }
    return colors
  }

  // 广度优先搜索 Breadth-First Search
  Graph.prototype.bfs = function(v, handler) {
    var colors = this.initializeColor()
    var queue = new Queue()
    queue.enqueue(v)
    while (!queue.isEmpty()) {
      // 获取节点v的相邻节点
      var qv = queue.dequeue(v)
      var adj = this.adjList.get(qv)
      console.log(adj)
      colors[qv] = 'gray'
      // 将节点v的相邻节点逐个放入queue中，修改相邻节点的颜色为'grey'
      for (var i = 0; i < adj.length; i++) {
        var a = adj[i]
        if (colors[a] === 'white') {
          colors[a] = 'gray'
          queue.enqueue(a)
        }
      }
      colors[qv] = 'black'

      if (handler) {
        handler(qv)
      }
    }
  }

  // 深度优先搜索 Depth-First Search
  Graph.prototype.dfs = function(handler) {
    var colors = this.initializeColor()
    for (var i=0; i < this.vertexes.length; i++) {
      if (colors[this.vertexes[i]] === 'white') {
        this.dfsVisit(this.vertexes[i], colors, handler)
      }
    }
  }

  Graph.prototype.dfsVisit = function(u, colors, handler) {
    colors[u] = "gray"
    if (handler) {
      handler(u)
    }
    var uAdj = this.adjList.get(u)
    for (var i=0; i < uAdj.length; i++) {
      var a = uAdj[i]
      if (colors[a] === 'white') {
        this.dfsVisit(a, colors, handler) 
      }
    }
    colors[u] = 'black'
  }
}

// var graph = new Graph()
// var myVertexes = ['A', 'B', 'C', "D", "E", "F", "G", "H", "I"]
// myVertexes.forEach(item => {
//   graph.addVertex(item)
// })
// console.log(graph)
// graph.addEdge('A', 'B')
// graph.addEdge('A', 'C')
// graph.addEdge('A', 'D')
// graph.addEdge('B', 'E')
// graph.addEdge('B', 'F')
// graph.addEdge('C', 'D')
// graph.addEdge('C', 'G')
// graph.addEdge('D', 'G')
// graph.addEdge('D', 'H')
// graph.addEdge("E", 'I')

// console.log(graph.toString())

// console.log(graph.initializeColor())

// var result = ""
// graph.bfs('A', function(v) {
//   result += v + " "

// })
// console.log(result)

// var result = ""
// graph.dfs(function(v) {
//   result += v + " "
// })
// console.log(result)