import {QuestionType} from "../../../src/types/QuestionType.ts";


const demo = {
    questions: [
    {
        type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
        obj: {
            question: "Represent the number -0.75 in single precision floatingpoint format:",
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
                    textAfter: "bits are used to represent the sign, ",
                    correct: "1"
                },
                {
                    type: "string",
                    tolerance: 0,
                    textBefore: "",
                    textAfter: "bits are used for the mantissa, and finally ",
                    correct: "23"
                },
                {
                    type: "string",
                    tolerance: 0,
                    textBefore: "",
                    textAfter: "bits are used for the exponent.",
                    correct: "8"
                },
                {
                    type: "string",
                    tolerance: 0,
                    textBefore: "<br><br> The number -0.75 in single precision floatingpoint format:",
                    textAfter: "",
                    correct: "1"
                },
                {
                    type: "string",
                    tolerance: 0,
                    textBefore: "",
                    textAfter: "",
                    correct: "01111110"
                },
                {
                    type: "string",
                    tolerance: 0,
                    textBefore: "",
                    textAfter: "",
                    correct: "10000000000000000000000"
                },
            ],
            warningMessage: []
        }
    },
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "FIll in the blanks. [UNORDERED]",
                points: 20,
                negativePoints: 10,
                description: "",
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "ordered",
                answerOverride: true,
                options: [
                    {
                        type: "string",
                        tolerance: 1,
                        textBefore: "The Capital of Germany is: ",
                        textAfter: "(Answer is test-case insensitive, 1 mistake allowed).",
                        correct: "Berlin"
                    },
                    {
                        type: "string",
                        tolerance: 1,
                        textBefore: " The Capital of France is: ",
                        textAfter: "(Answer is test-case insensitive, 1 mistake allowed). ",
                        correct: "Paris"
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "The first 2 digits of PI is: ",
                        textAfter: "(Strict, answer include '3.'). ",
                        correct: 3.14
                    },
                    {
                        type: "number",
                        tolerance: { type: "absolute", value: 0.02 },
                        textBefore: "The first 2 digits of Euler's Number (e) is: ",
                        textAfter: "(Absolute tolerance of 0.01, answer include '2.').",
                        correct: 2.71
                    }
                ],
                warningMessage: []
            }
        },
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "FIll in the blanks. [TableVend]",
                points: 20,
                negativePoints: 10,
                description: "",
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "tableVend",
                answerOverride: true,
                options: [
                    {
                        type: "string",
                        tolerance: 1,
                        textBefore: "The Capital of Germany is: ",
                        textAfter: "(Answer is test-case insensitive, 1 mistake allowed).",
                        correct: "Berlin"
                    },
                    {
                        type: "string",
                        tolerance: 1,
                        textBefore: " The Capital of France is: ",
                        textAfter: "(Answer is test-case insensitive, 1 mistake allowed). ",
                        correct: "Paris"
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "The first 2 digits of PI is: ",
                        textAfter: "(Strict, answer include '3.'). ",
                        correct: 3.14
                    },
                    {
                        type: "number",
                        tolerance: { type: "absolute", value: 0.02 },
                        textBefore: "The first 2 digits of Euler's Number (e) is: ",
                        textAfter: "(Absolute tolerance of 0.01, answer include '2.').",
                        correct: 2.71
                    }
                ],
                warningMessage: []
            }
        },
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "FIll in the blanks. [TableVmiddle]",
                points: 20,
                negativePoints: 10,
                description: "",
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "tableVmiddle",
                answerOverride: true,
                options: [
                    {
                        type: "string",
                        tolerance: 1,
                        textBefore: "The Capital of Germany is: ",
                        textAfter: "(Answer is test-case insensitive, 1 mistake allowed).",
                        correct: "Berlin"
                    },
                    {
                        type: "string",
                        tolerance: 1,
                        textBefore: " The Capital of France is: ",
                        textAfter: "(Answer is test-case insensitive, 1 mistake allowed). ",
                        correct: "Paris"
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "The first 2 digits of PI is: ",
                        textAfter: "(Strict, answer include '3.'). ",
                        correct: 3.14
                    },
                    {
                        type: "number",
                        tolerance: { type: "absolute", value: 0.02 },
                        textBefore: "The first 2 digits of Euler's Number (e) is: ",
                        textAfter: "(Absolute tolerance of 0.01, answer include '2.').",
                        correct: 2.71
                    }
                ],
                warningMessage: []
            }
        },
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "FIll in the blanks. [TableVstart]",
                points: 20,
                negativePoints: 10,
                description: "",
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "tableVstart-Answers,Questions,Explanation",
                answerOverride: true,
                options: [
                    {
                        type: "string",
                        tolerance: 1,
                        textBefore: "The Capital of Germany is: ",
                        textAfter: "(Answer is test-case insensitive, 1 mistake allowed).",
                        correct: "Berlin"
                    },
                    {
                        type: "string",
                        tolerance: 1,
                        textBefore: " The Capital of France is: ",
                        textAfter: "(Answer is test-case insensitive, 1 mistake allowed). ",
                        correct: "Paris"
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "The first 2 digits of PI is: ",
                        textAfter: "(Strict, answer include '3.'). ",
                        correct: 3.14
                    },
                    {
                        type: "number",
                        tolerance: { type: "absolute", value: 0.02 },
                        textBefore: "The first 2 digits of Euler's Number (e) is: ",
                        textAfter: "(Absolute tolerance of 0.01, answer include '2.').",
                        correct: 2.71
                    }
                ],
                warningMessage: []
            }
        },
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "FIll in the blanks. [TableVoneEnd]",
                points: 20,
                negativePoints: 10,
                description: "",
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "tableVoneEnd-Questions,Answers",
                answerOverride: true,
                options: [
                    {
                        type: "string",
                        tolerance: 1,
                        textBefore: "The Capital of Germany is: ",
                        textAfter: "(Answer is test-case insensitive, 1 mistake allowed).",
                        correct: "Berlin"
                    },
                    {
                        type: "string",
                        tolerance: 1,
                        textBefore: " The Capital of France is: ",
                        textAfter: "(Answer is test-case insensitive, 1 mistake allowed). ",
                        correct: "Paris"
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "The first 2 digits of PI is: ",
                        textAfter: "(Strict, answer include '3.'). ",
                        correct: 3.14
                    },
                    {
                        type: "number",
                        tolerance: { type: "absolute", value: 0.02 },
                        textBefore: "The first 2 digits of Euler's Number (e) is: ",
                        textAfter: "(Absolute tolerance of 0.01, answer include '2.').",
                        correct: 2.71
                    }
                ],
                warningMessage: []
            }
        },
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "FIll in the blanks. [TableVoneStart]",
                points: 20,
                negativePoints: 10,
                description: "",
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "tableVoneStart",
                answerOverride: true,
                options: [
                    {
                        type: "string",
                        tolerance: 1,
                        textBefore: "The Capital of Germany is: ",
                        textAfter: "(Answer is test-case insensitive, 1 mistake allowed).",
                        correct: "Berlin"
                    },
                    {
                        type: "string",
                        tolerance: 1,
                        textBefore: " The Capital of France is: ",
                        textAfter: "(Answer is test-case insensitive, 1 mistake allowed). ",
                        correct: "Paris"
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "The first 2 digits of PI is: ",
                        textAfter: "(Strict, answer include '3.'). ",
                        correct: 3.14
                    },
                    {
                        type: "number",
                        tolerance: { type: "absolute", value: 0.02 },
                        textBefore: "The first 2 digits of Euler's Number (e) is: ",
                        textAfter: "(Absolute tolerance of 0.01, answer include '2.').",
                        correct: 2.71
                    }
                ],
                warningMessage: []
            }
        },
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "FIll in the blanks. [TableV]",
                points: 20,
                negativePoints: 10,
                description: "",
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "tableVend-One Header Also Possible[col=3]",
                answerOverride: true,
                mix: ["tableVstart", "tableVmiddle", "tableVend", "tableVoneStart", "tableVoneEnd"],
                options: [
                    {
                        type: "string",
                        tolerance: 1,
                        textBefore: "The Capital of Germany is: ",
                        textAfter: "(Answer is test-case insensitive, 1 mistake allowed).",
                        correct: "Berlin"
                    },
                    {
                        type: "string",
                        tolerance: 1,
                        textBefore: " The Capital of France is: ",
                        textAfter: "(Answer is test-case insensitive, 1 mistake allowed). ",
                        correct: "Paris"
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "The first 2 digits of PI is: ",
                        textAfter: "(Strict, answer include '3.'). ",
                        correct: 3.14
                    },
                    {
                        type: "number",
                        tolerance: { type: "absolute", value: 0.02 },
                        textBefore: "The first 2 digits of Euler's Number (e) is: ",
                        textAfter: "(Absolute tolerance of 0.01, answer include '2.').",
                        correct: 2.71
                    },
                    {
                        type: "string",
                        tolerance: 1,
                        textBefore: "The Capital of Macedonia is: ",
                        textAfter: "(Answer is test-case insensitive, 1 mistake allowed).",
                        correct: "Skopje"
                    },
                    {
                        type: "string",
                        tolerance: 1,
                        textBefore: "The Capital of Albania is: ",
                        textAfter: "(This is default rendering since mix doesn't exist for this option).",
                        correct: "Tirana"
                    },
                ],
                warningMessage: []
            }
        },
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "FIll in the blanks. [tableH]",
                points: 20,
                negativePoints: 10,
                description: "",
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "tableH-Question,Description,Answer",
                answerOverride: false,
                options: [
                    {
                        type: "string",
                        tolerance: 1,
                        textBefore: "The Capital of Germany is: ",
                        textAfter: "(Answer is test-case insensitive, 1 mistake allowed).",
                        correct: "Berlin"
                    },
                    {
                        type: "string",
                        tolerance: 1,
                        textBefore: " The Capital of France is: ",
                        textAfter: "(Answer is test-case insensitive, 1 mistake allowed). ",
                        correct: "Paris"
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "The first 2 digits of PI is: ",
                        textAfter: "(Strict, answer include '3.'). ",
                        correct: 3.14
                    },
                    {
                        type: "number",
                        tolerance: { type: "absolute", value: 0.02 },
                        textBefore: "The first 2 digits of Euler's Number (e) is: ",
                        textAfter: "(Absolute tolerance of 0.01, answer include '2.').",
                        correct: 2.71
                    }
                ],
                warningMessage: []
            }
        },
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "FIll in the blanks. [tableHone]",
                points: 20,
                negativePoints: 10,
                description: "",
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "tableHone",
                answerOverride: true,
                options: [
                    {
                        type: "string",
                        tolerance: 1,
                        textBefore: "The Capital of Germany is: ",
                        textAfter: "(Answer is test-case insensitive, 1 mistake allowed).",
                        correct: "Berlin"
                    },
                    {
                        type: "string",
                        tolerance: 1,
                        textBefore: " The Capital of France is: ",
                        textAfter: "(Answer is test-case insensitive, 1 mistake allowed). ",
                        correct: "Paris"
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "The first 2 digits of PI is: ",
                        textAfter: "(Strict, answer include '3.'). ",
                        correct: 3.14
                    },
                    {
                        type: "number",
                        tolerance: { type: "absolute", value: 0.02 },
                        textBefore: "The first 2 digits of Euler's Number (e) is: ",
                        textAfter: "(Absolute tolerance of 0.01, answer include '2.').",
                        correct: 2.71
                    }
                ],
                warningMessage: []
            }
        },
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "FIll in the blanks. [tableN]",
                points: 20,
                negativePoints: 10,
                description: "",
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "tableN|yz[col=4];00,01,11,10|x[row=2];0,1",
                answerOverride: true,
                tableN: {
                    rows: 2,
                    columns: 4,
                },
                options: [
                    {
                        type: "string",
                        tolerance: 1,
                        textBefore: "The Capital of Germany is: ",
                        textAfter: "(Answer is test-case insensitive, 1 mistake allowed).",
                        correct: "Berlin"
                    },
                    {
                        type: "string",
                        tolerance: 1,
                        textBefore: " The Capital of France is: ",
                        textAfter: "(Answer is test-case insensitive, 1 mistake allowed). ",
                        correct: "Paris"
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "The first 2 digits of PI is: ",
                        textAfter: "(Strict, answer include '3.'). ",
                        correct: 3.14
                    },
                    {
                        type: "number",
                        tolerance: { type: "absolute", value: 0.02 },
                        textBefore: "The first 2 digits of Euler's Number (e) is: ",
                        textAfter: "(Absolute tolerance of 0.01, answer include '2.').",
                        correct: 2.71
                    },
                    {
                        type: "string",
                        tolerance: 1,
                        textBefore: "The Capital of Germany is: ",
                        textAfter: "(Answer is test-case insensitive, 1 mistake allowed).",
                        correct: "Berlin"
                    },
                    {
                        type: "string",
                        tolerance: 1,
                        textBefore: " The Capital of France is: ",
                        textAfter: "(Answer is test-case insensitive, 1 mistake allowed). ",
                        correct: "Paris"
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "The first 2 digits of PI is: ",
                        textAfter: "(Strict, answer include '3.'). ",
                        correct: 3.14
                    },
                    {
                        type: "number",
                        tolerance: { type: "absolute", value: 0.02 },
                        textBefore: "The first 2 digits of Euler's Number (e) is: ",
                        textAfter: "(Absolute tolerance of 0.01, answer include '2.').",
                        correct: 2.71
                    }
                ],
                warningMessage: []
            }
        },
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "FIll in the blanks. [tableN]",
                points: 20,
                negativePoints: 10,
                description: "",
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "tableN|00,01,11,10|0,1",
                answerOverride: true,
                tableN: {
                    rows: 2,
                    columns: 4,
                },
                options: [
                    {
                        type: "string",
                        tolerance: 1,
                        textBefore: "The Capital of Germany is: ",
                        textAfter: "(Answer is test-case insensitive, 1 mistake allowed).",
                        correct: "Berlin"
                    },
                    {
                        type: "string",
                        tolerance: 1,
                        textBefore: " The Capital of France is: ",
                        textAfter: "(Answer is test-case insensitive, 1 mistake allowed). ",
                        correct: "Paris"
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "The first 2 digits of PI is: ",
                        textAfter: "(Strict, answer include '3.'). ",
                        correct: 3.14
                    },
                    {
                        type: "number",
                        tolerance: { type: "absolute", value: 0.02 },
                        textBefore: "The first 2 digits of Euler's Number (e) is: ",
                        textAfter: "(Absolute tolerance of 0.01, answer include '2.').",
                        correct: 2.71
                    },
                    {
                        type: "string",
                        tolerance: 1,
                        textBefore: "The Capital of Germany is: ",
                        textAfter: "(Answer is test-case insensitive, 1 mistake allowed).",
                        correct: "Berlin"
                    },
                    {
                        type: "string",
                        tolerance: 1,
                        textBefore: " The Capital of France is: ",
                        textAfter: "(Answer is test-case insensitive, 1 mistake allowed). ",
                        correct: "Paris"
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "The first 2 digits of PI is: ",
                        textAfter: "(Strict, answer include '3.'). ",
                        correct: 3.14
                    },
                    {
                        type: "number",
                        tolerance: { type: "absolute", value: 0.02 },
                        textBefore: "The first 2 digits of Euler's Number (e) is: ",
                        textAfter: "(Absolute tolerance of 0.01, answer include '2.').",
                        correct: 2.71
                    }
                ],
                warningMessage: []
            }
        },
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "FIll in the blanks. [tableN]",
                points: 20,
                negativePoints: 10,
                description: "",
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "tableN",
                answerOverride: true,
                tableN: {
                    rows: 2,
                    columns: 4,
                },
                options: [
                    {
                        type: "string",
                        tolerance: 1,
                        textBefore: "The Capital of Germany is: ",
                        textAfter: "(Answer is test-case insensitive, 1 mistake allowed).",
                        correct: "Berlin"
                    },
                    {
                        type: "string",
                        tolerance: 1,
                        textBefore: " The Capital of France is: ",
                        textAfter: "(Answer is test-case insensitive, 1 mistake allowed). ",
                        correct: "Paris"
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "The first 2 digits of PI is: ",
                        textAfter: "(Strict, answer include '3.'). ",
                        correct: 3.14
                    },
                    {
                        type: "number",
                        tolerance: { type: "absolute", value: 0.02 },
                        textBefore: "The first 2 digits of Euler's Number (e) is: ",
                        textAfter: "(Absolute tolerance of 0.01, answer include '2.').",
                        correct: 2.71
                    },
                    {
                        type: "string",
                        tolerance: 1,
                        textBefore: "The Capital of Germany is: ",
                        textAfter: "(Answer is test-case insensitive, 1 mistake allowed).",
                        correct: "Berlin"
                    },
                    {
                        type: "string",
                        tolerance: 1,
                        textBefore: " The Capital of France is: ",
                        textAfter: "(Answer is test-case insensitive, 1 mistake allowed). ",
                        correct: "Paris"
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "The first 2 digits of PI is: ",
                        textAfter: "(Strict, answer include '3.'). ",
                        correct: 3.14
                    },
                    {
                        type: "number",
                        tolerance: { type: "absolute", value: 0.02 },
                        textBefore: "The first 2 digits of Euler's Number (e) is: ",
                        textAfter: "(Absolute tolerance of 0.01, answer include '2.').",
                        correct: 2.71
                    }
                ],
                warningMessage: []
            }
        },
],
    hasTimer: true,
     timer: 600,
    quizSettings: {
        shuffleQuestions: false,
        title: "Fill In The Blanks Rework",
        courseId: "DM",
        duration: 600,
        date: new Date("2026-03-02"),
        description: "This is a demo containing FILL IN THE BLANKS Rework Content. Added in BETA 10.",
        id: 2,
        type: "Practical",
        quizVersion: 10,
        // courseName: "Demo"
    }
}

export default demo;