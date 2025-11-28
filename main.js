"use strict";
import promptSync from "prompt-sync";  // นำเข้า library ที่จำเป็น

const prompt = promptSync({ sigint: true }); // รับค่าผู้ใช้ใน Terminal ผ่านปุ่ม

// Board tiles // กำหนดสัญลักษณ์
const PLAYER = "*"; // ผู้เล่น
const EMPTY = "░"; // พื้นที่ว่าง
const HOLE = "O"; // หลุม
const HAT = "^";  // ผูหมวก - เป้าหมายที่ใช้ตามหา

// Hardcoded board กระดานเกมส์ กำหนด Array 2 มิติ ขนาด 3*3
let board = [
	[PLAYER, EMPTY, HOLE], // ใส่ค่าในตำแหน่ง array
	[EMPTY, HOLE, EMPTY],
	[EMPTY, HAT, EMPTY],
];

// Game state  // เก็บตำแหน่งของผู้เล่น
let playerRow = 0; // แถว
let playerCol = 0; // คอลัม
let playing = true; // สถานะการเล่น

// Print board
function printBoard(board) {
	console.clear(); // call console.clear() before print each move
	// Loop through each row and join the elements to form a string
    board.forEach(row => {
        console.log(row.join(''));
    });
}

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
