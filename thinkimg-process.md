# Thinking Process Guidelines

## Table of Contents

- [Thinking Process Guidelines](#thinking-process-guidelines)
  - [Table of Contents](#table-of-contents)
  - [1. Workflow Planning](#1-workflow-planning)
  - [2.1. Board Functions (Hardcoded)](#21-board-functions-hardcoded)
  - [2.2. Board Functions (Generated)](#22-board-functions-generated)
  - [3. Input Functions](#3-input-functions)
  - [4. Movement Functions](#4-movement-functions)
  - [5. Game Rule Functions](#5-game-rule-functions)
  - [6. Game Play Loop](#6-game-play-loop)
- [WRITE YOUR THINKING PROCESS BELOW. ](#write-your-thinking-process-below)

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">1. Workflow Planning</span>

↳ Draw a flowchart or write steps describing:

<p style="display: flex; align-items: center; gap: 1rem;">
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Game start</span>
<span style="color: wheat; font-weight:bold; font-size:2rem; ">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Read input</span>
<span style="color: wheat; font-weight:bold; font-size:2rem;">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Update position</span>
<span style="color: wheat; font-weight:bold; font-size:2rem;">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Check rules</span>
<span style="color: wheat; font-weight:bold; font-size:2rem;">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">End/Continue</span>
</p>

↳ Must include:

- Input/output of each function.
- Edge cases (invalid input, boundaries, hole/hat tiles).

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem; margin-top: 1rem; border-buttom: none;">2.1. Board Functions (Hardcoded)</span>

↳ Prints the hardcoded board in terminal.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How the board is represented (2D array).
- Tile types (PLAYER, EMPTY, HOLE, HAT).

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">2.2. Board Functions (Generated)</span>

↳ Creates a random board with player, hat, and holes.
↳ Prints the board in terminal.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How the board is represented (2D array).
- Tile types (PLAYER, EMPTY, HOLE, HAT).
- How random placement avoids overlaps.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">3. Input Functions</span>

↳ Reads and validates user input (w, a, s, d).
↳ Logs invalid input.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- Input/output.
- Edge cases (invalid input, boundaries).
- How player position is updated.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">4. Movement Functions</span>

↳ Updates playerRow / playerCol based on the move.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- Input/output.
- Edge cases (invalid input, boundaries).
- How player position is updated.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">5. Game Rule Functions</span>

↳ Checks for out-of-bounds, falling into a hole, or finding the hat.

<span style="font-weight:bold; color: pink;">&nbsp;Game Rules:&nbsp;</span>

- Wins by finding the hat.
- Loses by landing in a hole.
- Loses by moving outside the board.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How to determine win/loss conditions.
- Handling messages for win/loss conditions.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">6. Game Play Loop</span>

↳ Combine all functions into a playable loop.
↳ Ensure messages appear correctly, board prints at start, and invalid input is handled.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How to determine win/loss conditions.
- Handling messages for win/loss conditions
- How to update the board when the player moves.

---

# <p style="display: flex; align-items: center; gap: 0.5em;"><span style="font-weight:bold; color: white; background-color: lightSeaGreen; padding: 0.5rem 2rem;">WRITE YOUR THINKING PROCESS BELOW.</span><span style="font-weight:bold; color: white; background-color: lightSeaGreen; padding: 0.5rem 0;">&nbsp;</span></p>

Thinking Process


1. Workflow Planning <br>
    1.เริ่มเกมส์ (Start Game)  : กำหนดค่าเริ่มต้นของเกมส์
    * กำหนดตำแหน่งเริ่มต้น 
      *  let playerRow = 0; // แถว
      * let playerCol = 0; // คอลัม
    * กำหนดสถานะเกมเป็นกำลังเล่น let playing = true;
    * แสดงกระดานบน Terminal printBoard(board);
    * กำหนดตัวแปร 
      * const PLAYER = "*"; // ผู้เล่น
      * const EMPTY = "░"; // พื้นที่ว่าง
      * const HOLE = "O"; // หลุม
      * const HAT = "^";  // หมวก

    2.รับค่าจากผู้เล่น (Read Input)  :
    * กำหนดปุ่ม w,a,s,d สำหรับรับค่า
    * ตรวจสอบความถูกต้องของ Input ถ้าไม่ถูกต้อง ต้องถามใหม่
      * Set ปุ่ม w : เดินขึ้น 
      * Set ปุ่ม s : เดินลง 
      * Set ปุ่ม a : เดินซ้าย 
      * Set ปุ่ม d : เดินขวา

    3.ตรวจสอบความถูกต้อง (Update position)  :
    * กำหนด count สำหรับ update ค่า การเดิน
      * ปุ่ม w : เดินขึ้น playerRow -1
      * ปุ่ม s : เดินลง playerRow +1
      * ปุ่ม a : เดินซ้าย playerCol -1
      * ปุ่ม d : เดินขวา playerCol +1 
    
    4.ตรวจสอบกฎของเกมส์ (Check Rules)  :
    * ชนะ : ตำแหน่งใหม่คือ HAT = "^";
    * แพ้ : ตำแหน่งใหม่คือ HOLE = "O";
    * แพ้ :  ตำแหน่งใหม่อยู่นอกเขตมั้ยถ้าใช่ = แพ้

    5.ตรวจสอบสถานะเกมส์  (End/Continue) :
    * เมื่อทำการเดิน update ข้อมูลใน array เปลี่ยนตำแหน่งเดิมเป็น ░ และตำแหน่งใหม่เป็น *
    *  อัพเดตตัวแปร playerRow และ  playerCol
    * วนลูป step 2 จนกว่าจะจบเกม

2.1. Board Functions (Hardcoded) 
  * เก็บข้อมูลแบบ 2 มิติ ในตัวแปร Array 
  * ใช้ foreach วนรับค่า หลังจากนั้น join กันเพื่อให้แสดงเป็นแถว 3 แถว

2.2. Board Functions (Generated)
  * สร้าง Array ว่างๆ ขึ้นมาก่อน
  * ใส่ ░ ทุกฃ่อง
  * ให้ผู้เล่น * อยู่ตรง  [0][0]
  * สุ่มตำแหน่งหมวก ^ ห้ามตรงกับ [0][0]
  * กำหนดจำนวนหลุมเป็น %
  * วางหลุมลงไป 0 
  * กำหนดเงื่อนไขห้ามสุ่มวางลงตำแหน่งผู้เล่นและหมวก
3. Input Functions
  * Input พิมพ์ w a s d ลง terminal
  * แสดง output เป็นผู้เล่นเปลี่ยนตำแหน่ง
  * ใช้ promt-sync เพื่อรับค่า
  * ใช้ lowercase รับค่า
4. Movement Functions
  * ควบคุมทิศทาง w a s d  
    * เก็บข้อมูล let playerRow = 0; 
              let playerCol = 0;
    * update ตำแหน่ง let nextRow = playerRow;
                    let nextCol = playerCol;
5. Game Rule Functions
  * out of bounds :  ถ้า แถวถัดไป <0 หรือ แถวถัดไปมากกว่าหรือเท่ากับ ขนาดของบอร์ด หรือ  คอลัมถัดไป <0 หรือ คอลัมถัดไปมากกว่าหรือเท่ากับ ขนาดของบอร์ด 

  * Check for hole : ถ้าตำแหน่ง array ถัดไปเท่ากับ hole ถือว่าแพ้
  * Check for hat : ถ้าตำแหน่ง array ถัดไปเท่ากับ hole ถือว่าชนะ 
6. Game Play Loop
  * กำหนดสถานะผู้เล่นเริ่มต้น playing = true
  * ใช้ while loop  เพื่อวนรับค่าจนกว่าจะเจอ key ที่ถูกต้อง
  * ตรวจสอบ  nextRow , nextCol
  * ชนะ/แพ้ playing = false เพื่อออกจากลูป
  * ถ้ายังเล่นต่อ 
      * อัพเดต board[playerRow][playerCol] เป็น EMPTY = "░";
      * อัพเดต player, RowplayerCol เป็น nextRow ,  nextCol
      * อัพเดต board[playerRow][playerCol] const PLAYER = "*";

[Back to Table of Contents](#table-of-contents)

---
