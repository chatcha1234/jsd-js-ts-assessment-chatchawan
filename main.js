"use strict";
import promptSync from "prompt-sync";

const prompt = promptSync({ sigint: true });

// Board tiles
const PLAYER = "*";
const EMPTY = "░";
const HOLE = "O";
const HAT = "^";

// Hardcoded board
let board = [
	[PLAYER, EMPTY, HOLE],
	[EMPTY, HOLE, EMPTY],
	[EMPTY, HAT, EMPTY],
];

// Game state
let playerRow = 0;
let playerCol = 0;
let playing = true;

// Print board
function printBoard(board) {
	console.clear(); // call console.clear() before print each move

	board.forEach(row => {
		console.log(row.join(''));		
	});    // วนลูปครั้งละ แถวใน array ใช้ตัวแปร row เก็บค่า หลังจากนั้น นำมา join แลัว log ออกมาจนครบ 3 แถว

}

// Game play loop
while (playing) { // วนลูปจนกว่า playing จะ false
	printBoard(board);
	const input = prompt("Which way? (w/a/s/d): ").toLowerCase(); // รับค่าตัวพิมพ์เล็กป้องกัน casesensitive
	
	let nextRow = playerRow; // กำหนดค่าเริ่มต้นแกน Row
	let nextcol = playerCol; // กำหนดค่าเริ่มต้นแกน Col

  	if (input === 'w') {
        nextRow -= 1;
    } else if (input === 's') {
        nextRow += 1;
    } else if (input === 'a') {
        nextCol -= 1;
    } else if (input === 'd') {
        nextCol += 1;
    } else if (input === 'q') {
        playing = false;
    } 

	
}