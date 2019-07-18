class Graph {
    constructor() {
      this.AdjList = new Map();
    }
    
    addVertex(vertex) {
      if (!this.AdjList.has(vertex)) {
        this.AdjList.set(vertex, []);
      } else {
        throw 'Already Exist!!!';
      }
    }
    
    addEdge(vertex, node) {
        if (this.AdjList.has(vertex)) {
            if (this.AdjList.has(node)) {
                let arr = this.AdjList.get(vertex);
                if (!arr.includes(node)) {
                    arr.push(node);
                }
            } else {
                throw `Can't add non-existing vertex ->'${node}'`;
            }
        } else {
            throw `You should add '${vertex}' first`;
        }
    }

    createVisitedObject() {
        let arr = {};
        for (let key of this.AdjList.keys()) {
            arr[key] = false;
        }
        return arr;
    }

    // Breadth First Search
    bfs(startingNode) {
        let visited = this.createVisitedObject();
        let q = [];
        let count = 0;
        visited[startingNode] = true;
        q.push({vertex: startingNode, count: count});
        while (q.length) {
            let current = q.pop()
            console.log(current);

            let arr = this.AdjList.get(current.vertex);
            count = current.count + 1;
            for (let elem of arr) {
                if (!visited[elem]) {
                    visited[elem] = true;
                    q.unshift({vertex:elem, count: count});
                }
            }

        }
    }

    dfs(startingNode) {
        let visited = this.createVisitedObject();
        this.dfsHelper(startingNode, visited);
    }

    dfsHelper(startingNode, visited) {
        visited[startingNode] = true;
        console.log(startingNode);

        let arr = this.AdjList.get(startingNode);

        for (let elem of arr) {
            if (!visited[elem]) {
                this.dfsHelper(elem, visited);
            }
        }
    }

    shortestPath(source, target){
        if(source === target){
            console.log(source);
            return;
        }
        let queue = [source],
        visited = {source: true},
        predecessor = {},
        tail = 0;
        while(tail < queue.length){
            let u = queue[tail++],
            neighbors = this.AdjList.get(u);
            for(let i = 0; i < neighbors.length; ++i){
                let v = neighbors[i];;
                if(visited[v]){
                    continue;
                }
                visited[v] = true;
                if(v === target){
                    let path = [v];
                    while( u !== source){
                        path.push(u)
                        u = predecessor[u];
                    }
                    path.push(u);
                    path.reverse();
                    console.log(path.join('->'));
                    return;
                }
                predecessor[v] = u;
                queue.push(v);
            }
        }
    }

    print() {
      for (let [key, value] of this.AdjList) {
        console.log(key + ' => ' + value);
      }
    }
  }

let graph = new Graph();
let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
for (let i = 0; i < arr.length; i++) {
    graph.addVertex(arr[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('B', 'E');
graph.addEdge('C', 'D');
graph.addEdge('C', 'E');
graph.addEdge('C', 'G');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');
//graph.print();
graph.shortestPath('A','F');