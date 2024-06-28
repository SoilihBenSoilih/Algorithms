const isValid = (visited, x, y, width, height) => {
    return 0 <= x && x < width && 0 <= y && y < height && !visited[y][x]
}

const isSafe = (c, nc) => {
    return (c.charCodeAt(0) + 1) === nc.charCodeAt(0)
}

const dfs = (maze, visited, currentPath, dirs, x, y, width, height) => {
    visited[y][x] = true
    currentPath.push([x, y])

    if(maze[y][x] === "z" && currentPath.length === 26){
        return currentPath
    }

    for (const dir of dirs) {
        let nx = x + dir[0]
        let ny = y + dir[1]
        if (isValid(visited, nx, ny, width, height)) {
            if (isSafe(maze[y][x], maze[ny][nx])) {
                dfs(maze, visited, currentPath, dirs, nx, ny, width, height)
            }
        }
    }
    return currentPath
}



const abcPath = (maze) => {
    if (maze.length === 0) return []

    maze = maze.map(line => line.split(''))
    
    const width = maze[0].length
    const height = maze.length
    let result = Array.from({ length: height }, () => Array.from({ length: width }, () => "-"))

    let path = []
    let found = false
    let dirs = [[0, 1], [1, 0], [-1, 0], [0, -1]]


    for (let y = 0; y < height; y++) {
        if (found) break
        for (let x = 0; x < width; x++) {
            if (maze[y][x] === "a") {
                let currentPath = []
                let visited = Array.from({ length: height }, () => Array.from({ length: width }, () => false));
                currentPath = dfs(maze, visited, currentPath, dirs, x, y, width, height)
                if (currentPath.length === 26) {
                    path = currentPath
                    found = true
                    break
                }
            }
        }
    }
    if (!path) {
        return null
    }
    for (const el of path) {
        let x = el[0]
        let y = el[1]
        result[y][x] = maze[y][x]
    }
    result = result.map(line => line.join(''))
    return result

};

module.exports = abcPath;
