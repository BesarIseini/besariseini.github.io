import {QuestionType} from "../../../src/types/QuestionType.ts";


const demo = {
    questions: [
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "Given the Boolean function\nF(x,y,z)=Σ(0,1,5,7)",
                points: 40,
                negativePoints: 20,
                description: "fill in the Karnaugh map by placing 1s and 0s in the correct cells.",
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "ordered",
                answerOverride: false,
                tableN: {
                    rows: 2,
                    columns: 4,
                },
                id: 0,
                dependsOn: -1,
                options: [
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "1",
                        textAfter: "",
                        correct: "1",
                        options: ["1", "2", "3", "4"],
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "1",
                        textAfter: "",
                        correct: "1"
                    },
                    {
                        type: "select",
                        tolerance: 0,
                        textBefore: "0",
                        textAfter: "",
                        correct: "0",
                        options: ["0", "1", "2", "3", "4", "1", "2", "3", "4", "1", "2", "3", "4"],
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "0",
                        textAfter: "",
                        correct: "0"
                    }],
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
                        type: "select",
                        tolerance: 1,
                        textBefore: "The Capital of Germany is: ",
                        textAfter: "(Answer is test-case insensitive, 1 mistake allowed).",
                        correct: "Berlin",
                        options: ["Berlin", "Paris", "Moscow", "London"]
                    },
                    {
                        type: "select",
                        tolerance: 1,
                        textBefore: " The Capital of France is: ",
                        textAfter: "(Answer is test-case insensitive, 1 mistake allowed). ",
                        correct: "Paris",
                        options: ["Berlin", "Paris", "Moscow", "London"]
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
],
    hasTimer: true,
     timer: 600,
    quizSettings: {
        shuffleQuestions: false,
        title: "Version 1.1 - Select",
        courseId: "DM",
        duration: 600,
        date: new Date("2026-06-10"),
        description: "This is a demo showcasing selection type added in v1.1.0",
        id: 4,
        type: "Practical",
        quizVersion: 13,
        // courseName: "Demo"
    }
}

export default demo;