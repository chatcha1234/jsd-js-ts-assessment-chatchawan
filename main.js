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
	[PLAYER, EMPTY, HOLE],
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
	console.log(board); 
}

// Game play loop
printBoard(board);
const input = prompt("Which way? (w/a/s/d): ");
console.log(input);
