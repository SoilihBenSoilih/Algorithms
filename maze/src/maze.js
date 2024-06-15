const Node = class {
    constructor(x, y, dist) {
        this.x = x;
        this.y = y;
        this.dist = dist;
    }
};

const Queue = class {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }
};

function getChar(number) {
    if (number < 10) {
        return number.toString();
    } else {
        return String.fromCharCode(55 + number);
    }
}

let getInitials = (matrix) => {
    let sx = 0;
    let sy = 0;

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            const c = matrix[y][x];
            if (c === 'S') {
                sx = x;
                sy = y;
                matrix[y][x] = '0';
            }
        }
    }
    return [sx, sy];
};

let is_valid = (x, y, width, height) => x >= 0 && x < width && y >= 0 && y < height;

let is_safe = (x, y, matrix) => {
    return matrix[y][x] === ".";
};

const pathFinder = (maze) => {
    if (maze.length === 0) return maze;

    maze = maze.map(line => line.split(''));

    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const width = maze[0].length;
    const height = maze.length;
    const [sx, sy] = getInitials(maze);
    let queue = new Queue();
    queue.enqueue(new Node(sx, sy, 0));

    while (!queue.isEmpty()) {
        const node = queue.dequeue();
        const x = node.x;
        const y = node.y;
        const dist = node.dist;

        for (const dir of dirs) {
            const ix = dir[0];
            const iy = dir[1];
            let nx = x + ix;
            let ny = y + iy;

            nx = (nx + width) % width;
            ny = (ny + height) % height;

            if (is_valid(nx, ny, width, height) && is_safe(nx, ny, maze)) {
                const c = getChar(dist + 1);
                maze[ny][nx] = c;
                queue.enqueue(new Node(nx, ny, dist + 1));
            }
        }
    }

    maze = maze.map(line => line.join(''));
    return maze;
};

module.exports = pathFinder;
