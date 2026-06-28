import {QuestionType} from "../../../../src/types/QuestionType.ts";

const demo = {
    questions: [
        // Q1 - CPI / Performance (Image 5 / 8.jpg)
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "A program consists of 1,800,000,000 instructions. It is executed in 1.0 second on a computer with a frequency of 1800 MHz. The program has",
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
                        correct: 1800000000
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "The CPI of the processor is ",
                        textAfter: ".<br><br>",
                        correct: 1
                    },
                    {
                        type: "number",
                        tolerance: { type: "absolute", value: 0.01 },
                        textBefore: "If the clock speed is increased by 6 times and the CPI is increased by 3 times, the same program will execute in ",
                        textAfter: " seconds.",
                        correct: 0.5
                    }
                ],
                warningMessage: []
            }
        },

        // Q2 - IEEE 754 Single Precision: 37.5 (Image 6 / 9.jpg)
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "In the process of representing the number 37.5 in IEEE754 single precision format, it is first represented in binary format, where the integer part equals",
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
                        correct: "100101"
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "",
                        textAfter: ".<br><br>",
                        correct: "1"
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "According to the IEEE754 standard the sign field will have binary value ",
                        textAfter: ", the mantissa field will have binary value ",
                        correct: "0"
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "",
                        textAfter: ", and the exponent field will have binary value ",
                        correct: "00101100000000000000000"
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "",
                        textAfter: ". If these values are placed into a single binary string according to the required format, it will have the value ",
                        correct: "10000100"
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "",
                        textAfter: ".",
                        correct: "01000010000101100000000000000000"
                    }
                ],
                warningMessage: []
            }
        },

        // Q3 - Two's complement (RC) arithmetic, n=8 (Image 7 / 10.jpg)
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
                        textBefore: "The result of the operation 11010110 - 00101011 is ",
                        textAfter: " (binary). There ",
                        correct: "10101011"
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
                        type: "string",
                        tolerance: 0,
                        textBefore: "The result of the operation 11010110 + 00101011 is ",
                        textAfter: " (binary). There ",
                        correct: "00000001"
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
                        textBefore: "The decimal value of the number 00101011 is ",
                        textAfter: ".<br>",
                        correct: 43
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "The result of shifting the number 11010110 by 3 positions to the left is ",
                        textAfter: " (binary), and if the number 11010110 is shifted by 3 positions to the right the result is ",
                        correct: "10110000"
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "",
                        textAfter: " (binary).",
                        correct: "11111010"
                    }
                ],
                warningMessage: []
            }
        },

        // Q4 - MIPS Procedure Call / JAL (Image 9 / 16.jpg)
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
                        code: `1020 addi $a0, $zero, 10
1024 addi $a1, $zero, 5
1028 jal proc
1032 add $s1, $v0, $zero

proc:
1052 add $v0, $a0, $a1
1056 jr $ra`
                    }
                ],
                options: [
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "Register $ra is used as ",
                        textAfter: ".<br>",
                        correct: "return address register",
                        options: ["return address register", "argument register", "return value register", "saved register"]
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "Register $v1 is used as ",
                        textAfter: ".<br>",
                        correct: "return value register",
                        options: ["return address register", "argument register", "return value register", "saved register"]
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "Register $a1 is used as ",
                        textAfter: ".<br><br>",
                        correct: "argument register",
                        options: ["return address register", "argument register", "return value register", "saved register"]
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "At the moment when the instruction jal is executed, the value of $pc is ",
                        textAfter: ". This instruction will cause the value of $pc to become ",
                        correct: 1028
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "",
                        textAfter: " and the value of $ra to become ",
                        correct: 1052
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "",
                        textAfter: ". Upon completion of the procedure, it returns the value ",
                        correct: 1032
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "",
                        textAfter: ".",
                        correct: 15
                    }
                ],
                warningMessage: []
            }
        },

        // Q5 - Virtual Memory (Image 1 / 2.jpg)
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "[Part 1] The size of the physical address is 10 bits, of which 4 are for the offset. The size of the virtual address is 13 bits.",
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
                        textBefore: "The size of one frame is ",
                        textAfter: " bytes.<br>",
                        correct: 16
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "The size of the physical memory is ",
                        textAfter: " bytes.<br>",
                        correct: 1024
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "The size of the virtual memory is ",
                        textAfter: " pages.<br>",
                        correct: 512
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "The page table has a total of ",
                        textAfter: " entries and is stored in ",
                        correct: 512
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "",
                        textAfter: ".<br><br>",
                        correct: "RAM",
                        options: ["RAM", "Cache", "Register", "ROM"]
                    }
                ],
                warningMessage: []
            }
        },

        // Q5b - Virtual Memory page lookup (same image)
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "[Part 2] The content of a part of the page table is as follows:",
                points: 20,
                negativePoints: 10,
                description: "",
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "unordered",
                answerOverride: true,
                table: "[th]Index,[th]Frame,[th]Validity;0,7,1;1,15,1;2,3,1;3,4,1;4,9,1;5,1,1;6,0,0;7,13,0",
                options: [
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "<br>According to the table, fill in the frame in which each page is located. If the page is not in any frame, enter -1.<br><br>Page 3: ",
                        textAfter: "<br>",
                        correct: 4
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "Page 4: ",
                        textAfter: "",
                        correct: 9
                    }
                ],
                warningMessage: []
            }
        },

        // Q6 - Direct Mapped Cache (Image 2 / 3.jpg)
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
                        textBefore: "The computer executes a program that accesses memory addresses (decimal) 26 to 36 sequentially, 7 times in a row. In the first pass: ",
                        textAfter: " hits and ",
                        correct: 7
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "",
                        textAfter: " misses.<br>",
                        correct: 4
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "In each subsequent pass: ",
                        textAfter: " hits and ",
                        correct: 11
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
                        correct: 94.81
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "If the cost of accessing data in cache memory is 8 CPU cycles, and the cost of accessing data in main memory is 43 CPU cycles, then for the processor to read all data, a total of ",
                        textAfter: " clock cycles will be needed.",
                        correct: 756
                    }
                ],
                warningMessage: []
            }
        },

        // Q7 - Cache final state (same image, second part)
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "[Part 2] After the program finishes, what is the final state of the cache memory? For each block, enter the tag that remains in memory (as a decimal number obtained from converting the binary tag bits). If the cache block is empty, enter -1.",
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
                        correct: 1
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
                        correct: -1
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "Block 011 (3): ",
                        textAfter: "<br>",
                        correct: -1
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "Block 100 (4): ",
                        textAfter: "<br>",
                        correct: -1
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "Block 101 (5): ",
                        textAfter: "<br>",
                        correct: -1
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "Block 110 (6): ",
                        textAfter: "<br>",
                        correct: 0
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "Block 111 (7): ",
                        textAfter: "",
                        correct: 0
                    }
                ],
                warningMessage: []
            }
        },

        // Q8 - MIPS Branch Prediction (Image 3 / 4.jpg)
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "For the given MIPS code, answer the following questions:",
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
                        code: `    la $s0, niza
    addi $s2, $zero, 1
    addi $s1, $zero, 8    #loop limit
    addi $s3, $zero, 0    #loop counter

loop:
    beq $s3, $s1, endLoop
    sll $t0, $s3, 2
    add $t0, $t0, $s0
    lw $t1, 0($t0)
    mult $t1, $s2
    mflo $s2
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
                        correct: 77
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "How many of those instructions are branch instructions? ",
                        textAfter: ".<br><br>",
                        correct: 9
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "If the CPI for every instruction is 1 and the processor has no branch prediction implemented, how many clock cycles will be needed to execute the program? ",
                        textAfter: ".<br>",
                        correct: 86
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "If branch prediction is used, how many fetched instructions (instructions that enter the instruction fetch stage of the pipeline) will there be with the Always Take strategy? ",
                        textAfter: ".<br>",
                        correct: 85
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "Never Take: ",
                        textAfter: ".<br>",
                        correct: 78
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "BTFN (Backward Taken, Forward Not Taken): ",
                        textAfter: ".<br>",
                        correct: 78
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "1-bit predictor (initial state: Not Taken): ",
                        textAfter: ".<br>",
                        correct: 78
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "2-bit predictor starting from state 01 (Weakly Taken): ",
                        textAfter: ".",
                        correct: 78
                    }
                ],
                warningMessage: []
            }
        },

        // Q9 - MIPS Assembly Memory Content (Image 8 / 12.jpg)
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
                renderType: "tableVend-Address,Address (Hex),Contains",
                answerOverride: true,
                code: [
                    {
                        language: "MIPS",
                        code: `addi $s5, $zero, 52
