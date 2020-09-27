import { mod } from './util.js';
const ALIVE = 1;
const DEAD = 0;

export default class Matrix {

    constructor(width, height, seed) {
        this.height = height;
        this.width = width;
        this.board = [];
        this.seed = seed || .5;
        this.init();
    }

    init() {
        this.board = [];
        for (let i = 0; i < this.width * this.height; i++) {
            this.board.push(DEAD);
        }
    }

    randomize() {
        for(let i = 0; i < this.width; i++) {
            for(let j = 0; j < this.height; j++) {
                this.setXY(i, j, Math.random() < this.seed? ALIVE: DEAD);
            }
        }
    }
    
    getBoard() {
        return this.board;
    }

    getXY(x, y) {
        return this.board[mod(y, this.height) * this.width + mod(x, this.width)];
    }

    setXY(x, y, status) {
        this.board[mod(y, this.height) * this.width + mod(x, this.width)] = status;
    }

    print() {
        for(let j = 0; j < this.height; j++) {
            let row = ""
            for(let i = 0; i < this.width; i++) {
                row = row + (this.getXY(i, j)?"+": "-");
            }
            console.log(row)
        }
        console.log("")
    }

    printContext(context, squareSize, color) {
        this.printContextOffset(context, squareSize, 0, 0, color);
    }

    printContextOffset(context, squareSize, x, y, colorA, colorB) {
        for(let j = 0; j < this.height; j++) {
            for(let i = 0; i < this.width; i++) {
                if (this.getXY(i, j)) {
                    context.fillStyle = colorA;
                } else {
                    context.fillStyle = colorB || "white";
                }
                context.fillRect((x + i) * squareSize, (y + j) * squareSize, squareSize, squareSize);
            }
        }
    }

    shiftDown() {
        let result = new Matrix(this.width, this.height);
        for(let j = this.height - 1; j > 0; j--) {
            for(let i = 0; i < this.width; i++) {
                result.setXY(i, j, this.getXY(i, j - 1));
            }
        }
        for(let i = 0; i < this.width; i++) {
            result.setXY(i, 0, Math.random() < this.seed? ALIVE: DEAD);
        }
        return result;
    }

    shiftUp() {
        let result = new Matrix(this.width, this.height, this.seed);
        for(let j = 0; j < this.height - 1; j++) {
            for(let i = 0; i < this.width; i++) {
                result.setXY(i, j, this.getXY(i, j + 1));
            }
        }
        for(let i = 0; i < this.width; i++) {
            result.setXY(i, this.height - 1, Math.random() < this.seed? ALIVE: DEAD);
        }
        return result;
    }

    shiftRight() {
        let result = new Matrix(this.width, this.height, this.seed);
        for(let j = 0; j < this.height; j++) {
            for(let i = this.width - 1; i > 0; i--) {
                result.setXY(i, j, this.getXY(i - 1, j));
            }
        }
        for(let j = 0; j < this.height; j++) {
            result.setXY(0, j, Math.random() < this.seed? ALIVE: DEAD);
        }
        return result;
    }


    multiply(other) {

        console.assert(other.height === this.width, {errorMsg: "Matrix dimension do not match."});
        let result = new Matrix(other.width, this.height);

        for(let j = 0; j < this.height; j++) {
            for(let i = 0; i < other.width; i++) {
                let dot = 0;
                for(let k = 0; k < other.height; k++) {
                    dot += this.getXY(k, j) * other.getXY(i, k);
                }
                result.setXY(i, j, dot);
            }
        }
 
        return result;
    }

    transpose() {
        let result = new Matrix(this.height, this.width);

        for(let j = 0; j < this.height; j++) {
            for(let i = 0; i < this.width; i++) {
                result.setXY(j, i, this.getXY(i,j));
            }
        }
 
        return result;
    }
}