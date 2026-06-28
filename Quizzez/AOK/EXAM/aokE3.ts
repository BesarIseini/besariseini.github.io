import {QuestionType} from "../../../../src/types/QuestionType.ts";

const demo = {
    questions: [

        // Q1 - CPI / Performance (Image 2 / 21.jpg)
        // 10,500,000,000 instructions, 10.0 sec, 2100 MHz
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "A program consists of 10,500,000,000 instructions. It is executed in 10.0 seconds on a computer with a frequency of 2100 MHz. The program has",
                points: 20,
                negativePoints: 10,
                description: "",
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "unordered",
                answerOverride: true,
                options: [
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "",
                        textAfter: " clock cycles (enter the whole number without spaces).<br><br>",
                        correct: 21000000000
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "The CPI of the processor is ",
                        textAfter: ".<br><br>",
                        correct: 2
                    },
                    {
                        type: "number",
                        tolerance: { type: "absolute", value: 0.01 },
                        textBefore: "If the clock speed is increased by 15 times and the CPI is increased by 3 times, the same program will execute in ",
                        textAfter: " seconds.",
                        correct: 2
                    }
                ],
                warningMessage: []
            }
        },

        // Q2 - IEEE 754 Single Precision: -11.75 (Image 3 / 22.jpg)
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "In the process of representing the number -11.75 in IEEE754 single precision format, it is first represented in binary format, where the integer part equals",
                points: 20,
                negativePoints: 10,
                description: "",
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "unordered",
                answerOverride: true,
                options: [
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "",
                        textAfter: ", and the fractional part (without entering the decimal point) equals ",
                        correct: "1011"
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "",
                        textAfter: ".<br><br>",
                        correct: "11"
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "According to the IEEE754 standard the sign field will have binary value ",
                        textAfter: ", the mantissa field will have binary value ",
                        correct: "1"
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "",
                        textAfter: ", and the exponent field will have binary value ",
                        correct: "01111000000000000000000"
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "",
                        textAfter: ". If these values are placed into a single binary string according to the required format, it will have the value ",
                        correct: "10000010"
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "",
                        textAfter: ".",
                        correct: "11000001001111000000000000000000"
                    }
                ],
                warningMessage: []
            }
        },

        // Q3 - Two's complement (RC) arithmetic, n=8 (Image 5 / 24.jpg)
        // Operations: 10100101 - 01100100, 10100101 + 01100100
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "Answer the following using the RC system for representing binary numbers, where n=8 (number of bits).",
                points: 40,
                negativePoints: 20,
                description: "",
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "unordered",
                answerOverride: true,
                options: [
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "The result of the operation 10100101 - 01100100 is ",
                        textAfter: " (binary). There ",
                        correct: "01000001"
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "",
                        textAfter: " overflow.<br>",
                        correct: "is",
                        options: ["is", "is no"]
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "The result of the operation 10100101 + 01100100 is ",
                        textAfter: " (binary). There ",
                        correct: "00001001"
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "",
                        textAfter: " overflow.<br>",
                        correct: "is no",
                        options: ["is", "is no"]
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "The decimal value of the number 01100100 is ",
                        textAfter: ".<br>",
                        correct: 100
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "The result of shifting the number 10100101 by 3 positions to the left is ",
                        textAfter: " (binary), and if the number 10100101 is shifted by 3 positions to the right the result is ",
                        correct: "00101000"
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "",
                        textAfter: " (binary).",
                        correct: "11110100"
                    }
                ],
                warningMessage: []
            }
        },

        // Q4 - MIPS Procedure Call / JAL (Image 7 / 33.jpg)
        // $a0=4, $a1=8, proc at 2000, jal at 1008
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "When calling a procedure:",
                points: 30,
                negativePoints: 15,
                description: "",
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "unordered",
                answerOverride: true,
                code: [
                    {
                        language: "MIPS",
                        code: `1000 addi $a0, $zero, 4
1004 addi $a1, $zero, 8
1008 jal proc
1012 add $s1, $v0, $zero

proc:
2000 add $v0, $a0, $a1
2004 jr $ra`
                    }
                ],
                options: [
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "Register $v0 is used as ",
                        textAfter: ".<br>",
                        correct: "return value register",
                        options: ["return address register", "argument register", "return value register", "saved register"]
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "Register $a0 is used as ",
                        textAfter: ".<br>",
                        correct: "argument register",
                        options: ["return address register", "argument register", "return value register", "saved register"]
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "Register $ra is used as ",
                        textAfter: ".<br><br>",
                        correct: "return address register",
                        options: ["return address register", "argument register", "return value register", "saved register"]
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "At the moment when the instruction jal is executed, the value of $pc is ",
                        textAfter: ". This instruction will cause the value of $pc to become ",
                        correct: 1008
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "",
                        textAfter: " and the value of $ra to become ",
                        correct: 2000
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "",
                        textAfter: ". Upon completion of the procedure, it returns the value ",
                        correct: 1012
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "",
                        textAfter: ".",
                        correct: 12
                    }
                ],
                warningMessage: []
            }
        },

        // Q5 - Direct Mapped Cache: addresses 37-57, 6 passes, cache 3 CPI, RAM 77 CPI
        // (Images 1+6 / 20.jpg + 31.jpg) — answered version confirms values
        // Format: 8-bit addr, tag=3, block=3, word=2 bits
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "[Part 1] In a computer system, the main memory has a size of 256 words and a direct-mapped cache memory is used. The cache has 8 blocks. Each block has 4 words. Find the format of a memory address:",
                points: 50,
                negativePoints: 25,
                description: "",
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "unordered",
                answerOverride: true,
                options: [
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "To address all words in memory, ",
                        textAfter: " bits are needed.<br>",
                        correct: 8
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "Of these, to address words within one block (word offset), ",
                        textAfter: " bits are needed, to address the blocks (index) ",
                        correct: 2
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "",
                        textAfter: " bits are needed, and the tag uses ",
                        correct: 3
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "",
                        textAfter: " bits.<br><br>",
                        correct: 3
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "The computer executes a program that accesses memory addresses (decimal) 37 to 57 sequentially, 6 times in a row. In the first pass: ",
                        textAfter: " hits and ",
                        correct: 15
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "",
                        textAfter: " misses.<br>",
                        correct: 6
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "In each subsequent pass: ",
                        textAfter: " hits and ",
                        correct: 21
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "",
                        textAfter: " misses.<br>",
                        correct: 0
                    },
                    {
                        type: "number",
                        tolerance: { type: "absolute", value: 0.01 },
                        textBefore: "The overall hit rate during execution of this program is ",
                        textAfter: "%.<br>",
                        correct: 95.24
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "If the cost of accessing data in cache memory is 3 CPU cycles, and the cost of accessing data in main memory is 77 CPU cycles, then for the processor to read all data, a total of ",
                        textAfter: " clock cycles will be needed.",
                        correct: 822
                    }
                ],
                warningMessage: []
            }
        },

        // Q6 - Cache final state for addresses 37-57
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "[Part 2] After the program finishes (addresses 37-57, 6 passes), what is the final state of the cache memory? For each block, enter the tag that remains in memory (as a decimal number obtained from converting the binary tag bits). If the cache block is empty, enter -1.",
                points: 30,
                negativePoints: 15,
                description: "",
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "unordered",
                answerOverride: true,
                options: [
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "Block 000 (0): ",
                        textAfter: "<br>",
                        correct: -1
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "Block 001 (1): ",
                        textAfter: "<br>",
                        correct: 1
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "Block 010 (2): ",
                        textAfter: "<br>",
                        correct: 1
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "Block 011 (3): ",
                        textAfter: "<br>",
                        correct: 1
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "Block 100 (4): ",
                        textAfter: "<br>",
                        correct: 1
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "Block 101 (5): ",
                        textAfter: "<br>",
                        correct: 1
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "Block 110 (6): ",
                        textAfter: "<br>",
                        correct: 1
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "Block 111 (7): ",
                        textAfter: "",
                        correct: -1
                    }
                ],
                warningMessage: []
            }
        },

        // Q7 - MIPS Assembly Memory Content (Image 4 / 23.jpg)
        // addi $s2,$zero,8 / sll $t3,$t0,16 / andi $t1,$t1,0x0000FFFF /
        // or $t4,$t3,$t1 / sh $t4,0($s2) / sw $t1,2($s2) / addi $s2,$s2,6 / sb $t2,0($s2)
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "An assembly program and the contents of a part of the registers are given. What will the contents of memory be after execution of the program? Enter the corresponding hexadecimal values in the empty fields.",
                points: 40,
                negativePoints: 20,
                description: "",
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "unordered",
                answerOverride: true,
                code: [
                    {
                        language: "MIPS",
                        code: `addi $s2, $zero, 8
sll $t3, $t0, 16
andi $t1, $t1, 0x0000FFFF
or $t4, $t3, $t1
sh $t4, 0($s2)
sw $t1, 2($s2)
addi $s2, $s2, 6
sb $t2, 0($s2)`
                    }
                ],
                table: "[th]$s2,[th]$t0,[th]$t1,[th]$t2,[th]$t3,[th]$t4;b565007f,dccf4a89,1c7cb21e,fc4bfc05,e1e567eb,9bc44369",
                options: [
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "<br>Address 8 (0x08): ",
                        textAfter: "<br>",
                        correct: "b2"
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "Address 9 (0x09): ",
                        textAfter: "<br>",
                        correct: "1e"
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "Address 10 (0x0A): ",
                        textAfter: "<br>",
                        correct: "00"
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "Address 11 (0x0B): ",
                        textAfter: "<br>",
                        correct: "00"
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "Address 12 (0x0C): ",
                        textAfter: "<br>",
                        correct: "b2"
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "Address 13 (0x0D): ",
                        textAfter: "<br>",
                        correct: "1e"
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "Address 14 (0x0E): ",
                        textAfter: "",
                        correct: "05"
                    }
                ],
                warningMessage: []
            }
        },
        // Q8 - SM / DC / RC representations + CPI comparison (Image 5 / 1.png)
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "For each of the integer representation systems (SM, DC, RC), perform the following operations where the output of one is the input to the next. Use n=8, r=2.<br><br>r = number base, n = number of bits<br><br>a₀ = Represent the number 116₁₀ in each of the representations.<br>a₁ = Negative number. Change the sign of a₀.",
                points: 30,
                negativePoints: 15,
                description: "",
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "unordered",
                answerOverride: true,
                options: [
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "a₀ = 116, n=8, r=2 &nbsp;&nbsp; SM: ",
                        textAfter: "&nbsp;&nbsp;",
                        correct: "01110100"
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "DC: ",
                        textAfter: "&nbsp;&nbsp;",
                        correct: "01110100"
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "RC: ",
                        textAfter: "<br>",
                        correct: "01110100"
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "a₁ = compl(a₀) &nbsp;&nbsp; SM: ",
                        textAfter: "&nbsp;&nbsp;",
                        correct: "11110100"
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "DC: ",
                        textAfter: "&nbsp;&nbsp;",
                        correct: "10001011"
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "RC: ",
                        textAfter: "",
                        correct: "10001100"
                    }
                ],
                warningMessage: []
            }
        },

        // Q9 - CPI comparison two processors (Image 5 / 1.png, second part)
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "A program with I instructions is executed on two processors A and B. A has CPI_A=2, and B has CPI_B=2.5. On the other hand, B has a working frequency that is 50% higher than that of A.",
                points: 20,
                negativePoints: 10,
                description: "(Round all numbers to two decimal places)",
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "unordered",
                answerOverride: true,
                options: [
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "According to this, the faster processor is ",
                        textAfter: ", by ",
                        correct: "B",
                        options: ["A", "B"]
                    },
                    {
                        type: "number",
                        tolerance: { type: "absolute", value: 0.01 },
                        textBefore: "",
                        textAfter: " times.<br>",
                        correct: 1.20
                    },
                    {
                        type: "number",
                        tolerance: { type: "absolute", value: 0.01 },
                        textBefore: "If CPI_B = ",
                        textAfter: ", and everything else remains the same, both processors will have equal performance.",
                        correct: 3.00
                    }
                ],
                warningMessage: []
            }
        },

        // Q10 - MIPS Memory + Registers (Image 2 / 6.png)
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "An assembly program and the contents of a part of memory are given. What will the contents of memory and the registers be after execution of the program? Enter the corresponding hexadecimal values in the empty fields (add leading zeros according to the size of the registers).",
                points: 40,
                negativePoints: 20,
                description: "",
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "unordered",
                answerOverride: true,
                code: [
                    {
                        language: "MIPS",
                        code: `addi $s0, $zero, 65
addi $s0, $s0, -5
srl $t0, $s0, 16
lb $t1, 5($s0)
lw $t2, 2($s0)
or $t3, $s0, $t0
lh $t4, 3($s0)`
                    }
                ],
                table: "[th]Addr (dec),[th]Addr (hex),[th]Content;60,3C,AA;61,3D,BB;62,3E,CC;63,3F,DD;64,40,11;65,41,22;66,42,33",
                options: [
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "<br>$s0: ",
                        textAfter: "<br>",
                        correct: "0000003C"
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "$t0: ",
                        textAfter: "<br>",
                        correct: "00000000"
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "$t1: ",
                        textAfter: "<br>",
                        correct: "00000022"
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "$t2: ",
                        textAfter: "<br>",
                        correct: "CCDD1122"
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "$t3: ",
                        textAfter: "<br>",
                        correct: "0000003C"
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "$t4: ",
                        textAfter: "",
                        correct: "FFFFDD11"
                    }
                ],
                warningMessage: []
            }
        },

        // Q11 - MIPS Branch Prediction (nested loop) (Image 4 / 14.png)
        // niza: 1,3,5,7,9 — outer loop 5 iters, inner loop 3 iters each
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "For the given MIPS code, answer the following questions:<br><br>Note: besides the iterations that will be executed, also consider the instruction for breaking the loop.",
                points: 60,
                negativePoints: 30,
                description: "",
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "unordered",
                answerOverride: true,
                code: [
                    {
                        language: "MIPS",
                        code: `.data
    niza: .word 1, 3, 5, 7, 9

.text
    addi $s1, $zero, 5   #broj na elementi vo nizata
    addi $s2, $zero, 1   #proizvod
    addi $s3, $zero, 0   #brojac za ciklus
    addi $t3, $zero, 3   #konstanta za vnatresен loop

    la $s0, niza

loop:
    beq $s3, $s1, endLoop
    sll $t0, $s3, 2
    add $t0, $t0, $s0
    lw $t1, 0($t0)
    addi $t4, $zero, 0

innerLoop:
    mult $t1, $s2
    mflo $s2
    addi $t4, $t4, 1
    bne $t4, $t3, innerLoop

    sw $s2, 0($t0)
    addi $s3, $s3, 1
    j loop

endLoop:`
                    }
                ],
                options: [
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "How many total instructions will be executed in the code? ",
                        textAfter: ".<br>",
                        correct: 106
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "How many of those instructions are branch instructions? ",
                        textAfter: ".<br><br>",
                        correct: 21
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "If the CPI for every instruction is 1 and the processor has no branch prediction implemented, how many clock cycles will be needed to execute the program? ",
                        textAfter: ".<br>",
                        correct: 127
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "Always Take: ",
                        textAfter: ".<br>",
                        correct: 116
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "Never Take: ",
                        textAfter: ".<br>",
                        correct: 117
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "BTFN (Backward Taken, Forward Not Taken): ",
                        textAfter: ".<br>",
                        correct: 112
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "1-bit predictor (initial state: Not Taken = 0): ",
                        textAfter: ".<br>",
                        correct: 117
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "2-bit dynamic prediction (initial state 01 = Weakly Taken): ",
                        textAfter: ".",
                        correct: 122
                    }
                ],
                warningMessage: []
            }
        },

        // Q12 - MIPS Assembly: find minimum (Image 1 / 5.png)
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "Complete the assembly program that reads from standard input until 0 is entered, then prints the minimum entered number to standard output.",
                points: 30,
                negativePoints: 15,
                description: "",
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "unordered",
                answerOverride: true,
                code: [
                    {
                        language: "MIPS",
                        code: `.data
najmalBroj: .asciiz "Najmaliot broj e: "

.text
# $s0 = najmaliot broj
# $t0 = momentalno vneseniot broj
addi $t0, $zero, -1    # inicijalizacija na $t0
addi $s0, $zero, 2147483647  # max INT_32 value

loop:
    li $v0, 5          # citanje broj od stdin
    syscall

    add $t0, $zero, $v0    # $t0 = vnesen_broj
    beq $t0, $zero, endLoop  # ako e vneseno 0, kraj

    blt $t0, $s0, pomal   # vneseniot broj e pomal od min, update
    j loop

pomal:
    add $s0, $zero, $t0   # azuriraj min broj
    j loop

endLoop:
    # pechati labela
    la $a0, najmalBroj
    li $v0, 4
    syscall
    # pechati min broj (int)
    add $a0, $zero, $s0
    li $v0, 1
    syscall`
                    }
                ],
                options: [
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "The data directive used for the string label is ",
                        textAfter: ".<br>",
                        correct: ".asciiz",
                        options: [".asciiz", ".word", ".byte", ".space", ".ascii"]
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "The instruction used to initialize $t0 to -1 is ",
                        textAfter: ".<br>",
                        correct: "addi",
                        options: ["addi", "add", "li", "lw", "move"]
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "To read an integer from stdin, $v0 is loaded with syscall code ",
                        textAfter: " before syscall.<br>",
                        correct: "5",
                        options: ["1", "4", "5", "10", "11"]
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "The instruction used to check if 0 was entered is ",
                        textAfter: ".<br>",
                        correct: "beq",
                        options: ["beq", "bne", "blt", "bgt", "j"]
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "In the pomal label, to update the minimum, the instruction used is: add $s0, ",
                        textAfter: ", $t0.<br>",
                        correct: "$zero",
                        options: ["$zero", "$s0", "$t0", "$s1"]
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "To load the address of the label string, the register used is la ",
                        textAfter: ", najmalBroj.<br>",
                        correct: "$a0",
                        options: ["$a0", "$v0", "$t0", "$s0", "$a1"]
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "To print an integer, $v0 is loaded with syscall code ",
                        textAfter: " before syscall.",
                        correct: "1",
                        options: ["1", "4", "5", "10", "11"]
                    }
                ],
                warningMessage: []
            }
        }

    ],
    hasTimer: false,
    timer: 0,
    quizSettings: {
        shuffleQuestions: false,
        title: "AOK Exam 3",
        courseId: "AOK",
        duration: 7200,
        date: new Date("2026-06-28"),
        description: "AOK June Exam 2 — CPI, IEEE754, two's complement, JAL procedure, direct-mapped cache (37-57), MIPS assembly memory, SM/DC/RC, branch prediction (nested loop), and MIPS minimum finder.",
        id: 4,
        type: "Exam",
        quizVersion: 13,
    }
}

export default demo;