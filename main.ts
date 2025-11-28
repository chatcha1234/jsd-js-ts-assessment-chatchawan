import promptSync from "prompt-sync";

// Types
type Tile = "*" | "░" | "O" | "^";
type Board = Tile[][];

const prompt = promptSync({ sigint: true });

// Board tiles
const PLAYER: Tile = "*";
const EMPTY: Tile = "░";
const HOLE: Tile = "O";
const HAT: Tile = "^";

// Hardcoded board
let board: Board = [
	[PLAYER, EMPTY, HOLE],
	[EMPTY, HOLE, EMPTY],
	[EMPTY, HAT, EMPTY],
];

//  Game state 
let playerRow: number = 0;
let playerCol: number = 0;
let playing: boolean = true;

// Print board
function printBoard(board: Board): void {
	console.clear();
	console.log(board);
}

// Game play loop
printBoard(board);
const input:string = prompt("Which way? (w/a/s/d): ");
console.log(input);



// Game play loop
while (playing) { // วนลูปจนกว่า playing จะ false
    printBoard(board);
    const input = prompt("Which way? (w/a/s/d): ").toLowerCase(); // แปลงเป็นตัวพิมพ์เล็ก
    
    let nextRow = playerRow; // ตัวแปรสำหรับทดรับค่าตำแหน่่งล่าสุด
    let nextCol = playerCol; // ตัวแปรสำหรับทดรับค่าตำแหน่่งล่าสุด

    if (input === 'w') {  // รับค่าคีย์บอร์ดแล้วอัพเดตตำแหน่ง
        nextRow -= 1;
    } else if (input === 's') {
        nextRow += 1;
    } else if (input === 'a') {
        nextCol -= 1;
    } else if (input === 'd') {
        nextCol += 1;
    } else if (input === 'q') {
        playing = false; // ทดสอบการเข้าออก  while loop
    } 

    // Check for out of bounds
    if (nextRow < 0 || nextRow >= board.length || nextCol < 0 || nextCol >= board[0].length) { // ตรวจสอบตำแหน่ง array
        console.log("Lose: Out of bounds ");
        playing = false; // ถ้าเงื่อนไขถูกต้อง ออกจากลูป
        continue; 
    }

    // Check for hole
    if (board[nextRow][nextCol] === HOLE) {  // ตรวจสอบตำแหน่งกับ object board เทียบกับตำแหน่งที่รับจากคียบอร์ด
        console.log("Lose: Sorry, you fell down a hole");
        playing = false;
        continue;
    }

    // Check for hat
    if (board[nextRow][nextCol] === HAT) {
        console.log("Win: Congrats, you found your hat!");
        playing = false;
        continue;
    }

	// หลุดเช็คเงื่อไขมาได้ถือว่าเกมยังเดินต่อ

    // Update board
    board[playerRow][playerCol] = EMPTY; // ลบตัวละครออกจากตำแหน่งก่อนหน้าโดย ใส่ค่า EMPTY 
    playerRow = nextRow; 
    playerCol = nextCol;  // อัพเดตตำแหน่งใหม่
    board[playerRow][playerCol] = PLAYER; // แสดงตำแหน่งใหม่
}
