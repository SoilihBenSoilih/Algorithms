let buildGraph = sequences => {
    if(sequences.length === 0) return {}
    let graph = {}
    const regex = /([A-Z])\s*(>|<)\s*([A-Z])/;
    for (const sequence of sequences) {
        const match = sequence.match(regex);
        const [_, start, inequality, end] = match;
        if (!graph.hasOwnProperty(start)) graph[start] = [];
        if (!graph.hasOwnProperty(end)) graph[end] = [];
        inequality === ">" ? graph[start].push(end) : graph[end].push(start);
    }
    return graph
}


let hasCycle = (graph, node, visited, path) => {
    visited.add(node)
    path.add(node)

    for (const el of graph[node]) {
        if (!visited.has(el)) {
            if(hasCycle(graph, el, visited, path)){
                return true
            }
        } else if(path.has(el)){
            return true
        }
    }

    path.delete(node)
    return false
}


const inequalities = (sequences) => {
    let graph = buildGraph(sequences)
    let visited = new Set()
    let path = new Set()

    for (const node in graph) {
        if(hasCycle(graph, node, visited, path))
            return "contradiction"
    }
    return "consistent"
};

module.exports = inequalities;
