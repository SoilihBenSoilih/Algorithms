let buildGraph = sequences => {
    if(sequences.length === 0) return {}
    let graph = {}
    for (const sequence of sequences) {
        let splitedSequennce = sequence.split(" ")
        const influencerNode = splitedSequennce[0]
        const influencedNode = splitedSequennce[1]
        if (!graph.hasOwnProperty(influencerNode)) graph[influencerNode] = [];
        if (!graph.hasOwnProperty(influencedNode)) graph[influencedNode] = [];
        graph[influencerNode].push(influencedNode)
    }
    return graph
}

let traverseNode = (graph, node, currentLength) => {

    if (graph[node].length === 0) {
        return currentLength;
    }

    let maxLength = 0
    
    for (let neighbor of graph[node]) {
        let length = traverseNode(graph, neighbor, currentLength + 1)
        if (length > maxLength) {
            maxLength = length;
        }
    }

    return maxLength
}

const getLongestInfluenceLength = (sequences) => {
    let graph = buildGraph(sequences)
    let longestLenght = 0
    for (const node in graph) {
        let currentLength = traverseNode(graph, node, 1)   
        if(currentLength > longestLenght) longestLenght = currentLength
    }
    return longestLenght
};

module.exports = getLongestInfluenceLength;
