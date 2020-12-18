// first we animate the paths which are covered during dijkstra
// next we call the animateShortestPath func which recieves the shortest path 
export function animateDijkstra(visitedNodesInOrder, nodesInShortestPath) {
  for (let i = 0; i <= visitedNodesInOrder.length; i++) {
    if (i === visitedNodesInOrder.length) {
      setTimeout(() => {
        animateShortestPath(nodesInShortestPath);
      }, 10 * i);
      return;
    }
    setTimeout(() => {
      const node = visitedNodesInOrder[i];
      document.getElementById(`node-${node.row}-${node.col}`).className = `node node-visited`;
    }, 10 * i);
  }
}

// this sets the nodes in shortest path to `node-shortest-path` class
function animateShortestPath(nodesInShortestPath) {
  for (let i = 0; i < nodesInShortestPath.length; i++) {
    setTimeout(() => {
      const node = nodesInShortestPath[i];
      document.getElementById(`node-${node.row}-${node.col}`).className = `node node-shortest-path`;
    }, 50 * i);
  }
}