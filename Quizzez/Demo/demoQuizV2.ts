import {QuestionType} from "../../../src/types/QuestionType.ts";
import {WarningMessagePlacement} from "../../../src/types/warning-message/WarningMessagePlacement.ts";
import {WarningMessageFormat} from "../../../src/types/warning-message/WarningMessageFormat.ts";
import {Color} from "../../../src/types/warning-message/Color.ts";
import {BorderStyle} from "../../../src/types/warning-message/BorderStyle.ts";

const demo = {
    questions: [
            {
                type: QuestionType.SINGLE_CHOICE,
                obj: {
                    question: "What is 5 + 5?",
                    description: "This is the question description.",
                    negativePoints: 10,
                    points: 10,
                    hasImage: false,
                    imageLink: "",
                    required: false,
                    renderType: "text" as const,
                    table: "[th][col=2] Lol Let's go, MotherFucker; Go go go, go, go go;[col=3]fuck",
                    options: [
                        { text: "6", isCorrect: false, id: 0 },
                        { text: "8", isCorrect: false, id: 1 },
                        { text: "10", isCorrect: true, id: 2 },
                        { text: "12", isCorrect: false, id: 3 }
                    ],
                    warningMessage: [{
                        message: "This is a Single Choice Type",
                        format: [WarningMessageFormat.NORMAL],
                        placement: WarningMessagePlacement.TOP
                    }]
                }
            },
    {
        type: QuestionType.SINGLE_CHOICE,
        obj: {
            question: "What is this?",
            description: "Select the correct option that describes what this is.",
            negativePoints: 10,
            points: 10,
            hasImage: true,
            imageLink: "/ananas.jpeg",
            required: false,
            renderType: "text" as const,
            code: [
                {
                    language: "C++",
                    code: `int main() {
    std::cout << "Dynamic C++ block!" << std::endl;
    return 0;
}`
                },
                {
                    language: "HTML",
                    code: `<div class="container">
    <h1>Hello World</h1>
</div>`
                }
            ],
            options: [
                { text: "Pineapple", isCorrect: true, id: 0 },
                { text: "Apple", isCorrect: false, id: 1 },
                { text: "Coconut", isCorrect: false, id: 2 },
                { text: "Pear", isCorrect: false, id: 3 }
            ],
            warningMessage: [
                {
                    message: "This Question has Negative Points!",
                    placement: WarningMessagePlacement.BOTTOM,
                    format: [WarningMessageFormat.ABSTRACT, WarningMessageFormat.CUSTOM],
                    style: {
                        visual: { background: Color.red },
                        text: { color: Color.white, textAlign: "center", bold: true, fontSize: 15 },
                        border: { borderRadius: 15, borderColor: Color.black, borderWidth: 2, borderStyle: BorderStyle.DASHED }
                    }
                },
                {
                    message: "This is a Single Choice Type",
                    format: [WarningMessageFormat.NORMAL],
                    placement: WarningMessagePlacement.TOP
                }
            ]
        }
    },
    {
        type: QuestionType.SINGLE_CHOICE,
        obj: {
            question: "Which one is the coconut?",
            description: "",
            negativePoints: 10,
            points: 10,
            hasImage: false,
            imageLink: "",
            required: false,
            renderType: "image" as const,
            options: [
                { text: "/ananas.jpeg", isCorrect: false, id: 0 },
                { text: "/ananas.jpeg", isCorrect: false, id: 1 },
                { text: "/coconut.jpeg", isCorrect: true, id: 2 },
                { text: "/ananas.jpeg", isCorrect: false, id: 3 }
            ],
            warningMessage: [{
                message: "This is a Single Choice Type",
                format: [WarningMessageFormat.NORMAL],
                placement: WarningMessagePlacement.TOP
            }]
        }
    },
    {
        type: QuestionType.MULTIPLE_CHOICE,
        obj: {
            question: "Match the correct type!",
            description: "Match the answers with the image provided.",
            points: 10,
            hasImage: true,
            imageLink: "/ananas.jpeg",
            required: false,
            renderType: "image",
            options: [
                { text: "/ananas.jpeg", isCorrect: true, id: 0 },
                { text: "/ananas.jpeg", isCorrect: true, id: 1 },
                { text: "/coconut.jpeg", isCorrect: false, id: 2 },
                { text: "/ananas.jpeg", isCorrect: true, id: 3 },
                { text: "/coconut.jpeg", isCorrect: false, id: 4 }
            ],
            warningMessage: [
                {
                    message: "This is a Multiple Choice Type",
                    format: [WarningMessageFormat.NORMAL],
                    placement: WarningMessagePlacement.TOP
                },
                {
                    message: "This Question has Negative Points!",
                    placement: WarningMessagePlacement.BOTTOM,
                    format: [WarningMessageFormat.ABSTRACT, WarningMessageFormat.CUSTOM],
                    style: {
                        visual: { background: Color.red },
                        text: { color: Color.white, textAlign: "center", bold: true, fontSize: 15 },
                        border: { borderRadius: 15, borderColor: Color.black, borderWidth: 2, borderStyle: BorderStyle.DASHED }
                    }
                }
            ]
        }
    },
    {
        type: QuestionType.MULTIPLE_CHOICE,
        obj: {
            question: "Select the letters",
            description: "",
            points: 10,
            hasImage: false,
            imageLink: "/ananas.jpeg",
            required: false,
            renderType: "text" as const,
            options: [
                { text: "x", isCorrect: true, id: 0 },
                { text: "y", isCorrect: true, id: 1 },
                { text: "5", isCorrect: false, id: 2 },
                { text: "z", isCorrect: true, id: 3 },
                { text: "1", isCorrect: false, id: 4 },
                { text: "4", isCorrect: false, id: 5 },
                { text: "9", isCorrect: false, id: 6 },
                { text: "a", isCorrect: true, id: 7 }
            ],
            warningMessage: [
                {
                    message: "This is a Multiple Choice Type",
                    format: [WarningMessageFormat.NORMAL],
                    placement: WarningMessagePlacement.TOP
                },
                {
                    message: "This Question has Negative Points!",
                    placement: WarningMessagePlacement.BOTTOM,
                    format: [WarningMessageFormat.ABSTRACT, WarningMessageFormat.CUSTOM],
                    style: {
                        visual: { background: Color.blue },
                        text: { color: Color.white, textAlign: "center", bold: true, fontSize: 15 },
                        border: { borderRadius: 15, borderColor: Color.black, borderWidth: 2, borderStyle: BorderStyle.DASHED }
                    }
                }
            ]
        }
    },
    {
        type: QuestionType.TRUE_FALSE,
        obj: {
            question: "5 + 5 = 10",
            correctAnswer: true,
            negativePoints: 10,
            points: 10,
            hasImage: false,
            imageLink: "",
            required: false,
            description: "",
            warningMessage: [{
                message: "This is a True or False Type",
                format: [WarningMessageFormat.NORMAL],
                placement: WarningMessagePlacement.TOP
            }]
        }
    },
    {
        type: QuestionType.SHORT_TEXT,
        obj: {
            question: "Write the name of the fruit.",
            description: "Write the name of the fruit in the input field. Must be a single word, tolerance level of 1 mistake letter.",
            imageLink: "/ananas.jpeg",
            required: false,
            hasImage: true,
            correct: ["Ananas", "Pineapple"],
            points: 10,
            negativePoints: 10,
            tolerance: 1,
            warningMessage: [
                {
                    message: "This is a Short Text Type",
                    format: [WarningMessageFormat.NORMAL],
                    placement: WarningMessagePlacement.TOP
                },
                {
                    message: "Multiple synonyms are allowed. 1 Mistake costs 20% of the points. 2 Mistakes is considered incorrect",
                    format: [WarningMessageFormat.ABSTRACT],
                    placement: WarningMessagePlacement.BOTTOM
                },
                {
                    message: "Answer is case insensitive",
                    format: [WarningMessageFormat.ABSTRACT],
                    placement: WarningMessagePlacement.BOTTOM
                }
            ]
        }
    },
    {
        type: QuestionType.NUMERIC,
        obj: {
            question: "Write the first 2 digits of PI",
            description: "In the answer also include '3.'",
            required: false,
            toleranceType: { type: "absolute", value: 1 },
            points: 10,
            negativePoints: 10,
            correct: 3.14,
            hasImage: false,
            imageLink: "",
            warningMessage: [
                {
                    message: "This is a Numeric Type",
                    format: [WarningMessageFormat.NORMAL],
                    placement: WarningMessagePlacement.TOP
                },
                {
                    message: "There is no tolerance, answer is strict!",
                    format: [WarningMessageFormat.ABSTRACT],
                    placement: WarningMessagePlacement.BOTTOM
                }
            ]
        }
    },
    {
        type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
        obj: {
            question: "FIll in the blanks.",
            points: 20,
            negativePoints: 10,
            description: "",
            hasImage: false,
            imageLink: "",
            required: false,
            renderType: "ordered",
            options: [
                {
                    type: "string",
                    tolerance: 1,
                    textBefore: "The Capital of Germany is: ",
                    textAfter: "(Answer is test-case insensitive, 1 mistake allowed)",
                    correct: "Berlin"
                },
                {
                    type: "string",
                    tolerance: 1,
                    textBefore: "The Capital of France is: ",
                    textAfter: "(Answer is test-case insensitive, 1 mistake allowed)",
                    correct: "Paris"
                },
                {
                    type: "number",
                    tolerance: { type: "strict" },
                    textBefore: "The first 2 digits of PI is: ",
                    textAfter: "(Strict, answer include '3.')",
                    correct: 3.14
                },
                {
                    type: "number",
                    tolerance: { type: "absolute", value: 0.02 },
                    textBefore: "The first 2 digits of Euler's Number (e) is: ",
                    textAfter: "(Absolute tolerance of 0.01, answer include '2.')",
                    correct: 2.71
                }
            ],
            warningMessage: [{
                message: "This is a Numeric Type",
                format: [WarningMessageFormat.NORMAL],
                placement: WarningMessagePlacement.TOP
            }]
        }
    },
],
    hasTimer: true,
     timer: 30,
    quizSettings: {
        shuffleQuestions: false,
        title: "Tables & Code Snippets",
        courseId: "DM",
        duration: 30,
        date: new Date("2026-03-02"),
        description: "This is a demo showcasing different tables and code snippets that were added in BETA 10. Refined BETA 11.",
        id: 1,
        type: "Practical",
        quizVersion: 10,   
        // courseName: "Demo"
    }
}

export default demo;