import {QuestionType} from "../../../../src/types/QuestionType.ts";

const demo = {
    questions: [

        // Q1 - Expression: a = b*c + d/v - 5 (Image 1, Q1)
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "Complete the assembly program that computes the following expression: a = b*c + d/v - 5.",
                points: 20,
                negativePoints: 10,
                description: "",
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "unordered",
                answerOverride: true,
                code: [
                    {
                        language: "MIPS",
                        code: `# $s0 = a
# $s1 = b
# $s2 = c
# $s3 = d
# $s4 = v
# $s5 = 5

mult $s1, ___         # b*c
mflo $t0              # $t0 = b*c

div $s3, $s4
mflo ___              # $t1 = d/v

add $s0, ___, $t1    # $s0 = b*c + d/v

___ $s0, $s0, -5     # $s0 = b*c + d/v - 5`
                    }
                ],
                options: [
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "mult $s1, ",
                        textAfter: "&nbsp;&nbsp;&nbsp;&nbsp;# b*c<br>",
                        correct: "$s2",
                        options: ["$s0", "$s1", "$s2", "$s3", "$s4", "$s5", "$t0", "$t1"]
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "mflo ",
                        textAfter: "&nbsp;&nbsp;&nbsp;&nbsp;# $t0 = b*c<br>div $s3, $s4<br>",
                        correct: "$t0",
                        options: ["$s0", "$t0", "$t1", "$t2"]
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "mflo ",
                        textAfter: "&nbsp;&nbsp;&nbsp;&nbsp;# $t1 = d/v<br>",
                        correct: "$t1",
                        options: ["$s0", "$t0", "$t1", "$t2"]
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "add $s0, ",
                        textAfter: ", $t1&nbsp;&nbsp;&nbsp;&nbsp;# $s0 = b*c + d/v<br>",
                        correct: "$t0",
                        options: ["$s0", "$s1", "$t0", "$t1"]
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "",
                        textAfter: " $s0, $s0, -5&nbsp;&nbsp;&nbsp;&nbsp;# $s0 = b*c + d/v - 5",
                        correct: "addi",
                        options: ["add", "addi", "sub", "subi", "addu"]
                    }
                ],
                warningMessage: []
            }
        },

        // Q2 - Bit manipulation: move top 8 bits of $s0 to bottom 8 bits of $s1 (Image 1, Q2)
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "Complete the assembly program that places the first (most significant) 8 bits of $s0 as the last (least significant) 8 bits of $s1.",
                points: 20,
                negativePoints: 10,
                description: "",
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "unordered",
                answerOverride: true,
                code: [
                    {
                        language: "MIPS",
                        code: `srl $s0, ___, ___      # shift $s0 right by 24 to bring top 8 bits to bottom

andi $s1, ___, 0xffffff00   # clear bottom 8 bits of $s1

___ $s1, $s1, ___           # place shifted bits into bottom 8 of $s1`
                    }
                ],
                options: [
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "srl $s0, ",
                        textAfter: ", ",
                        correct: "$s0",
                        options: ["$s0", "$s1", "$t0", "$t1"]
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "",
                        textAfter: "&nbsp;&nbsp;&nbsp;&nbsp;# shift right by 24<br>",
                        correct: "24",
                        options: ["8", "16", "24", "32"]
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "andi $s1, ",
                        textAfter: ", 0xffffff00&nbsp;&nbsp;&nbsp;&nbsp;# clear bottom 8 bits<br>",
                        correct: "$s1",
                        options: ["$s0", "$s1", "$t0", "$t1"]
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "",
                        textAfter: " $s1, $s1, ",
                        correct: "or",
                        options: ["and", "or", "xor", "add", "nor"]
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "",
                        textAfter: "&nbsp;&nbsp;&nbsp;&nbsp;# combine",
                        correct: "$s0",
                        options: ["$s0", "$s1", "$t0", "$t1"]
                    }
                ],
                warningMessage: []
            }
        },

        // Q3 - if-else C++ to MIPS (Image 2, Q1)
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "Complete the assembly program that is equivalent to the following C++ code. Variable a is assigned register $s0, variable b is assigned register $s1.",
                points: 20,
                negativePoints: 10,
                description: "",
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "unordered",
                answerOverride: true,
                code: [
                    {
                        language: "C++",
                        code: `a = 103;
if (a > 100) {
    b = a - 100;
} else {
    b = a;
}`
                    },
                    {
                        language: "MIPS",
                        code: `addi $s0, $zero, 103
addi $t0, $zero, 100

ble $s0, $t0, ___    # if a <= 100, go to else

addi $s1, $s0, -100  # b = a - 100
j ___                 # skip else

else:
    addi ___, $s0, 0  # b = a

nextinst:`
                    }
                ],
                options: [
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "ble $s0, $t0, ",
                        textAfter: "&nbsp;&nbsp;&nbsp;&nbsp;# if a <= 100, go to else<br>addi $s1, $s0, -100<br>",
                        correct: "else",
                        options: ["else", "nextinst", "loop", "end", "krajCiklus"]
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "j ",
                        textAfter: "&nbsp;&nbsp;&nbsp;&nbsp;# skip else block<br><br>else:<br>",
                        correct: "nextinst",
                        options: ["else", "nextinst", "loop", "end"]
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "addi ",
                        textAfter: ", $s0, 0&nbsp;&nbsp;&nbsp;&nbsp;# b = a",
                        correct: "$s1",
                        options: ["$s0", "$s1", "$t0", "$t1"]
                    }
                ],
                warningMessage: []
            }
        },

        // Q4 - Sum of first 10 numbers (Image 2, Q2)
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "Complete the assembly program that computes the sum of the first 10 numbers and stores it in $s3.",
                points: 20,
                negativePoints: 10,
                description: "",
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "unordered",
                answerOverride: true,
                code: [
                    {
                        language: "MIPS",
                        code: `add $t0, $zero, 10   # loop limit
add $t1, $zero, 1    # counter starts at 1

ciklus:
    bgt ___, $t0, ___  # if counter > 10, exit loop

    add $s3, ___, $t1  # sum += counter

    ___ $t1, $t1, 1   # counter++

    j ciklus

krajCiklus:`
                    }
                ],
                options: [
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "bgt ",
                        textAfter: ", $t0, ",
                        correct: "$t1",
                        options: ["$t0", "$t1", "$s3", "$zero"]
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "",
                        textAfter: "&nbsp;&nbsp;&nbsp;&nbsp;# exit<br>",
                        correct: "krajCiklus",
                        options: ["ciklus", "krajCiklus", "end", "loop"]
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "add $s3, ",
                        textAfter: ", $t1&nbsp;&nbsp;&nbsp;&nbsp;# sum += counter<br>",
                        correct: "$s3",
                        options: ["$s3", "$t0", "$t1", "$zero"]
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "",
                        textAfter: " $t1, $t1, 1&nbsp;&nbsp;&nbsp;&nbsp;# counter++",
                        correct: "addi",
                        options: ["add", "addi", "sub", "subi"]
                    }
                ],
                warningMessage: []
            }
        },

        // Q5 - Find minimum number (Image 3)
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
addi $t0, $zero, -1        # inicijalizacija na $t0
addi $s0, $zero, 2147483647  # max INT_32 value