sll $t5, $t2, 16
andi $t3, $t3, 0x0000FFFF
or $t6, $t5, $t3
sh $t6, 0($s5)
sw $t3, 2($s5)
addi $s5, $s5, 6
sb $t4, 0($s5)`
                    }
                ],
                table: "[th]$s5,[th]$t2,[th]$t3,[th]$t4,[th]$t5,[th]$t6;e5762033,4013ee61,6dc4df3d,34ac4794,61ca0f86,80edb644",
                options: [
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "Address 52",
                        textAfter: "(0x34)",
                        correct: "df"
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "Address 53 ",
                        textAfter: "(0x35): ",
                        correct: "3d"
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "Address 54  ",
                        textAfter: "(0x36)",
                        correct: "00"
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "Address 55  ",
                        textAfter: "(0x37)",
                        correct: "00"
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "Address 56  ",
                        textAfter: "(0x38)",
                        correct: "df"
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "Address 57  ",
                        textAfter: "(0x39)",
                        correct: "3d"
                    }
                ],
                warningMessage: []
            }
        },
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "Determine the Boolean expressions for the circuit at the specified points.",
                points: 40,
                negativePoints: 20,
                description: "",
                hasImage: true,
                imageLink: "/images/aokE2-1.png",
                required: false,
                renderType: "unordered",
                answerOverride: true,
                options: [
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "Point B ",
                        textAfter: " <br> ",
                        correct: "x'y'",
                        options: ["x'y","xy","x'y'","xy'","x+y","x'+y","xy+x'y","0","1","x⊕y"]
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "Point I ",
                        textAfter: "",
                        correct: "0",
                        options: ["x'y","xy","x'y'","xy'","x+y","x'+y","xy+x'y","0","1","x⊕y"]
                    },
                ],
                warningMessage: []
            }
        },
    ],
    hasTimer: false,
    timer: 0,
    quizSettings: {
        shuffleQuestions: false,
        title: "AOK Exam 2",
        courseId: "AOK",
        duration: 7200,
        date: new Date("2026-06-28"),
        description: "AOK June Exam questions covering performance/CPI, IEEE754, two's complement, MIPS procedure calls, virtual memory, cache memory, branch prediction, and MIPS assembly.",
        id: 3,
        type: "Exam",
        quizVersion: 13,
    }
}

export default demo;