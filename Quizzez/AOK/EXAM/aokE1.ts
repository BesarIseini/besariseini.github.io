import {QuestionType} from "../../../../src/types/QuestionType.ts";

const demo = {
    questions: [
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "Order the phases according to the execution sequence. Enter 0 if the phase does not exist.",
                points: 20,
                negativePoints: 10,
                description: "",
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "unordered",
                options: [
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "ID: ",
                        textAfter: "<br>",
                        correct: 2
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "MEM: ",
                        textAfter: "<br>",
                        correct: 4
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "SW: ",
                        textAfter: "<br>",
                        correct: 0
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "DEC: ",
                        textAfter: "<br>",
                        correct: 0
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "EX: ",
                        textAfter: "<br>",
                        correct: 3
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "IF: ",
                        textAfter: "<br>",
                        correct: 1
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "WB: ",
                        textAfter: "<br>",
                        correct: 3
                    }
                ],
                warningMessage: []
            }
        },
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "",
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
                        textBefore: "A program consists of 8 instructions. If a processor without pipelining is used where each clock cycle has a duration of 6 ns, then the entire program will be executed in ",
                        textAfter: "",
                        correct: 8
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: " cycles, which is ",
                        textAfter: "ns.<br><br>",
                        correct: 48
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "If a MIPS processor with 5 pipeline stages is used where each clock cycle has a duration of 2 ns, then the entire program will be executed in ",
                        textAfter: "",
                        correct: 12
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: " cycles, which is ",
                        textAfter: "ns.<br><br>",
                        correct: 24
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "The pipelined processor is ",
                        textAfter: " times ",
                        correct: 2
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "IF: ",
                        textAfter: "than the non-pipelined processor.",
                        correct: "faster",
                        options: ["faster", "slower"],
                    }
                ],
                warningMessage: []
            }
        },
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "The following code is given: ",
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
                        code: `1: add $s0, $t0, $t1
2: lw $s2, 4($t0)
3: and $s3, $s2, $s4
4: or $s1, $s3, $s0`
                    }
                ],
                id: 0,
                dependsOn: -1,
                options: [
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "In line 2 ",
                        textAfter: ". ",
                        correct: "No hazard",
                        options: ["No hazard", "There is a data hazard", "There is a control hazard", "There is a structural hazard", "Cannot determine"],
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "The hazard is caused by the register ",
                        textAfter: ". ",
                        correct: "No hazard",
                        options: ["No hazard", "$s2", "$s3", "$s0", "$t0"],
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: " The hazard can be resolved with ",
                        textAfter: ". <br>",
                        correct: "No hazard",
                        options: ["No hazard", "Stall", "Forwarding", "Branch prediction", "Pipeline flush", "Cannot be resolved"],
                    },
                    // second paragraph
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "In line 3 ",
                        textAfter: ". ",
                        correct: "There is a data hazard",
                        options: ["No hazard", "There is a data hazard", "There is a control hazard", "There is a structural hazard", "Cannot determine"],
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "The hazard is caused by the register ",
                        textAfter: ". ",
                        correct: "$s2",
                        options: ["No hazard", "$s2", "$s3", "$s0", "$t0"],
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: " The hazard can be resolved with ",
                        textAfter: ". <br>",
                        correct: "Stall",
                        options: ["No hazard", "Stall", "Forwarding", "Branch prediction", "Pipeline flush", "Cannot be resolved"],
                    },
                    // Paragraph 3
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "In line 4 ",
                        textAfter: ". ",
                        correct: "There is a data hazard",
                        options: ["No hazard", "There is a data hazard", "There is a control hazard", "There is a structural hazard", "Cannot determine"],
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "The hazard is caused by the register ",
                        textAfter: ". ",
                        correct: "$s3",
                        options: ["No hazard", "$s2", "$s3", "$s0", "$t0"],
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: " The hazard can be resolved with ",
                        textAfter: ". <br>",
                        correct: "Forwarding",
                        options: ["No hazard", "Stall", "Forwarding", "Branch prediction", "Pipeline flush", "Cannot be resolved"],
                    },
                ],
                warningMessage: []
            }
        },


        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "Which of the following pipeline registers exist in a MIPS processor?",
                description: "Select one or more:",
                points: 10,
                hasImage: false,
                imageLink: "/ananas.jpeg",
                required: false,
                renderType: "text" as const,
                options: [
                    { text: "IF/MEM", isCorrect: false, id: 0 },
                    { text: "WB/ID", isCorrect: false, id: 1 },
                    { text: "ID/EX", isCorrect: true, id: 2 },
                    { text: "MEM/WB", isCorrect: true, id: 3 },
                    { text: "ID/IF", isCorrect: false, id: 4 },
                    { text: "EX/WB", isCorrect: false, id: 5 },
                    { text: "EX/MEM", isCorrect: true, id: 6 },
                ],
                warningMessage: [
                ]
            }
        },
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "The following code is given: ",
                points: 40,
                negativePoints: 20,
                description: "",
                hasImage: true,
                imageLink: "/images/aokE1-1.png",
                required: false,
                renderType: "unordered",
                answerOverride: true,
                code: [
                    {
                        language: "MIPS",
                        code: `1: add $s0, $t0, $t1
2: and $s3, $s2, $s0
3: or $s4, $s0, $t2`
                    }
                ],
                id: 0,
                dependsOn: -1,
                options: [
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "If the instruction in line 2 is in the EX stage, then FA will have the value ",
                        textAfter: " and FB will have the value ",
                        correct: "00",
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "",
                        textAfter: ". <br>",
                        correct: "10",
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "If the instruction in line 3 is in the EX stage, then FA will have the value ",
                        textAfter: " and FB will have the value ",
                        correct: "01",
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "",
                        textAfter: ". ",
                        correct: "00",
                    },
                ],
                warningMessage: []
            }
        },
    {
        type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
        obj: {
            question: "Let the instruction add $t1, $t2, $t3, located in the instruction memory at address 1000, be executed in the datapath. Fill in the values (in decimal number system). If a value is not used/applicable, enter the /(forward slash) sign.",
            points: 40,
            negativePoints: 20,
            description: "MIPS Datapath Execution Values",
            hasImage: true,
            imageLink: "/images/aokE1-2.png",
            required: false,
            renderType: "unordered",
            answerOverride: true,
            code: [],
            id: 0,
            dependsOn: -1,
            options: [
                { type: "string", tolerance: 0, textBefore: "C1: ", textAfter: "&nbsp;&nbsp;", correct: "1" },
                { type: "string", tolerance: 0, textBefore: "C2: ", textAfter: "&nbsp;&nbsp;", correct: "1" },
                { type: "string", tolerance: 0, textBefore: "C3: ", textAfter: "&nbsp;&nbsp;", correct: "0" },
                { type: "string", tolerance: 0, textBefore: "C4: ", textAfter: "&nbsp;&nbsp;", correct: "2" },
                { type: "string", tolerance: 0, textBefore: "C5: ", textAfter: "&nbsp;&nbsp;", correct: "0" },
                { type: "string", tolerance: 0, textBefore: "C6: ", textAfter: "&nbsp;&nbsp;", correct: "0" },
                { type: "string", tolerance: 0, textBefore: "C7: ", textAfter: "&nbsp;&nbsp;", correct: "0" },
                { type: "string", tolerance: 0, textBefore: "C8: ", textAfter: "<br><br>", correct: "1" },

                { type: "string", tolerance: 0, textBefore: "I1: ", textAfter: "&nbsp;&nbsp;", correct: "10" },
                { type: "string", tolerance: 0, textBefore: "I2: ", textAfter: "&nbsp;&nbsp;", correct: "11" },
                { type: "string", tolerance: 0, textBefore: "I3: ", textAfter: "&nbsp;&nbsp;", correct: "9" },
                { type: "string", tolerance: 0, textBefore: "I4: ", textAfter: "&nbsp;&nbsp;", correct: "9" },
                { type: "string", tolerance: 0, textBefore: "I5: ", textAfter: "&nbsp;&nbsp;", correct: "/" },
                { type: "string", tolerance: 0, textBefore: "I6: ", textAfter: "<br><br>", correct: "32" },

                { type: "string", tolerance: 0, textBefore: "D1: ", textAfter: "&nbsp;&nbsp;", correct: "8" },
                { type: "string", tolerance: 0, textBefore: "D2: ", textAfter: "&nbsp;&nbsp;", correct: "10" },
                { type: "string", tolerance: 0, textBefore: "D3: ", textAfter: "&nbsp;&nbsp;", correct: "/" },
                { type: "string", tolerance: 0, textBefore: "D4: ", textAfter: "&nbsp;&nbsp;", correct: "10" },
                { type: "string", tolerance: 0, textBefore: "D5: ", textAfter: "&nbsp;&nbsp;", correct: "18" },
                { type: "string", tolerance: 0, textBefore: "D6: ", textAfter: "&nbsp;&nbsp;", correct: "/" },
                { type: "string", tolerance: 0, textBefore: "D7: ", textAfter: "<br><br>", correct: "18" },

                { type: "string", tolerance: 0, textBefore: "P1: ", textAfter: "&nbsp;&nbsp;", correct: "1000" },
                { type: "string", tolerance: 0, textBefore: "P4: ", textAfter: "<br><br>", correct: "1004" },

                { type: "string", tolerance: 0, textBefore: "R1: ", textAfter: "&nbsp;&nbsp;", correct: "2" },
                { type: "string", tolerance: 0, textBefore: "R3: ", textAfter: "", correct: "0" }
            ],
            warningMessage: []
        }
    },
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "Order the memories according to speed (smallest value for the fastest)",
                points: 30,
                negativePoints: 15,
                description: "",
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "unordered",
                options: [
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "Hard Disk (HD): ",
                        textAfter: "<br>",
                        correct: 5
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "RAM: ",
                        textAfter: "<br>",
                        correct: 3
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "Solid State Disk (SSD): ",
                        textAfter: "<br>",
                        correct: 4
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "DVD: ",
                        textAfter: "<br>",
                        correct: 6
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "CACHE: ",
                        textAfter: "<br>",
                        correct: 2
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "Register: ",
                        textAfter: "<br>",
                        correct: 1
                    }
                ],
                warningMessage: []
            }
        },
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "Data from a directly mapped cache memory has an index (block) 11, total offset (block/word + byte offset) 011 and tag 0000.",
                points: 80,
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
                        textBefore: "The address of the data is ",
                        textAfter: ". ",
                        correct: "000011011"
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "Each block has a size of ",
                        textAfter: " bytes.<br>",
                        correct: 8
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "The cache memory has a total of ",
                        textAfter: " blocks, so therefore, the capacity of the cache memory is ",
                        correct: 4
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "",
                        textAfter: " bytes.<br>",
                        correct: 32
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "The size of the RAM memory is ",
                        textAfter: " bytes.<br>",
                        correct: 512
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "In direct mapping, for each block of the cache memory, ",
                        textAfter: " blocks from the RAM memory \"compete\".<br>",
                        correct: 16
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "To see if a given block is located in the cache memory, it is necessary to make ",
                        textAfter: " comparison(s) of the value of the ",
                        correct: 1
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "",
                        textAfter: ".",
                        correct: "tag",
                        options: ["tag", "index", "offset"]
                    }
                ],
                warningMessage: []
            }
        },
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "Data from a set-associative cache memory has a set (block) 11, total offset (block/word + byte offset) 001 and tag 0010. Each set consists of 8 blocks.",
                points: 60,
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
                        textBefore: "The address of the data is ",
                        textAfter: ".<br>",
                        correct: "001011001"
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "The cache memory has a total of ",
                        textAfter: " blocks, so therefore, the capacity of the cache memory is ",
                        correct: 32
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "",
                        textAfter: " bytes.<br>",
                        correct: 256
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "To see if a given block is located in the cache memory, it is necessary to make ",
                        textAfter: " comparison(s) of the value of the ",
                        correct: 8
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "",
                        textAfter: ".",
                        correct: "tag",
                        options: ["tag", "index", "offset"]
                    }
                ],
                warningMessage: []
            }
        },
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "Which of the following statements apply to associative cache mapping?",
                description: "Select one or more:",
                points: 30,
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "text" as const,
                options: [
                    {
                        text: "It offers the lowest miss rate compared to other mapping schemes",
                        isCorrect: true,
                        id: 0
                    },
                    {
                        text: "The same block can be found in different places in the cache memory at different times during program execution (but not present in two places simultaneously)",
                        isCorrect: true,
                        id: 1
                    },
                    {
                        text: "It has the simplest hardware implementation compared to other mapping schemes",
                        isCorrect: false,
                        id: 2
                    }
                ],
                warningMessage: []
            }
        },
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "Which of the following statements are true?",
                description: "Select one or more:",
                points: 30,
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "text" as const,
                options: [
                    {
                        text: "In write-back, data is written to main memory only when replacing a block from the cache memory",
                        isCorrect: true,
                        id: 0
                    },
                    {
                        text: "6 is not a valid value for set-associative mapping",
                        isCorrect: true,
                        id: 1
                    },
                    {
                        text: "There is a separate instruction and data L1 cache",
                        isCorrect: true,
                        id: 2
                    },
                    {
                        text: "2-way set associative mapping has better performance than 8-way set associative mapping",
                        isCorrect: false,
                        id: 3
                    },
                    {
                        text: "L1 cache is faster than L3 cache",
                        isCorrect: true,
                        id: 4
                    },
                    {
                        text: "In set-associative mapping, tag comparisons are made for blocks from the entire cache memory",
                        isCorrect: false,
                        id: 5
                    }
                ],
                warningMessage: []
            }
        },
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "A program consists of 1000 instructions. During the execution of the program, only 10 instructions were not in the cache memory. The access to the cache memory is 5 ns, and the access to the RAM memory is 500 ns.<br><br>",
                points: 30,
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
                        textBefore: "The miss rate for this program is ",
                        textAfter: "%. ",
                        correct: 1
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "The total penalty paid due to misses is ",
                        textAfter: " ns. ",
                        correct: 5000
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "The average memory access time is ",
                        textAfter: " ns.",
                        correct: 10
                    }
                ],
                warningMessage: []
            }
        },
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "Virtual memory uses ",
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
                        type: "select",
                        tolerance: 0,
                        textBefore: "",
                        textAfter: " mapping of blocks. ",
                        correct: "associative",
                        options: ["associative", "direct", "set-associative"]
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "To find in which frame the page is mapped, it is necessary to perform comparisons whose number is ",
                        textAfter: ".",
                        correct: 0
                    }
                ],
                warningMessage: []
            }
        },
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "A computer system implements virtual memory with a page size of 8 bytes. The capacity of the virtual space is 1024 bytes. The capacity of the physical memory is 64 bytes. The contents of a part of the page table are as follows:",
                points: 80,
                negativePoints: 20,
                description: "",
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "unordered",
                answerOverride: true,
                table: "[th]Index,[th]Frame,[th]Validity;0,2,1;1,3,1;2,4,0;3,1,1;4,5,1;5,1,0;6,7,1",
                options: [
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "<br>The size of the virtual address is ",
                        textAfter: " bits, of which ",
                        correct: 10
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "",
                        textAfter: " bits are for the page, and ",
                        correct: 7
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "",
                        textAfter: " bits are for the offset.<br>",
                        correct: 3
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "The size of the physical address is ",
                        textAfter: " bits, of which ",
                        correct: 6
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "",
                        textAfter: " bits are for the frame, and ",
                        correct: 3
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "",
                        textAfter: " bits are for the offset.<br>",
                        correct: 3
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "The entire page table has a total of ",
                        textAfter: " entries.<br>",
                        correct: 128
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "The virtual address 0000110111 maps to the physical address ",
                        textAfter: " (bits without spaces, enter / if it cannot be determined and explain why).",
                        correct: "111111"
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
        title: "AOK Exam 1",
        courseId: "AOK",
        duration: 600,
        date: new Date("2026-06-28"),
        description: "This is a theory heavy AOK quiz.",
        id: 0,
        type: "Exam",
        quizVersion: 13,
        // courseName: "Demo"
    }
}

export default demo;