loop:
    li $v0, 5              # citanje broj od stdin
    syscall

    add $t0, $zero, $v0    # $t0 = vnesen_broj
    beq $t0, $zero, endLoop  # ako e vneseno 0, kraj

    blt $t0, $s0, pomal    # vneseniot broj e pomal od min
    j loop

pomal:
    add $s0, $zero, $t0    # azuriraj min broj
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
                        textBefore: "The data directive used for the string is ",
                        textAfter: ".<br>",
                        correct: ".asciiz",
                        options: [".asciiz", ".word", ".byte", ".space", ".ascii"]
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "The instruction used to initialize $t0 is ",
                        textAfter: " $t0, $zero, -1.<br>",
                        correct: "addi",
                        options: ["addi", "add", "li", "lw", "move"]
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "To read an integer from stdin, load $v0 with syscall code ",
                        textAfter: " before syscall.<br>",
                        correct: "5",
                        options: ["1", "4", "5", "10", "11"]
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "The branch instruction to check if 0 was entered is ",
                        textAfter: " $t0, $zero, endLoop.<br>",
                        correct: "beq",
                        options: ["beq", "bne", "blt", "bgt", "j"]
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "In pomal, to update the minimum: add $s0, ",
                        textAfter: ", $t0.<br>",
                        correct: "$zero",
                        options: ["$zero", "$s0", "$t0", "$s1"]
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "To load the address of the label string: la ",
                        textAfter: ", najmalBroj.<br>",
                        correct: "$a0",
                        options: ["$a0", "$v0", "$t0", "$s0", "$a1"]
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "To print an integer, load $v0 with syscall code ",
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
        title: "AOK MIPS Code",
        courseId: "AOK",
        duration: 3600,
        date: new Date("2026-06-28"),
        description: "MIPS code completion exercises: arithmetic expressions, bit manipulation, if-else, loops, and I/O.",
        id: 5,
        type: "Laboratory",
        quizVersion: 1,
    }
}

export default demo;